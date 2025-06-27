export interface History {
  personal_health_number: string;
  patient_id: string;
  patient_name: string;
  created_at: string;
  uuid: string;
  contact_number: string;
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
