// /lib/api.ts
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function apiFetch<T>(
  endpoint: string,
  options?: RequestInit
): Promise<T> {

  console.log("Incoming request", API_BASE_URL, endpoint);

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