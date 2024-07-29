import Card from '@/components/Card';
import HeroBlock from '@/components/HeroBlock';
import Navigation from '@/components/Navigation';
import ArrowLeftIcon from '@/icons/ArrowLeftIcon';

export default function page() {
  return (
    <>
      <nav>
        <Navigation />
      </nav>
      <main>
        <HeroBlock />
        <div className="mx-2 mt-12 xl:mx-52">
          <div className="mb-10 flex items-center justify-between">
            <h2 className="text-2xl font-extrabold">Featured property list</h2>
            <div className="flex items-center text-base font-extrabold text-primary">
              <span>View all 19</span>
              <ArrowLeftIcon className="fill-primary" />
            </div>
          </div>
          <div className="flex flex-wrap gap-6">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </main>
      <footer>Footer</footer>
    </>
  );
}
