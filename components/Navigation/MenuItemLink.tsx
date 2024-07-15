type Props = {
  title: string;
};

export default function MenuItemLink({title}: Props) {
  return (
    <a href="/" className="cursor-pointer text-slate-400 hover:text-slate-700">
      {title}
    </a>
  );
}
