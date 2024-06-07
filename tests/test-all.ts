import { All, Cache, Queue } from "../src";

Cache.create<All>();
const all = Cache.getByIndex(0) as Queue<All>;
all.add(10203102301);
all.add("string");
console.log(all.getAll());