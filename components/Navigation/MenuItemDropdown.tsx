import DownIcon from '@/icons/DownIcon';

type Props = {
  title: string;
};
export default function MenuItemDropdown({title}: Props) {
  return (
    <button className="flex cursor-pointer items-end stroke-slate-400 text-slate-400 hover:stroke-slate-700 hover:text-slate-700">
      <span>{title}</span>
      <DownIcon className="stroke-inherit hover:stroke-inherit" />
    </button>
  );
}
