import nodemailer from "nodemailer";

export const getTransporter = (transporter?: nodemailer.Transporter): nodemailer.Transporter => {
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
};
