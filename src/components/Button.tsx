import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';
import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  asChild?: boolean;
}

export function Button({ size = 'md', children, asChild, className, ...props }: ButtonProps) {
  const Comp  = asChild ? Slot : 'button';
  return (
    <Comp className={
      clsx('py-3 px-4 bg-cyan-500 rounded font-semibold text-black text-sm w-full transition-colors focus:ring-2 ring-white hover:bg-cyan-300',
      { 
        'text-xs': size === 'sm',
        'text-s': size === 'md',
        'text-m': size === 'lg',
      }, className)
    }
    {...props}
    >
      { children }
    </Comp>
  )
}