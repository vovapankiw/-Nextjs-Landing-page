import AdvantageInfo from './AdvantageInfo';
import Advantages from './Advantages';

export default function AdvantageBlock() {
  return (
    <div className="bg-[#F8F7F6] px-2 py-20 xl:px-48">
      <h2 className="mb-10 text-2xl font-extrabold">What`s different</h2>
      <div className="flex flex-wrap justify-center gap-28">
        <div className="min-w-72 max-w-md">
          <Advantages />
        </div>
        <div className="min-w-72 max-w-md">
          <AdvantageInfo />
        </div>
      </div>
    </div>
  );
}
