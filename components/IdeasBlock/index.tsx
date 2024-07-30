import IdeaCard from './IdeaCard';

export default function IdeasBlock() {
  return (
    <div className="px-2 py-24 xl:px-48">
      <h2 className="mb-10 text-2xl font-extrabold">
        What would you like to do?
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
        <IdeaCard />
        <IdeaCard />
        <IdeaCard />
      </div>
    </div>
  );
}
