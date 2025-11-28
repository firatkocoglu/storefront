export async function fetchCsrfToken() {
    const response = await fetch("http://localhost:8000/sanctum/csrf-cookie", {credentials: 'include'});
    if (!response.ok) {
        throw new Error("Failed to fetch CSRF token");
    }
}