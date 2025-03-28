import { generateEmailHtml } from "@/utils/generateEmailHtml";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

import { escapeHtml } from "@/utils";

let transporter: nodemailer.Transporter;

const contactFormSchema = z.object({
	author: z.string().min(5).max(100),
	message: z.string().min(20).max(5000),
	address: z.string().email().max(255),
});

function getTransporter(): nodemailer.Transporter {
	if (transporter) return transporter;

	if (!process.env.EMAIL_USERNAME || !process.env.EMAIL_PASSWORD) {
		throw new Error("Email credentials are not configured");
	}

	transporter = nodemailer.createTransport({
		host: "smtp.rambler.ru",
		port: 465,
		secure: true,
		auth: {
			user: process.env.EMAIL_USERNAME,
			pass: process.env.EMAIL_PASSWORD,
		},
		authMethod: "PLAIN",
	});

	return transporter;
}

export async function POST(request: Request): Promise<NextResponse> {
	try {
		const jsonData = await request.json();

		const validation = contactFormSchema.safeParse(jsonData);

		if (!validation.success) {
			return NextResponse.json(
				{ success: false, message: "Validation failed", errors: validation.error.errors },
				{ status: 400 },
			);
		}

		const formData = validation.data;
		const transporter = getTransporter();

		const mailOptions = {
			from: `"Contact Form" <${process.env.EMAIL_USERNAME}>`,
			to: process.env.EMAIL_USERNAME,
			subject: `New message from "${escapeHtml(formData.author)}"`,
			text: formData.message,
			html: generateEmailHtml(formData),
		};

		await transporter.sendMail(mailOptions);

		return NextResponse.json({ success: true, message: "Message sent successfully" }, { status: 200 });
	} catch (error) {
		console.error("Email sending error:", error);

		const errorResponse = {
			success: false,
			message: "Failed to send message",
			error: error instanceof Error ? error.message : "Unknown error",
		};

		if (error instanceof Error) {
			if (error.message.includes("Invalid login") || error.message.includes("Authentication failed")) {
				errorResponse.message = "Server error: Mail authentication failed";
			} else if (error.message.includes("ENOTFOUND")) {
				errorResponse.message = "Server error: Mail service unavailable";
			} else if (error.message.includes("Email credentials are not configured")) {
				errorResponse.message = "Server error: Mail service not configured";
			}
		}

		return NextResponse.json(errorResponse, { status: 500 });
	}
}
