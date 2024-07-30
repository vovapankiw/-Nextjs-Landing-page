import Image from 'next/image';

export default function Post() {
  return (
    <div className="w-60">
      <Image
        src={`/post-1.png`}
        alt="post-1"
        className="h-80 w-60 rounded-lg object-cover"
        height={320}
        width={240}
        priority={true}
      />
      <div className="px-1">
        <div className="mt-6 font-bold uppercase leading-5 text-primary">
          sponsored content
        </div>
        <div className="mt-3 text-lg font-bold leading-6">
          The 5 Biggest Mistakes Veteran and Military Home Buyers Make
        </div>
        <div className="mt-3 text-sm font-semibold text-gray-500">
          Jule 4th, 2019
        </div>
      </div>
    </div>
  );
}
