type Prop = {
  title: string;
  description: string;
  Icon: React.ElementType;
};

export default function Advantage({title, Icon, description}: Prop) {
  return (
    <div className="flex gap-6">
      <div className="flex size-8 items-center justify-center rounded bg-white p-1">
        <Icon />
      </div>
      <div className="flex flex-col text-white">
        <div className="text-lg font-extrabold">{title}</div>
        <div className="text-sm">{description}</div>
      </div>
    </div>
  );
}
