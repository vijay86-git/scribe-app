import { z } from 'zod';

export const clinicProfileOptionalFormSchema = z.object({
	  no_of_doctors: z.number().optional(),
	  daily_monthly_patient_footfall: z.number().optional(),
	  designation: z.number().optional(),
	  website_clinic_url: z.string().optional(),
	  year_establishment: z.number().optional(),
	  ai_filter: z.number().optional(),
});

export type ClinicProfileOptionalFormSchema = z.infer<typeof clinicProfileOptionalFormSchema>;
