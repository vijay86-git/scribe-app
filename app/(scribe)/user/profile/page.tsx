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

export default async function Page() {

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

	            <h1 className="scroll-m-20 text-left text-2xl mb-4 font-extrabold tracking-tight text-balance">
	              Update Profile
	            </h1>

	            <form className="border border-gray-100 rounded-lg p-4">
	                
	              <div className="flex flex-wrap gap-6 mb-6">
	                  <div className="flex-1 w-full items-center gap-2.5">
	                    <Label htmlFor="name">Name<sup>*</sup></Label>
	                    <Input type="text" id="name" placeholder="Name" className="mt-2" />
	                  </div>

	                  <div className="flex-1 w-full items-center gap-2.5">
	                    <Label htmlFor="email">Email Address<sup>*</sup></Label>
	                    <Input type="text" id="email" placeholder="Email Address" className="mt-2" />
	                  </div>
	              </div>

	              <div className="flex flex-wrap gap-6 mb-6">

	                <div className="flex-1  w-full items-center gap-1.5">
	                    <Label htmlFor="password">Password</Label>
	                    <Input type="text" id="password" placeholder="Password" className="mt-2" />
	                  </div>

	                  <div className="flex-1  w-full items-center gap-1.5">
	                    <Label htmlFor="confirm_password">Confirm Password</Label>
	                    <Input type="text" id="confirm_password" placeholder="Confirm Password" className="mt-2" />
	                  </div>
	              </div>

	              <Button>Update </Button>

	          	</form>   

		    </div>
          </SidebarInset>
  )
}
