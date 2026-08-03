/**
 * Thin HTTP client for this app's own API routes.
 *
 * Everything in `src/services` is the UI's view of the data tier: components
 * call these functions instead of importing server code, which keeps the
 * client bundle free of datasets and makes the boundary explicit.
 */

const BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? "";

export class ApiError extends Error {
  constructor(
    message: string,
    readonly status: number,
  ) {
    super(message);
    this.name = "ApiError";
  }
}

async function get<T>(path: string, init?: RequestInit): Promise<T> {
  const response = await fetch(`${BASE_URL}${path}`, init);

  if (!response.ok) {
    throw new ApiError(
      `GET ${path} failed with status ${response.status}`,
      response.status,
    );
  }

  return (await response.json()) as T;
}

export const apiClient = { get };
