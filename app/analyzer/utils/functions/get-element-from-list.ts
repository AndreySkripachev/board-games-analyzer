import { LinkedList } from '../types';

export function getElementFromList<T extends LinkedList<T>>(
    firstElement: T, 
    requiredValue: any
): T | null {
    let current: T | null = firstElement;
    
    do {
        if (current.value === requiredValue) {
            return current;
        }

        current = current.next;
    } while (current !== null)

    return null;
}

interface Q extends LinkedList<number> {
    readonly name: string;
}
