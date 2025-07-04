import { z } from 'zod';

export const clinicProfileOptionalFormSchema = z.object({
	  no_of_doctors: z.string().optional(),
	  daily_monthly_patient_footfall: z.string().optional(),
	  designation: z.string().optional(),
	  website_clinic_url: z.string().optional(),
	  year_establishment: z.string().optional(),
	  ai_filter: z.number().optional(),
});

export type ClinicProfileOptionalFormSchema = z.infer<typeof clinicProfileOptionalFormSchema>;
