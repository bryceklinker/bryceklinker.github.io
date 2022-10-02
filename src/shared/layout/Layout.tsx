import { FC, PropsWithChildren } from 'react';
import { Navbar } from './navbar/Navbar';
import { Main } from './main/Main';
import { Footer } from './footer/Footer';

export type LayoutProps = PropsWithChildren & {};

export const Layout: FC<LayoutProps> = ({ children, ...props }) => {
    return (
        <div className={'flex flex-1 flex-col'}>
            <Navbar />
            <Main>{children}</Main>
            <Footer />
        </div>
    );
};
