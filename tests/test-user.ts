import { Cache, Queue } from "../src";

interface User {
    name: string;
    id: string;
}

Cache.create<User>();
const users = Cache.getByIndex(0) as Queue<User>;
const temp: User = {
    name: "testing",
    id: "120301203102301203"
}
users.add(temp);
console.log(users.find({ id: "120301203102301203" }))
console.log(users.getAll());