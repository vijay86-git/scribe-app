'use client'
import React, { useState, useEffect, lazy, Suspense } from "react";
import Link from "next/link";
import { Table, TableHeader, TableHead, TableBody, TableCell, TableRow } from "@/components/ui/table"
import { Checkbox } from "@/components/ui/checkbox"
import Paging from '@/components/logs/paging'
import List from '@/components/logs/list'
import Search from '@/components/logs/search'
import { Log, Pagination } from '@/components/logs/types'

export default function Logs() {

   const [search, setSearch] = useState<string>('');
   const [debouncedQuery, setDebouncedQuery] = useState("");
   const [logs, setLogs] = useState<Log[]>([]);
   const [loading, setLoading] = useState(false);
   const [pagination, setPagination] = useState<Pagination>({current_page: 1, first_page_url: null, from: 0, last_page: 1, last_page_url: null,links: [], next_page_url: null, path: null, per_page: 10, prev_page_url: null, to: 0, total: 0});

   const fetchLogs = async (page = 1, debouncedQuery = '') => {
      const res = await fetch(`/api/logs`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({page, q: encodeURIComponent(debouncedQuery)}),
        });
      const response = await res.json();
      if (response.success) {
         setLoading(false);
         setLogs(response.data.logs.data);
         setPagination(response.data.logs);
      }
   };

   useEffect(() => {
      setLoading(true);
      fetchLogs();
   }, []);

   const changePage = (page: number) => {
       setLoading(true);
       setLogs([]);
       fetchLogs(page);
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
         fetchLogs();
         return;
       }
       setLoading(true);
       fetchLogs(1, debouncedQuery);
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
                           <TableHead className="text-center font-bold text-gray-700 dark:text-gray-200 uppercase">#</TableHead>
                           <TableHead className="text-center font-bold text-gray-700 dark:text-gray-200 uppercase">Name</TableHead>
                           <TableHead className="text-center font-bold text-gray-700 dark:text-gray-200 uppercase">Email Id</TableHead>
                           <TableHead className="text-center font-bold text-gray-700 dark:text-gray-200 uppercase">Action</TableHead>
                           <TableHead className="text-center font-bold text-gray-700 dark:text-gray-200 uppercase">Ip Address</TableHead>
                           <TableHead className="text-center font-bold text-gray-700 dark:text-gray-200 uppercase">Date/Time</TableHead>
                        </TableRow>
                     </TableHeader>
                     <TableBody>
                        <List logs={logs} pagination={pagination} loading={loading} />
                     </TableBody>
                  </Table>
               </div>
               <div className="mt-5">
                  <Paging logs={logs} pagination={pagination} changePage={changePage} />
               </div>
            </div>
  		 )
}
