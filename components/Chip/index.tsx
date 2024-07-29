import {clsx} from 'clsx';
import {PropsWithChildren} from 'react';

type Props = {
  type: 'primary' | 'secondary';
} & PropsWithChildren;

export default function Chip({type, children}: Props) {
  return (
    <div
      className={clsx('rounded', 'font-extrabold', 'text-xs', 'py-1', 'px-2', {
        ['bg-primary text-white']: type === 'primary',
        ['bg-white']: type === 'secondary',
      })}
    >
      {children}
    </div>
  );
}
