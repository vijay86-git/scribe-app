'use client'

import React, { useState, useEffect } from "react";

import Link from "next/link";
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { z } from 'zod';

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { HelpCircle, Loader2 } from "lucide-react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { MultiSelect } from "@/components/multi-select";

type MetaCol = {
  id: number;
  name: string;
};


type ClinicType = {
    no_of_doctors?: number;
    daily_monthly_patient_footfall?: number;
    designation?: string;
    website_clinic_url?: string;
    year_establishment?: string;
    ai_filter?: string;
    specializations?: number[]
};

type Specialization = {
  value: number;
  label: string;
};

import { clinicProfileOptionalFormSchema } from "@/schemas/clinic-profile-optional-schema";
type FormData = z.infer<typeof clinicProfileOptionalFormSchema>;
type FormErrors = Partial<Record<keyof FormData, string[]>>;

export default function Optional({designations, specializations, clinic_detail}: {designations: MetaCol[], specializations: Specialization[], clinic_detail: ClinicType}) {

  const {no_of_doctors, daily_monthly_patient_footfall, designation, website_clinic_url, year_establishment, ai_filter} = clinic_detail;

  const [formData, setFormData] = useState<FormData>({no_of_doctors, daily_monthly_patient_footfall, designation, website_clinic_url, year_establishment, ai_filter});

  const [selectedSpecializations, setSelectedSpecializations] = useState<number[] | (() => number[])>(clinic_detail.specializations ?? []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };

  return (
            <Card>
              <CardHeader>
                 <CardTitle>Optional (but recommended)</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-6">
                 <section className="container">
                    
                 </section>
              </CardContent>
           </Card>
  	)
}
