export function combineClasses(...classes: Array<string | unknown>): string {
    return classes.filter(c => Boolean(c)).join(' ');
}
