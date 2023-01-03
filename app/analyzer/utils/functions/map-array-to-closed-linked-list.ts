import { LinkedList } from '../types';

export function mapArrayToClosedList<
    BaseT, 
    T extends LinkedList<T>
>(
    array: readonly BaseT[], 
    mapModel: (base: BaseT) => T
): T {
    const firstElement = mapModel(array[0]);

    let current = firstElement;
    let previous = firstElement;

    for (const item of array.slice(1)) {
        current = mapModel(item);
        previous.next = current;
        previous = current;
    }

    current.next = firstElement;

    return firstElement;
}