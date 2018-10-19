// ES6 Modules

import { toLowercase } from "./lib/uppercase";
import anything from './lib/uppercase';
import * as everything from './lib/uppercase';

const str = 'my string';

const strUpper = anything(str);

console.log('Uppercase string?', strUpper); // Yeah MY STRING
console.log('Lets move it back to lower', toLowercase(strUpper)); // Yeah my string