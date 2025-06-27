import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"


const Paging = ({ histories, pagination, changePage}) => {

   return ( histories && histories?.length > 0 && pagination?.total > Number(process.env.NEXT_PUBLIC_PAGINATION_LIMIT) && <Pagination>
             <PaginationContent>
               {pagination.current_page > 1 && (
               <PaginationItem>
                 <PaginationPrevious className="pagination-prev" aria-disabled={pagination.current_page === 1} onClick={() => changePage(pagination.current_page - 1)} />
               </PaginationItem>
               )}
               {[...Array(pagination.last_page)].map((_, i) => (
                 <PaginationItem key={i}>
                   <PaginationLink
                     key={i + 1}
                     onClick={() => changePage(i + 1)}
                     className={`cursor-default px-3 py-1 rounded ${pagination.current_page === i + 1 ? 'act text-white' : 'bg-gray-200'}`}
                   >
                     {i + 1}
                   </PaginationLink>
                 </PaginationItem>
               ))}

               {pagination.current_page < pagination.last_page && (

               <PaginationItem>
                 <PaginationNext aria-disabled={pagination.current_page === pagination.last_page} onClick={() => changePage(pagination.current_page + 1)} />
               </PaginationItem>
               )}

             </PaginationContent>
         </Pagination>)
}

export default Paging;