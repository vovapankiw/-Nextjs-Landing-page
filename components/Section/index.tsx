import ArrowLeftIcon from '@/icons/ArrowLeftIcon';
import {PropsWithChildren} from 'react';

type Props = {
  title: string;
  quantity: number;
} & PropsWithChildren;

export default function Section({children, title, quantity}: Props) {
  return (
    <div className="mx-2 mb-24 xl:mx-48">
      <div className="mb-10 flex items-center justify-between">
        <h2 className="text-2xl font-extrabold">{title}</h2>
        <button className="flex items-center text-base font-extrabold text-primary">
          <span>View all {quantity}</span>
          <ArrowLeftIcon className="fill-primary" />
        </button>
      </div>
      {children}
    </div>
  );
}
