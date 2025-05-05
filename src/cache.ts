import Options from "./options";
import { Queue } from "./queue";
import { QueueMetadata, UniqueId } from "./types";
import { createUniqueId, getCreateAt } from "./utils";

class _Cache {
    private static instance: _Cache;
    private queues: QueueMetadata[];
    createdAt: number;
    options: Options;

    constructor(o?: Options) {
        this.queues = [];
        this.createdAt = getCreateAt();
        this.options = o ? o : {
            updateAfterInquiry: true,
            maintainConsistency: false
        }
    }
    
    static getInstance(): _Cache {
        if (!this.instance)
            this.instance = new _Cache();
        return this.instance;
    }
    
    create<T>(): UniqueId {
        const d = createUniqueId();
        this.queues.push({
            queue: new Queue<T>(), 
            id: d
        });
        return d;
    }
    
    remove(d: UniqueId): boolean {
        if (this.queues.length <= 0) return false;
        const index = this.queues.findIndex((args: QueueMetadata) => {
            args.id === d
        })
        if (index == -1) return false;
        this.queues.slice(index, 1);
        return true;
    }
    
    get(d: UniqueId): Queue<any> | null {
        return this.queues.filter(
            args => args.id === d
        )[0].queue;
    }
    
    getByIndex(i: number): Queue<any> | null {
        if (this.queues.length < i || 0 > i) return null;
        return this.queues[i].queue;
    }
    
    setOptions(o: Options) {
        this.options = o;
    }
}
export const Cache = _Cache.getInstance();
