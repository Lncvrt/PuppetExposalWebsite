export interface Video {
    title: string | null;
    timestamp: number | null;
    id: string;
    duration: number | null;
    width: number | null;
    height: number | null;
    short: boolean | null;
    stream: boolean | null;
    description: string | null;
}

export interface Stream {
    title: string | null;
    timestamp: number | null;
    id: string;
    duration: number | null;
    width: number | null;
    height: number | null;
    description: string | null;
}
