## Requirements

- NodeJS & NPM

## How to run

1. Clone the repo
2. Install dev deps using & build using `npm install && npm run build`
3. Link the repo on local using npm, cmd `npm link discount-calculator`
4. Then you can use it on your local node app

## Example Usage

```ts
import { Calculate } from 'discount-calculator';

const cost = Calculate([1, 1, 2, 2, 3, 3, 4, 5]);

// console.log(cost); // Output 51.2
```
