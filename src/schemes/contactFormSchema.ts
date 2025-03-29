import { z } from "zod";

export const contactFormSchema = z.object({
	author: z.string().min(5).max(100),
	message: z.string().min(20).max(5000),
	address: z.string().email().max(255),
	recaptchaToken: z.string().min(1),
});
