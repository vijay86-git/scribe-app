'use client'
import React, { useState, useEffect } from "react";

import Link from "next/link";
import { Label } from "@/components/ui/label"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
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

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { HelpCircle, Loader2 } from "lucide-react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Meta = {
  id: number;
  name: string;
};


type MetaDataType = {
  country: Meta[] | null; 
  specialization: Meta[] | null;
  designation: Meta[] | null;
};



export default function Page() {

  return (
          <SidebarInset>
            <header className="flex h-16 shrink-0 items-center gap-2 px-4">
              <SidebarTrigger className="-ml-1" />
              <Separator
                orientation="vertical"
                className="mr-2 data-[orientation=vertical]:h-4"
              />
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem className="hidden md:block">
                    <BreadcrumbLink href="#">
                      Building Your Application
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="hidden md:block" />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </header>
            <div className="flex flex-1 flex-col gap-4 p-4 pt-0">

              <div className="flex w-full flex-col">
                  <h1 className="scroll-m-20 text-left text-2xl mb-4 font-extrabold tracking-tight text-balance">Clinic Details</h1>
                  <Tabs defaultValue="mandatory">
                    <TabsList>
                      <TabsTrigger value="mandatory">Mandatory</TabsTrigger>
                      <TabsTrigger value="business">Business</TabsTrigger>
                    </TabsList>
                    <TabsContent value="mandatory">
                      <Card>
                        <CardHeader>
                          <CardTitle><sup>*</sup> (mandatory fields)</CardTitle>
                        </CardHeader>

                        <CardContent className="grid">
                          
                          <section className="container">
                          
                          <form className="border border-gray-100 rounded-lg p-4">
                            <div className="flex gap-3 mb-6">
                                  <div className="grid w-full max-w-sm items-center gap-1.5">
                                  <Label htmlFor="clinic_name">Clinic Name<sup>*</sup></Label>
                                  <Input type="text" id="clinic_name" placeholder="Clinic Name" />
                                </div>
                                <div className="grid w-full max-w-sm items-center gap-1.5">
                                  <Label htmlFor="country">Country<sup>*</sup></Label>

                                    <Select>
                                      <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Select a country" />
                                      </SelectTrigger>
                                      <SelectContent>
                                        
                                          <SelectItem value="1">
                                            India
                                          </SelectItem>

                                      </SelectContent>
                                    </Select>
                                  
                                </div>
                                <div className="grid w-full max-w-sm items-center gap-1.5">
                                  <Label htmlFor="state">State/Province <sup>*</sup></Label>
                                  <Input type="text" id="state" placeholder="State/Province" />
                                </div>
                            </div>

                            <div className="flex gap-3 mb-6">

                              <div className="grid w-full max-w-sm items-center gap-1.5">
                                  <Label htmlFor="city">City<sup>*</sup></Label>
                                  <Input type="text" id="city" placeholder="City" />
                                </div>

                                  <div className="grid w-full max-w-sm items-center gap-1.5">
                                  <Label htmlFor="address">Street Address<sup>*</sup></Label>
                                  <Input type="text" id="address" placeholder="Street Address" />
                                </div>
                                <div className="relative grid w-full max-w-sm items-center gap-1.5">
                                  <Label htmlFor="patient_id_prefix">Patient ID Prefix<sup>*</sup> <TooltipProvider>
                                    <Tooltip>
                                      <TooltipTrigger asChild>
                                        <HelpCircle className="absolute right-2 top-1 -translate-y-1/2 h-4 w-4 text-muted-foreground cursor-pointer" />
                                      </TooltipTrigger>
                                      <TooltipContent>
                                        <p>This is a tooltip</p>
                                      </TooltipContent>
                                    </Tooltip>
                                  </TooltipProvider></Label>
                                  <Input type="text" id="patient_id_prefix" placeholder="Patient ID Prefix" />
                                   
                                </div>
                            </div>

                            <div className="flex gap-3 mb-6">
                                <div className="grid w-full max-w-sm items-center gap-1.5">
                                  <Label htmlFor="email">Clinic Logo<sup>*</sup></Label>
                                  <Input id="image" type="file" />
                                </div>
                                <div className="grid w-full max-w-sm items-center gap-1.5">
                                </div>
                               <div className="grid w-full max-w-sm items-center gap-1.5">
                                </div>
                            </div>

                      </form>

                        </section>

                        </CardContent>
                      </Card>
                    </TabsContent>


                    <TabsContent value="business">
                      <Card>
                        <CardHeader>
                          <CardTitle>Optional (but recommended)</CardTitle>
                        </CardHeader>
                        <CardContent className="grid gap-6">
                         
                          <section className="container">
                          
                                  <form className="border border-gray-100 rounded-lg p-4">
                                    <div className="flex gap-3 mb-6">
                                      <div className="grid w-full max-w-sm items-center gap-1.5">
                                      <Label htmlFor="email">Number of Doctors</Label>
                                      <Input type="number" min="0" id="email" placeholder="Number of Doctors" />
                                    </div>

                                    <div className="grid w-full max-w-sm items-center gap-1.5">
                                      <Label htmlFor="email">Daily/Monthly Patient Footfall</Label>
                                      <Input type="text" id="email" placeholder="Daily/Monthly Patient Footfall" />
                                    </div>

                                    <div className="grid w-full max-w-sm items-center gap-1.5">
                                      <Label htmlFor="email">Clinic Specializations</Label>

                                        <Select>
                                          <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Select Specialization" />
                                          </SelectTrigger>
                                          <SelectContent>
                                            <SelectItem value="1">
                                            	Specialization1
                                            </SelectItem>
                                          </SelectContent>
                                        </Select>

                                    </div>

                                </div>

                                <div className="flex gap-3 mb-6">

                                  <div className="grid w-full max-w-sm items-center gap-1.5">
                                      <Label htmlFor="email">Designation/Role</Label>

                                        <Select>
                                          <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Select Designation/Role" />
                                          </SelectTrigger>
                                          <SelectContent>
                                            <SelectItem value="1">
                                            	Designation1
                                            </SelectItem>
                                          </SelectContent>
                                        </Select>
                                    </div>

                                      <div className="grid w-full max-w-sm items-center gap-1.5">
                                      <Label htmlFor="email">Website or Clinic URL <sup>*</sup></Label>
                                      <Input type="url" id="url" placeholder="Website or Clinic URL" />
                                    </div>
                                    <div className="grid w-full max-w-sm items-center gap-1.5">
                                      <Label htmlFor="email">Year of Establishment</Label>
                                      <Select>
                                        <SelectTrigger className="w-full">
                                          <SelectValue placeholder="Select Year of Establishment" />
                                        </SelectTrigger>
                                        <SelectContent>
                                          <SelectItem value="2025">2025</SelectItem>
                                          <SelectItem value="2024">2024</SelectItem>
                                          <SelectItem value="2023">2023</SelectItem>
                                        </SelectContent>
                                      </Select>
                                    </div>
                                </div>

                              </form>

                            </section>
                        </CardContent>
                      </Card>
                    </TabsContent>
                    <Button className="mt-3">Save Changes</Button>
                  </Tabs>

                </div>

            </div>
          </SidebarInset>
  )
}
