export const Hero = () => {
  return (
    <div className="py-4 text-center sm:py-16">
      <div className="">
        <div className="bg-[url('../../public/gradient-background.webp')] bg-cover bg-clip-text py-8 text-4xl font-bold text-transparent drop-shadow sm:text-8xl">
          <div className="leading-normal">Change your life</div>
          <div>
            by{' '}
            <span className="cursor-pointer transition-colors duration-300 hover:text-orange-300 active:text-white">
              Learning
            </span>
          </div>
        </div>

        <div className="mt-8 px-6 text-xs tracking-wider sm:text-base">
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
    </div>
  );
};
