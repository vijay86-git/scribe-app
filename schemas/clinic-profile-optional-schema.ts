import { z } from 'zod';

export const clinicProfileOptionalFormSchema = z.object({
	  no_of_doctors: z.number().optional(),
	  daily_monthly_patient_footfall: z.number().optional(),
	  website_clinic_url: z.string().optional()
});

export type ClinicProfileOptionalFormSchema = z.infer<typeof clinicProfileOptionalFormSchema>;
