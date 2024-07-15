import HeroBlock from '@/components/HeroBlock';
import Navigation from '@/components/Navigation';

export default function page() {
  return (
    <>
      <nav>
        <Navigation />
      </nav>
      <main>
        <HeroBlock />
      </main>
      <footer>Footer</footer>
    </>
  );
}
