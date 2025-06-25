import Link from "next/link";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

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

import { Eye } from "lucide-react";


import { Badge } from '@/components/ui/badge'

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

		            <h1 className="scroll-m-20 text-left text-2xl font-extrabold tracking-tight text-balance">
		              Patients List
		            </h1>

		              <div className="space-y-4 mb-2">
		                <Input
		                  placeholder="Search by name or email..."
		                  className="max-w-sm"
		                />
		              </div>

			            <div className="overflow-hidden rounded-sm border border-gray-200 border-1">
					        	 <Table className="w-full">
					              
					              <TableHeader>
					                <TableRow>
					                   	    <TableHead className="text-center bg-gray-100 font-bold">#</TableHead>
								            <TableHead className="text-center bg-gray-100 font-bold">Patient Id</TableHead>
								            <TableHead className="text-center bg-gray-100 font-bold">Name</TableHead>
								            <TableHead className="text-center bg-gray-100 font-bold">Contact No</TableHead>
								            <TableHead className="text-center bg-gray-100 font-bold">Personal Health Number</TableHead>
								            <TableHead className="text-center bg-gray-100 font-bold">Date</TableHead>
								            <TableHead className="text-center bg-gray-100 font-bold">Action</TableHead>
					                </TableRow>
					              </TableHeader>
					              <TableBody>

					                <TableRow>
					                  <TableCell className="text-center font-medium">1</TableCell>
					                  <TableCell className="text-center font-medium">JFGH83647</TableCell>
					                  <TableCell className="text-center font-medium">Alex Doe</TableCell>
					                  <TableCell className="text-center font-medium">98474747478</TableCell>
					                  <TableCell className="text-center font-medium">HFYFHFH878</TableCell>
					                  <TableCell className="text-center font-medium">15 Jun 25 12:00 PM</TableCell>
					                  <TableCell className="text-center font-medium"><Eye size={18} className="w-5 h-5 text-green-700 cursor-pointer" /></TableCell>
					                </TableRow>

					              </TableBody>
					            </Table>
			            </div>


            		</div>
          </SidebarInset>
  )
}
