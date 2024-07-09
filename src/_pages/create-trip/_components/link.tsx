import { ComponentPropsWithoutRef } from 'react';

interface LinkProps extends ComponentPropsWithoutRef<'a'> {
    children: React.ReactNode;
}

export const Link = ({ children, ...props }: LinkProps) => {
    return (
        <a className="text-zinc-300 underline" {...props}>
            {children}
        </a>
    );
};
