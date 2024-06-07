import { UniqueId } from "./types";

export const isJSONObject = (
    obj: any
): boolean => {
    if (typeof obj !== "object" || obj === null)
        return false;
    if (Array.isArray(obj))
        return false;
    return true;
}
export const createUniqueId = (): UniqueId => {
    return "id" + Math.random().toString(16).slice(2);
}
export const getCreateAt = (): number => {
    return new Date().valueOf();
}