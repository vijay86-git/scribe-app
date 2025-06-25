"use client";
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
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
} from "@/components/ui/chart"


import { Scroll, NotebookPen, Users, TrendingUp } from "lucide-react";
 
import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts";

import { format, parseISO } from 'date-fns';

const chartData = [
  { date: "2025-06-14", desktop: 186 },
  { date: "2025-06-15", desktop: 305 },
  { date: "2025-06-16", desktop: 237 },
  { date: "2025-06-17", desktop: 73 },
  { date: "2025-06-18", desktop: 209 },
  { date: "2025-06-19", desktop: 224 },
  { date: "2025-06-20", desktop: 134 },
  { date: "2025-06-21", desktop: 144 },
  { date: "2025-06-22", desktop: 184 },
  { date: "2025-06-23", desktop: 154 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig

const ChartTooltipContent: React.FC<CustomTooltipProps> = ({
  active,
  payload,
  className,
  indicator = "dot",
  hideLabel = false,
}) => {
  if (!active || !payload) return null;

  // Your custom tooltip logic here
  return (
    <div className={className}>
      {payload.map((entry, index) => (
        <div key={index}>
          <strong>{entry.name}: </strong>{entry.value}
        </div>
      ))}
    </div>
  );
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
                      ADG Scribe
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="hidden md:block" />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Dashboard </BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 m-5">

                <div className="bg-white p-4 border-1 rounded-lg shadow flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm mb-2 font-bold">Total Transcriptions</p>
                    <p className="text-3xl font-semibold text-orange-500">21</p>
                  </div>
                  <Scroll className="" size={28} color="#333" />
                </div>


                <div className="bg-white p-4 border-1 rounded-lg shadow flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm mb-2 font-bold">Total Notes</p>
                    <p className="text-3xl font-semibold text-yellow-600">121</p>
                  </div>
                  <NotebookPen className="" size={28} color="#333" />
                </div>


                <div className="bg-white p-4 border-1 rounded-lg shadow flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm mb-2 font-bold">Total Patients</p>
                    <p className="text-3xl font-semibold text-teal-600">2,015</p>
                  </div>
                  <Users className="" size={28} color="#333" />
                </div>
              </div>


              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-5">

                <div className="bg-white p-4 rounded-lg shadow border-1">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-lg font-semibold text-gray-700">Transcription</h3>
                    <span className="text-sm text-gray-400">Last 10 Days</span>
                  </div>
                  
                  <Card>
                    <CardContent>
                      <ChartContainer config={chartConfig}>
                        <BarChart
                          accessibilityLayer
                          data={chartData}
                          margin={{
                            top: 20,
                          }}
                        >
                          <CartesianGrid vertical={false} />
                          <XAxis
                            dataKey="date"
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                            tickFormatter={(value) => '1'}
                          />
                          <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                          />
                          <Bar dataKey="desktop" fill="#333" barSize={20} radius={[5, 5, 0, 0]}>
                            <LabelList
                              position="top"
                              offset={12}
                              className="fill-foreground"
                              fontSize={12}
                            />
                          </Bar>
                        </BarChart>
                      </ChartContainer>
                    </CardContent>
                  </Card>

                </div>

                <div className="bg-white p-4 rounded-lg shadow border-1">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-lg font-semibold text-gray-700">Notes</h3>
                    <span className="text-sm text-gray-400">Last 10 Days</span>
                  </div>
                  
                  <Card>
                    <CardContent>
                      <ChartContainer config={chartConfig}>
                        <BarChart
                          accessibilityLayer
                          data={chartData}
                          margin={{
                            top: 20,
                          }}
                        >
                          <CartesianGrid vertical={false} />
                          <XAxis
                            dataKey="date"
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                            tickFormatter={(value) => '1' }
                          />
                          <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                          />
                          <Bar dataKey="desktop" fill="#333" barSize={20} radius={[5, 5, 0, 0]}>
                            <LabelList
                              position="top"
                              offset={12}
                              className="fill-foreground"
                              fontSize={12}
                              
                            />
                          </Bar>
                        </BarChart>
                      </ChartContainer>
                    </CardContent>
                  </Card>

                </div>
              </div>

            {/*<div className="flex flex-1 flex-col gap-4 p-4 pt-0">
              <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                <div className="bg-muted/50 aspect-video rounded-xl" />
                <div className="bg-muted/50 aspect-video rounded-xl" />
                <div className="bg-muted/50 aspect-video rounded-xl" />
              </div>
              <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min" />
              safdasdf
            </div>*/}
          </SidebarInset>
  )
}
