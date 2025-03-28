import { ContactFormData } from "@/types";

import { escapeHtml } from "@/utils";

export const generateEmailHtml = (data: ContactFormData): string => {
	return `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
      <h2 style="color: #444;">New Contact Form Submission</h2>
      <p><strong>From:</strong> ${escapeHtml(data.author)}</p>
      <p><strong>Email:</strong> ${escapeHtml(data.address)}</p>
      <p><strong>Message:</strong></p>
      <p style="background: #f5f5f5; padding: 15px; border-radius: 5px; margin-top:10px;">
        ${escapeHtml(data.message.trim()).replace(/\n/g, "<br>")}
      </p>
      <p style="font-size: 0.8em; color: #999; margin-top:10px;">
        Sent at ${new Date().toLocaleString()}
      </p>
    </div>
  `;
};
