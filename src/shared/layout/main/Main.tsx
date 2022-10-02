import { FC, HTMLAttributes } from 'react';

export type MainProps = HTMLAttributes<HTMLDivElement>;

export const Main: FC<MainProps> = ({ children, ...rest }) => {
    return (
        <main
            className={'flex flex-1 flex-col p-4 bg-white dark:bg-neutral-900'}
            {...rest}>
            {children}
        </main>
    );
};
