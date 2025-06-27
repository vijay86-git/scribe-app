'use client'
import React, { useState, useEffect, lazy, Suspense } from "react";
import Link from "next/link";
import { Table, TableHeader, TableHead, TableBody, TableCell, TableRow } from "@/components/ui/table"
import { Checkbox } from "@/components/ui/checkbox"
import Paging from '@/components/doctors/paging'
import List from '@/components/doctors/list'
import Search from '@/components/doctors/search'

type Doctor = {
  id: number;
  name: string;
  email: string;
};

export default function Doctors() {

   const [search, setSearch] = useState("");
   const [debouncedQuery, setDebouncedQuery] = useState("");
   const [doctors, setDoctors] = useState<Doctor[]>([]);
   const [loading, setLoading] = useState(false);
   const [pagination, setPagination] = useState({ current_page: 1, last_page: 1 });

   const fetchDoctors = async (page = 1, debouncedQuery = '') => {
      const res = await fetch(`/api/doctors`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({page, q: encodeURIComponent(debouncedQuery)}),
        });
      const response = await res.json();
      if (response.success) {
         setLoading(false);
         setDoctors(response.data.doctors.data);
         setPagination(response.data.doctors);
      }
   };

   useEffect(() => {
      setLoading(true);
      fetchDoctors();
   }, []);

   const changePage = (page: number) => {
       setLoading(true);
       setDoctors([]);
       fetchDoctors(page);
   };

   // Update debouncedQuery 500ms after user stops typing
   useEffect(() => {
      const handler = setTimeout(() => {
            setDebouncedQuery(search);
      }, 500);

       return () => clearTimeout(handler);
   }, [search]);

   // Run API call when debouncedQuery changes
   useEffect(() => {
       if ( ! debouncedQuery) {
         fetchDoctors(); //setPatients([]);
         return;
       }
       setLoading(true);
       fetchDoctors(1, debouncedQuery);
   }, [debouncedQuery]);

  return (
            <div>
               <div className="space-y-4 mb-2">
                  <Search search={search} setSearch={setSearch} />
               </div>
               <div className="overflow-hidden rounded-sm border border-gray-200 border-1">
                  <Table className="w-full">
                     <TableHeader>
                        <TableRow>
                           <TableHead className="text-center bg-gray-100 font-bold text-gray-700 dark:text-gray-200 uppercase">#</TableHead>
                           <TableHead className="text-center bg-gray-100 font-bold text-gray-700 dark:text-gray-200 uppercase">Name</TableHead>
                           <TableHead className="text-center bg-gray-100 font-bold text-gray-700 dark:text-gray-200 uppercase">Email Id</TableHead>
                           <TableHead className="text-center bg-gray-100 font-bold text-gray-700 dark:text-gray-200 uppercase">Action</TableHead>
                        </TableRow>
                     </TableHeader>
                     <TableBody>

                         <List doctors={doctors} pagination={pagination} loading={loading} />
         
                     </TableBody>
                  </Table>

               </div>
               <div className="mt-5">
                  <Paging doctors={doctors} pagination={pagination} changePage={changePage} />
               </div>
            </div>
  		 )
}
