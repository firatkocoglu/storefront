export type ApiInit = RequestInit & {
    revalidate?: number | false; // Revalidate cache after x seconds
    noAuth?: boolean; // Skip authentication
    timeoutMs?: number;
    // Timeout in milliseconds
}