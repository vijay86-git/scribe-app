'use client'
import React, { useState, useEffect, lazy, Suspense } from "react";
import Link from "next/link";
import { Table, TableHeader, TableHead, TableBody, TableCell, TableRow } from "@/components/ui/table"
import { Checkbox } from "@/components/ui/checkbox"
import Paging from '@/components/history/paging'
import List from '@/components/history/list'
import Search from '@/components/history/search'

type History = {
  personal_health_number: string;
  patient_id: any;
  patient_name: string;
  created_at: string;
  uuid: string;
  contact_number: string;
};

export default function Histories() {

   const [search, setSearch] = useState("");
   const [debouncedQuery, setDebouncedQuery] = useState("");
   const [histories, setHistories] = useState<History[]>([]);
   const [loading, setLoading] = useState(false);
   const [pagination, setPagination] = useState({ current_page: 1, last_page: 1 });

   const fetchHistories = async (page = 1, debouncedQuery = '') => {
      const res = await fetch(`/api/history`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({page, q: encodeURIComponent(debouncedQuery)}),
        });
      const response = await res.json();
      if (response.success) {
         setLoading(false);
         setHistories(response.data.histories.data);
         setPagination(response.data.histories);
      }
   };

   useEffect(() => {
      setLoading(true);
      fetchHistories();
   }, []);

   const changePage = (page: number) => {
       setLoading(true);
       setHistories([]);
       fetchHistories(page);
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
         fetchHistories(); //setPatients([]);
         return;
       }
       setLoading(true);
       fetchHistories(1, debouncedQuery);
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
                           <TableHead className="text-center bg-gray-100 font-bold text-gray-700 dark:text-gray-200 uppercase">Patient Id</TableHead>
                           <TableHead className="text-center bg-gray-100 font-bold text-gray-700 dark:text-gray-200 uppercase">Name</TableHead>
                           <TableHead className="text-center bg-gray-100 font-bold text-gray-700 dark:text-gray-200 uppercase">Personal Health Number</TableHead>
                           <TableHead className="text-center bg-gray-100 font-bold text-gray-700 dark:text-gray-200 uppercase">Contact Number</TableHead>
                           <TableHead className="text-center bg-gray-100 font-bold text-gray-700 dark:text-gray-200 uppercase">Created at</TableHead>
                           <TableHead className="text-center bg-gray-100 font-bold text-gray-700 dark:text-gray-200 uppercase">Action</TableHead>
                        </TableRow>
                     </TableHeader>
                     <TableBody>

                         <List histories={histories} pagination={pagination} loading={loading} />
         
                     </TableBody>
                  </Table>

               </div>
               <div className="mt-5">
                  <Paging histories={histories} pagination={pagination} changePage={changePage} />
               </div>
            </div>
  		 )
}
