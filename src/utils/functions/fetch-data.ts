import { Either, left, right } from "../errors/either";

export async function fetchData<T = unknown>(
  url: RequestInfo | URL,
  options?: RequestInit
): Promise<Either<Error, T>> {

  const response = await fetch(url, options);
  const json = await response.json();

  if (!response.ok) return left(new Error(json.message));

  return right(json);
}
