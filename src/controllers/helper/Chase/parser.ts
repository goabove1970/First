import { ParsedTransaction,
    ChaseTransDetails } from '../../../../src/models/Chase/ParsedTransaction';


    type Not<T> = [T] extends [never] ? unknown : never
    type Extractable<T, U> = Not<U extends any ? Not<T extends U ? unknown : never> : never>
    
function asEnum<
  E extends Record<keyof E, string | number>,
  K extends string | number
>(e: E, k: K & Extractable<E[keyof E], K>): Extract<E[keyof E], K> {
  // runtime guard, shouldn't need it at compiler time
  if (Object.values(e).indexOf(k) < 0)
    throw new Error('Expected one of ' + Object.values(e).join(', '));
  return k as any; // assertion
}

export const parseChunk = (line: string): ParsedTransaction | undefined => {
    const parts = line.split(',');
    if (parts.length === 7) {
        return {
          Details: asEnum(ChaseTransDetails, (parts[0] as string) as never),
          PostingDate: new Date(parts[1]),
          Description: parts[2]
        };
    }
    return undefined;
};