export function contains<T>(
    array: readonly T[], 
    predicate: (element: T, index: number, array: readonly T[]) => boolean
) {
    for (let i=0; i < array.length; i++) {
        if (predicate(array[i], i, array)) {
            return true;
        }
    }

    return false;
}

