import { All, Queue } from "../src";

const queue = new Queue<All>();
queue.add(10203102301);
queue.add("string");
console.log(queue.getAll());