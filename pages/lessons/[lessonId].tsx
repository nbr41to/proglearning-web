import { Case } from '@/components/features/Landing/Case';
import { Hero } from '@/components/features/Landing/Hero';
import { Introduction } from '@/components/features/Landing/Introduction';

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
