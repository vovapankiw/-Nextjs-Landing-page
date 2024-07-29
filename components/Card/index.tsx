import Image from 'next/image';
import Chip from '../Chip';
import Heart from '@/icons/Heart';
import TalkBubble from '../TalkBubble';
import CardDetailItem from './CardDetailItem';
import BedIcon from '@/icons/BedIcon';
import ShowerIcon from '@/icons/ShowerIcon';
import LotIcon from '@/icons/LotIcon';

export default function Card() {
  return (
    <div className="grid gap-3">
      <div className="relative">
        <div className="absolute flex w-full justify-between gap-1 p-3">
          <div className="flex gap-1">
            <Chip type="primary">18 hours ago</Chip>
            <Chip type="secondary">
              <span className="pr-1 text-gray-500">Open Sun</span>
              <span>8/12 12-2</span>
              <span className="pl-1 text-gray-500">PM</span>
            </Chip>
          </div>
          <div>
            <Heart className="cursor-pointer fill-white hover:fill-primary" />
          </div>
        </div>
        <Image
          src={`/house.jpg`}
          alt="Hero Image"
          className="rounded-lg object-cover shadow-2xl"
          height={188}
          width={328}
          priority={true}
        />
        <div className="absolute bottom-[-20px] right-[10px]">
          <TalkBubble title="Compare" />
        </div>
      </div>

      <div className="text-xl font-bold tracking-tight">$ 1,784,000</div>
      <div className="text-base">56160 Stellar Dr, Bend, OR 97707 Stellar</div>
      <div className="flex gap-1">
        <CardDetailItem Icon={BedIcon} quantity={5} type="bed" />
        <CardDetailItem Icon={ShowerIcon} quantity={2} type="bath" />
        <CardDetailItem Icon={LotIcon} quantity={3} type="acrec lot" />
      </div>
    </div>
  );
}
