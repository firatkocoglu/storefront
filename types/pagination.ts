export type CursorPage<T> = {
    data: T[]
    meta?: {
        next_cursor?: string | null;
        prev_cursor?: string | null;
        per_page?: number;
    };
    links?: {
        next?: string | null;
        prev?: string | null;
    };
};