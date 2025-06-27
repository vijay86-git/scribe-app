export interface Log = {
  id: number;
  user: {
    name: string;
    email: string;
  };
  action: string;
  ip_address: string;
  contact_number: string;
  created_at: string;
}

export interface Pagination {
  currentPage: number;
  totalPages: number;
  perPage: number;
  totalItems: number;
}

export interface ListProps {
  loading: boolean;
  histories: History[];
  pagination: Pagination;
}
