import {PART_A} from './articles-a.mjs';
import {PART_B} from './articles-b.mjs';
import {PART_C} from './articles-c.mjs';
export const CATEGORIES=['Business AI','Automation','Software','Academy','Hiring','Industries'];
const words=a=>a.sections.reduce((n,s)=>n+[...s.p,...(s.bullets||[])].join(' ').split(/\s+/).length,0);
export const ARTICLES=[...PART_A,...PART_B,...PART_C].map(a=>({...a,image:`images/blog-${a.slug}.webp`,readMin:Math.max(3,Math.round(words(a)/210))}));
