import { GatsbyLinkProps, Link } from 'gatsby';
import { combineClasses } from '../css/combine-classes';

export type LinkButtonProps<T = unknown> = Omit<GatsbyLinkProps<T>, 'ref'>;

export function LinkButton<T = unknown>({
    className,
    ...props
}: LinkButtonProps<T>) {
    return (
        <Link
            className={combineClasses(
                'p-2',
                'shadow-xl',
                'cursor-pointer',
                'rounded',
                'border-solid',
                'border-slate-400',
                'border',
                'text-purple-500',
                'hover:brightness-75',
                className
            )}
            activeClassName={'text-blue-500'}
            {...props}
        />
    );
}
