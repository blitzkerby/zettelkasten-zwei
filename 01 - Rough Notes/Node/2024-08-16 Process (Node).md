---
title: Process (Node)
allDay: false
startTime: 16:00
endTime: 16:30
date: 2024-08-16
completed: 
tags:
  - Node
---
### `process.argv`

.- [<string[]>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)

The `process.argv` property returns an array containing the command-line arguments passed when the Node.js process was launched. The first element will be [`process.execPath`](https://nodejs.org/docs/latest/api/process.html#processexecpath). See `process.argv0` if access to the original value of `argv[0]` is needed. The second element will be the path to the JavaScript file being executed. The remaining elements will be any additional command-line arguments.

For example, assuming the following script for `process-args.js`:

```jsx
import { argv } from 'node:process';  

// print process.argv

argv.forEach((val, index) => {
  console.log(`${index}: ${val}`);
});
```

Launching the Node.js process as:

```bash
node process-args.js one two=three four
```

Would generate the output:

```text
0: /usr/local/bin/node
1: /Users/mjr/work/node/process-args.js
2: one
3: two=three
4: four
```

