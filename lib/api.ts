// /lib/api.ts
const API_BASE_URL = "http://127.0.0.1:8001/api/v1";//process.env.NEXT_PUBLIC_API_BASE_URL;

export async function apiFetch<T>(
  endpoint: string,
  options?: RequestInit
): Promise<T> {

  const response: Response = await fetch(`${API_BASE_URL}${endpoint}`, {
    headers: {
      'Content-Type': 'application/json',
      ...(options?.headers || {}),
    },
    ...options,
  });

  if (response.status === 401) {
    return response as T;
  }

  if ( ! response.ok) {
    // You can handle HTTP errors here if you want
    throw new Error(`HTTP error! status: ${response.status}`);
  }
    return response as T;
}