export async function fetchData<T = unknown>(
  url: RequestInfo | URL,
  options?: RequestInit
) {
  let data: T | null = null;
  let error: string | null = null;

  try {
    const response = await fetch(url, options);
    const json = await response.json();

    if (!response.ok) throw new Error(json.message ?? "Error");

    data = json as T;
  } catch (err) {
    if (err instanceof Error) error = err.message;
  } finally {
    return { data, error };
  }
}
