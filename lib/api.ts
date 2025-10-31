import { cookies } from 'next/headers';
import { ApiInit } from '@/types/api';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api/v1';

export async function api<T>(
    path: string,
    init: ApiInit = {} as ApiInit,
): Promise<T> {
    const { revalidate = 60, noAuth = true, timeoutMs = 10000, headers, ...rest } = init;

    const url = path.startsWith('http')
    ? path
        : `${API_URL}${path.startsWith('/') ? path : `/${path}`}`;

    // Controllers for timeout
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeoutMs);


    try {
        const isBrowser = typeof window !== 'undefined';

        const res = await fetch(url, {
            ...rest,
            signal: controller.signal,
            cache: revalidate === false ? 'no-store' : 'default',
            next:  revalidate === false ? undefined : { revalidate },
            credentials: noAuth ? 'omit' : 'include',
            headers: {
                'Content-Type': 'application/json',
                ...(noAuth ? {} : (isBrowser ? await authHeader() : {})),
                ...(headers || {})
            },
        });

        if (res.status === 204) {
            return null as unknown as T;
        }

        // Handle non-json responses
        const text = await res.text()

        if (!res.ok) {
            let message = `API ${res.status} ${res.statusText}`;
            try {
                const data = JSON.parse(text);
                if (data?.message) message = data.message;
                else if (data?.error) message = data.error;
            }catch {
                if (text) message = `${message} - ${text}`;
            }
            throw new Error(message);
        }

        try {
            return JSON.parse(text) as T;
        } catch {
            return text as unknown as T;
        }
    } catch (err) {
        if ((err as {name?: string})?.name === "AbortError") {
            throw new Error("Request timed out");
        }
        throw err instanceof Error ? err : new Error("An unexpected error occurred");
    } finally {
        clearTimeout(timer);
    }
}

export const get = <T>(path: string, init?: Omit<ApiInit, "method">) =>
    api<T>(path, { ...init, method: 'GET' });

export const post = <T>(path: string, body?: unknown, init?: Omit<ApiInit, "method">) =>
    api<T>(path,
        { ...init, method: 'POST', body: body ?  JSON.stringify(body) : undefined
    });

export const patch = <T>(path: string, body?: unknown, init?: Omit<ApiInit, "method">) =>
    api<T>(path,
        {...init, method: 'PATCH', body: body ?  JSON.stringify(body) : undefined})

export const del = <T>(path: string, init?: Omit<ApiInit, "method">) =>
    api<T>(path, { ...init, method: 'DELETE' });

export const authHeader = async () =>
    {
        const cookieStore = await cookies();
        const xsrfToken = cookieStore.get('XSRF-TOKEN')?.value;

        if (xsrfToken) {
            return {
                'X-XSRF-TOKEN': xsrfToken,
            };
        }
    }