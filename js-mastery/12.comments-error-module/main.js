// import { increase as increase1 } from './counter.js';
// import { increase, getCount } from './counter.js';
import * as counter from './counter.js';

counter.increase();

const count = counter.getCount();
console.log(count);
