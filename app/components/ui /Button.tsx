import clsx from 'clsx';
import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<'button'> {
  children: React.ReactNode;
  appearance: 'primary' | 'ghost' | 'transparent';
}

export default function Button({
  children,
  appearance,
  className
}: ButtonProps) {
  return (
    <button
      className={clsx('py-3', className, {
        'bg-primary text-white duration-300 ease-in-out hover:bg-second':
          appearance == 'primary',
        'border border-primary text-primary duration-300 ease-in-out hover:bg-primary hover:text-white':
          appearance == 'ghost'
      })}
    >
      {children}
    </button>
  );
}
