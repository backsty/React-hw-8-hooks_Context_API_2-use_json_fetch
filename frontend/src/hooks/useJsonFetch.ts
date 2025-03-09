import { useState, useEffect } from 'react';
import { FetchOptions } from '../types';

/**
 * Custom hook for making JSON fetch requests with loading and error states
 *
 * @param url - URL to fetch data from
 * @param opts - Fetch options
 * @returns [data, loading, error] tuple
 */
function useJsonFetch<T>(url: string, opts: FetchOptions = {}) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(url, {
          ...opts,
          signal,
        });

        if (!response.ok) {
          throw new Error(`HTTP Error: ${response.status} ${response.statusText}`);
        }

        const jsonData = await response.json();
        if (!signal.aborted) {
          setData(jsonData);
        }
      } catch (e) {
        if (!signal.aborted) {
          setError(e instanceof Error ? e : new Error(String(e)));
        }
      } finally {
        if (!signal.aborted) {
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      abortController.abort();
    };
  }, [url, JSON.stringify(opts)]);

  return [data, loading, error] as const;
}

export default useJsonFetch;
