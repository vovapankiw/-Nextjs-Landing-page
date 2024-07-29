type Prop = {
  type: string;
  Icon: React.ElementType;
  quantity: number;
};

export default function CardDetailItem({quantity, Icon, type}: Prop) {
  return (
    <div className="flex gap-1 text-sm text-gray-500">
      <Icon />
      <span className="text-black font-semibold">{quantity}</span>
      <span>{type}</span>
    </div>
  );
}
