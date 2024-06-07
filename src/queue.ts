import { DEFAULT_TIMEOUT } from "./constants";
import { isJSONObject } from "./utils";

export class Queue<T> {
    private data: T[] = [];
    private timeout: number = DEFAULT_TIMEOUT;
    constructor(timeout?: number) {
        if (!(timeout == undefined || timeout == null))
            this.setTimeout(timeout);
    }

    add(item: T): void {
        this.data.push(item);
        globalThis.setTimeout(async () => this.remove(item), this.timeout);
    }
    private remove(item: T): void {
        const index = this.data.indexOf(item);
        if (index > -1) {
            this.data.splice(index, 1);
        }
    }
    
    getAll() {
        return this.data;
    }
    find(filter: Partial<T>): T | null {
        if (!isJSONObject(filter)) return null;
        return this.data.filter(item => {
            return Object.keys(filter).every(key => {
                const k = key as keyof T;
                return item[k] == filter[k];
            })
        })[0];
    }
    erase(filter: Partial<T>) {
        const temp = this.find(filter);
        if (temp != null)
            this.remove(temp);
    }
    setTimeout(timeout: number) {
        this.timeout = timeout;
    }
}