import AdvantageBlock from '@/components/AdvantageBlock';
import CardList from '@/components/CardList';
import Footer from '@/components/Footer';
import HeroBlock from '@/components/HeroBlock';
import IdeasBlock from '@/components/IdeasBlock';
import Navigation from '@/components/Navigation';
import PostList from '@/components/PostList';
import Section from '@/components/Section';

export default function page() {
  return (
    <>
      <nav>
        <Navigation />
      </nav>
      <main>
        <HeroBlock />
        <Section title="Featured property list" quantity={19}>
          <CardList />
        </Section>
        <Section title="Featured news" quantity={11}>
          <PostList />
        </Section>
        <AdvantageBlock />
        <IdeasBlock />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
