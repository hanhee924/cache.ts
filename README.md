# cache.ts
Library designed to prevent continuous database access.
<br />
It is stored volatile and is compatible with all objects and types.

### Examples include.
```ts
import { Cache, Queue } from "ts-cache";

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
```
### Alternatively, you can design it to fit all objects.
```ts
import { All, Cache, Queue } from "ts-cache";

Cache.create<All>();
const all = Cache.getByIndex(0) as Queue<All>;
all.add(10203102301);
all.add("string");
console.log(all.getAll());
```
### Or you can just use a single queue!
```ts
import { All, Queue } from "ts-cache";

const queue = new Queue<All>();
queue.add(10203102301);
queue.add("string");
console.log(queue.getAll());
```
