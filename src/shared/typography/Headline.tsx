import { HTMLAttributes } from 'react';
import { combineClasses } from '../css/combine-classes';

export type HeadlineProps = HTMLAttributes<HTMLHeadingElement>;

export function Headline({ className, ...props }: HeadlineProps) {
    return (
        <h1
            className={combineClasses('text-purple-700', 'text-5xl', className)}
            {...props}
        />
    );
}
