import * as fs from 'fs';
import * as rd from 'readline';
import * as d from 

export const reader = rd.createInterface(
  fs.createReadStream('../../test/data/debit.csv');
);
