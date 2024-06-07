import { Queue } from "./queue"

export type UniqueId = string;
export type All = any;
export interface QueueMetadata {
    queue: Queue<any>;
    id: UniqueId;
}