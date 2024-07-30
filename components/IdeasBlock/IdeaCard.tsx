import DoneIcon from '@/icons/DoneIcon';
import Image from 'next/image';

export default function IdeaCard() {
  return (
    <div className="flex flex-col gap-4">
      <Image
        src={`/idea-1.jpg`}
        alt="idea-1"
        className="h-72 w-80 rounded-lg object-cover"
        height={276}
        width={328}
        priority={true}
      />
      <p className="text-xl font-bold">Get into the perfect house</p>
      <div>
        <div className="flex items-center gap-1">
          <DoneIcon />
          <span>Tips for easy moving</span>
        </div>
        <div className="flex items-center gap-1">
          <DoneIcon />
          <span>How to make your new home cozy</span>
        </div>
      </div>
      <button className="w-44 rounded bg-primary px-6 py-3 text-sm text-white font-bold opacity-75 hover:opacity-100">
        Search Properties
      </button>
    </div>
  );
}
