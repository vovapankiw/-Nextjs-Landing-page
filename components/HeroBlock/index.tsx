import SearchIcon from '@/icons/SearchIcon';
import Image from 'next/image';

export default function HeroBlock() {
  return (
    <div className="relative grid h-screen w-full grid-cols-12 grid-rows-12 overflow-hidden bg-black">
      <Image
        src={`/hero.webp`}
        alt="Hero Image"
        className="object-cover opacity-60"
        fill
        priority={true}
      />
      <div className="col-start-3 col-end-8 row-start-4 flex flex-col items-center justify-center px-3">
        <h1 className="text-left font-extrabold text-white drop-shadow-lg md:text-6xl md:leading-[4.75rem]">
          Discover a place you'll love to live happy
        </h1>
        {/* <p className="mt-[3.75rem] flex w-full justify-start text-white opacity-90">
          <input type="text" placeholder="Enter address, city or zip code" />
        </p> */}
        <div className="mt-[3.75rem] flex w-full justify-start text-white opacity-90">
          <div className="relative h-[3.75rem] w-full min-w-[200px]">
            <div className="text-blue-gray-500 absolute left-3 top-2/4 grid h-5 w-5 -translate-y-2/4 place-items-center">
              <SearchIcon />
            </div>
            <input
              className="peer h-full w-full rounded-[7px] border border-t-transparent bg-white px-3 py-5 !pl-9 font-sans text-sm font-normal text-neutral-950 outline outline-0 transition-all placeholder-shown:border"
              placeholder="Enter address, city or zip code"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
