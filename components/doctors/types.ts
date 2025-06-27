export interface Doctor {
  id: number;
  name: string;
  email: string;
}

export interface Pagination {
  currentPage: number;
  totalPages: number;
  perPage: number;
  totalItems: number;
}

export interface ListProps {
  loading: boolean;
  doctors: Doctor[];
  pagination: Pagination;
}
