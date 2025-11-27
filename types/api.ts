export type ApiInit = RequestInit & {
  revalidate?: number | false; // Revalidate cache after x seconds
  noAuth?: boolean; // Skip authentication
  timeoutMs?: number;
  withCredentials?: boolean;
  // Timeout in milliseconds
};
