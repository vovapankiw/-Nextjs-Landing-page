import Logo from './Logo';
import UserProfile from './UserProfile';
import MenuItems from './MenuItems';
import {MenuItem} from './types';

const leftItems: MenuItem[] = [
  {
    title: 'Search',
    type: 'link',
  },
  {
    title: 'About us',
    type: 'dropdown',
  },
  {
    title: 'Blog & News',
    type: 'link',
  },
];

const rightItems: MenuItem[] = [
  {
    title: 'Liked',
    type: 'link',
  },
  {
    title: 'List your property',
    type: 'link',
  },
  {
    title: 'Property search history',
    type: 'link',
  },
];

export default function Navigation() {
  return (
    <div className="shadow-header flex h-[3.25rem] items-center justify-between bg-white px-6 py-4">
      <div className="flex gap-11">
        <Logo />
        <MenuItems items={leftItems} />
      </div>
      <div className="flex gap-7">
        <MenuItems items={rightItems} />
        <UserProfile />
      </div>
    </div>
  );
}
