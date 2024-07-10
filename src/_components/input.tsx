import { ComponentPropsWithoutRef } from 'react';
import { VariantProps, tv } from 'tailwind-variants';

const inputVariants = tv({
    base: 'bg-transparent text-lg outline-none placeholder:text-zinc-400 [color-scheme:dark]',

    variants: {
        variant: {
            primary: 'flex-1',
            secondary: 'w-40',
        },
    },

    defaultVariants: {
        variant: 'primary',
    },
});

interface InputProps
    extends ComponentPropsWithoutRef<'input'>,
        VariantProps<typeof inputVariants> {}

const Input = ({ variant, ...props }: InputProps) => {
    return <input {...props} className={inputVariants({ variant })} />;
};

export default Input;
