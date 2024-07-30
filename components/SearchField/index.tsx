import SearchIcon from '@/icons/SearchIcon';

export default function SearchField() {
  return (
    <div className="relative h-[3.75rem] w-full min-w-[200px]">
      <div className="absolute left-3 top-2/4 grid size-5 -translate-y-2/4 place-items-center">
        <SearchIcon />
      </div>
      <input
        className="peer size-full rounded-[7px] border border-t-transparent bg-white px-3 py-5 !pl-9 font-sans text-sm font-normal text-neutral-950 outline outline-0 transition-all placeholder-shown:border"
        placeholder="Enter address, city or zip code"
      />
    </div>
  );
}
