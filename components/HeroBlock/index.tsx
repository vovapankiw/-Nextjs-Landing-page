import Image from 'next/image';
import SearchField from '../SearchField';

export default function HeroBlock() {
  return (
    <div className="relative mb-20 grid h-[calc(100vh-52px)] w-full grid-cols-12 grid-rows-12 overflow-hidden bg-black">
      <Image
        src={`/hero.webp`}
        alt="Hero Image"
        className="object-cover opacity-60"
        fill
        priority={true}
      />
      <div className="col-start-3 col-end-8 row-start-4 flex flex-col items-center justify-center px-3">
        <h1 className="text-left text-white font-extrabold drop-shadow-lg md:text-6xl md:leading-[4.75rem]">
          Discover a place you&apos;ll love to live happy
        </h1>
        <div className="mt-[3.75rem] flex w-full justify-start text-white opacity-90">
          <SearchField />
        </div>
      </div>
    </div>
  );
}
