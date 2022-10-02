import { FC } from 'preact/compat';

export type MainProps = {};

export const Main: FC<MainProps> = ({ children, ...rest }) => {
    return (
        <main class={'flex flex-1 flex-col'} {...rest}>
            {children}
        </main>
    );
};
