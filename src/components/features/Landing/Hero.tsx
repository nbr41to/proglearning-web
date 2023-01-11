export const Hero = () => {
  return (
    <div className="py-4 text-center sm:py-16">
      <div className="">
        <div className="animate-pulse text-4xl font-bold sm:text-8xl">
          <div className="leading-snug">Change your life</div>
          <div>
            by <span className="text-teal-300">Learning</span>
          </div>
        </div>
        <div className="mt-8 px-6 text-xs tracking-wider sm:mt-16 sm:text-base">
          <span className="px-2 text-base font-bold text-teal-300">
            `progLearning`
          </span>
          <span className="">はプログラミング学習による</span>
          <span className="px-2 text-base font-bold text-amber-400">
            `あなたの変化`
          </span>
          <span className="">をサポートします。</span>
        </div>
      </div>
      <div className="mt-8 hidden items-center justify-center sm:mt-12 sm:flex">
        <a href="">Come and join us!!</a>
      </div>
    </div>
  );
};
