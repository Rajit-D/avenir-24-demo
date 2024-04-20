import { z } from "zod";

export const soloEventSchema = z.object({
  name: z.string().min(1, "Name cannot be empty"),
  collegeName: z.string().min(1, "College name cannot be empty"),
  whatsappNumber: z.string().refine((value) => /^\d{10}$/.test(value), {
    message: "WhatsApp number must be a 10-digit string",
    path: ["whatsappNumber"],
  }),
  alternateNumber: z.string().refine((value) => /^\d{10}$/.test(value), {
    message: "Alternate number must be a 10-digit string",
    path: ["alternateNumber"],
  }),
  email: z.string().email(),
});

export type TSoloEventSchema = z.infer<typeof soloEventSchema>;
