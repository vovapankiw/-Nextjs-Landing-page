import MenuItemDropdown from './MenuItemDropdown';
import MenuItemLink from './MenuItemLink';
import {MenuItem} from './types';

type Props = {
  items: MenuItem[];
};

export default function MenuItems({items}: Props) {
  return (
    <ul className="flex gap-11">
      {items.map((item) => {
        return (
          <>
            {item.type === 'dropdown' && (
              <MenuItemDropdown title={item.title} />
            )}
            {item.type === 'link' && <MenuItemLink title={item.title} />}
          </>
        );
      })}
    </ul>
  );
}
