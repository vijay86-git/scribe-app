import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

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

		            <h1 className="scroll-m-20 text-left text-2xl font-extrabold tracking-tight text-balance">
		              Manage Template
		            </h1>

		            <form>
		            <div className="flex flex-col gap-6">
		              <div className="grid gap-3">
		                <Label htmlFor="email">Template</Label>
		                <Textarea
		                  placeholder="..."
		                  required
		                  className="h-64 border border-gray-300 shadow-none hover:shadow-none focus:border-blue-500 focus:shadow-sm"
		                />
		              </div>
		             
		            </div>
		            <div className="mt-4 text-left text-sm">
		              <Button>Submit</Button>
		            </div>
		          </form>

            </div>
          </SidebarInset>
  )
}
