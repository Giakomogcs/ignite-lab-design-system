import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';
import { ReactNode } from 'react';

export interface Textprops{
    size?: 'sm'|'md'|'lg';
    children: ReactNode;
    asChild?: Boolean;
}

export function Text({size = 'md', children, asChild}: Textprops) {

    const Comp = asChild ? Slot : 'span';
    return(
        <Comp 
            className={clsx(
                'text-gray-100 font-sans',
                {
                    'text-xs' : size === 'sm',
                    'text-sm' : size === 'md',
                    'text-md' : size === 'lg',
                }
            )}
        >
            {children}
        </Comp>
    )
}