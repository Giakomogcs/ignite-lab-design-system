import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';
import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface Buttomprops extends ButtonHTMLAttributes<HTMLButtonElement>{
    children: ReactNode;
    asChild?: Boolean;
}

export function Buttom({children, asChild, className, ...props}: Buttomprops) {

    const Comp = asChild ? Slot : 'button';
    return(
        <Comp 
            className={clsx(
                'py-3 px-4 bg-cyan-500 rounded font-bold text-black text-sm w-full transition-colors hover:bg-cyan-300 focus:ring-2 ring-white',
                className,
            )}
            {...props}
        >
            {children}
        </Comp>
    )
}