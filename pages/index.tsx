import { Case } from '@/features/landing/Case';
import { Hero } from '@/features/landing/Hero';
import { Introduction } from '@/features/landing/Introduction';

const Home = () => {
  return (
    <div className="w-main mx-auto">
      <Hero />
      <Introduction />
      <Case />
    </div>
  );
};

export default Home;
