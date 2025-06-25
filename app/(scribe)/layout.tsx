'use client'
import { AppSidebar } from "@/components/sidebar/app-sidebar"
import { Separator } from "@/components/ui/separator"
import { SidebarProvider } from "@/components/ui/sidebar"

import { usePathname } from 'next/navigation';

export default function ScribeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const pathname = usePathname();

  const hideLayout = pathname.startsWith('/app');

  return (
            <>
              {hideLayout ? (
                children
              ) : (
                <SidebarProvider
                  style={{ "--sidebar-width": "14rem" } as React.CSSProperties}
                >
                  <AppSidebar />
                  {children}
                </SidebarProvider>
              )}
            </>
          )
}