import ArrowsIcon from '@/icons/ArrowsIcon';
import classes from './talk-bubble.module.css';
import {clsx} from 'clsx';

type Prop = {
  title: string;
};

export default function TalkBubble({title}: Prop) {
  return (
    <button
      className={clsx(
        'flex items-center justify-center gap-1 px-1 text-2xs font-bold',
        classes.talkbubble,
      )}
    >
      <ArrowsIcon />
      <span>{title}</span>
    </button>
  );
}
