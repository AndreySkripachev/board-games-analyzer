import { LinkedList } from '../types';

export function mapClosedListToArray<
    BaseT,
    T extends LinkedList<T>
>(
    list: T,
    mapModel: (listItem: T) => BaseT,
): readonly BaseT[] {
    const firstElement = list;

    const result = [mapModel(firstElement)];
    
    list.next && 
        (list = list.next);

    while (list !== firstElement) {
        result.push(mapModel(list));

        list.next && 
            (list = list.next);
    }

    return result;
}