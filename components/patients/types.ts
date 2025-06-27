export interface Patient {
  patient_id: number;
  patient_name: string;
  age: string;
  contact_number: string;
  personal_health_number: string;
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
