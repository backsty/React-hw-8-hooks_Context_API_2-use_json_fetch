export type FetchOptions = RequestInit;

export interface ApiResponse<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}
