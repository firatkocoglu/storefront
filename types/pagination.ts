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

export type Props = {
    basePath: string;
    searchParams?: Record<string, string | string[] | undefined>;
    nextCursor?: string | null;
    prevCursor?: string | null;
    cursorParamName?: string;
}
