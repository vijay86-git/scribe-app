import Header from "@/components/header"
import Link from "next/link";
import { Label } from "@/components/ui/label"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

import { HelpCircle, Loader2 } from "lucide-react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import Basic from '@/components/clinic/basic'
import Optional from '@/components/clinic/optional'
import { apiFetch } from '@/lib/api';
import { apiRoutes } from '@/lib/apiRoutes';

type MetaCol = {
  id: number;
  name: string;
};

type Specialization = {
  value: string;
  label: string;
};


type MetaDataType = {
  countries: MetaCol[]; 
  designations: MetaCol[];
  specializations: Specialization[];
};

type ClinicType = {
    clinic_name: string;
    clinic_logo?: string;
    street_address: string;
    city: string;
    state: string;
    zip_code: number;
    country: string;
    gst_no: string;
    patient_id_prefix: string;
    image?: string;
    no_of_doctors?: number;
    daily_monthly_patient_footfall?: number;
    designation?: string;
    website_clinic_url?: string;
    year_establishment?: string;
};



export default async function Page() {

  let countries: MetaCol[] = [];
  let designations: MetaCol[] = [];
  let specializations: Specialization[] = [];
  let clinicDetail: ClinicType | null = null;

  // let clinicDetail: ClinicType = {
  //     clinic_name: "",
  //     clinic_logo: "",
  //     street_address: "",
  //     city: "",
  //     state: "",
  //     zip_code: 0,
  //     country: 0,
  //     gst_no: "",
  //     patient_id_prefix: "",
  //     no_of_doctors: 0,
  //     daily_monthly_patient_footfall: 0,
  //     designation: "",
  //     website_clinic_url: "",
  //     year_establishment: "",
  //     ai_filter: ""
  // };

  const api_base_url: string = process.env.NEXT_PUBLIC_API_BASE_URL || ''; 
  const metadataUrl = await apiRoutes.metadata;
  const clinicDetails = await apiRoutes.clinicDetails;

  try {
        const response: MetaDataType = await fetch(`${api_base_url}${metadataUrl}`).then(res => res.json());
        ({ countries, designations, specializations } = response);
        clinicDetail = await fetch(`${api_base_url}${clinicDetails}`).then(res => res.json()); 
      } catch (error) {
        console.error("Failed to fetch metadata:", error);
      }

    //     const response = await res.json();
    //     if (response.success) {
    //        const { countries, designations, specializations} = response.data;
    //        setCountries(countries);
    //        setDesignations(designations);
    //        setSpecializations(specializations);
    //        setLoading(false);
    //     }

    //     if (response?.form_validation) {
    //        setErrors(response.form_validation);
    //     }
    //  };
     
    // useEffect(() => {
    //     setLoading(true);
    //     getMetaDataInfo();
    // }, []);

  return (
            <SidebarInset>  
               <Header />
               <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
                  <div className="flex w-full flex-col">
                     <h1 className="scroll-m-20 text-left text-2xl mb-4 font-extrabold tracking-tight text-balance">Clinic Details</h1>
                     {clinicDetail && (
                     <Tabs defaultValue="mandatory">
                        <TabsList>
                           <TabsTrigger value="mandatory">Mandatory</TabsTrigger>
                           <TabsTrigger value="business">Business</TabsTrigger>
                        </TabsList>
                        <TabsContent value="mandatory">
                           1
                        </TabsContent>
                        <TabsContent value="business">
                          2
                        </TabsContent>
                     </Tabs>) 
                    }
                  </div>
               </div>
            </SidebarInset>
  )
}
