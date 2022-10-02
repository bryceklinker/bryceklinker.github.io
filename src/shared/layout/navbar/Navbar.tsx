import { FC } from 'react';
import { LinkButton } from '../../inputs/LinkButton';

export type NavbarProps = {};

export const Navbar: FC<NavbarProps> = ({}) => {
    return (
        <nav
            className={
                'flex flex-initial flex-row bg-white dark:bg-neutral-900 shadow-xl border-b border-purple-500'
            }>
            <LinkButton to={'/'} className={'border-none'}>
                Home
            </LinkButton>
            <LinkButton to={'/about'} className={'border-none'}>
                About
            </LinkButton>
        </nav>
    );
};
