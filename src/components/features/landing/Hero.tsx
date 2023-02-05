export const Hero = () => {
  return (
    <div className="select-none py-12 text-center">
      <div className="">
        <div className="whitespace-pre bg-[url('../../public/gradient-background.png')] bg-cover bg-clip-text py-8 text-4xl font-bold text-transparent drop-shadow sm:text-8xl">
          <div className="font-sans leading-tight">
            Let&#39;s start
            <br />
            Learning the magic.
          </div>
        </div>

        <div className="mt-8 px-6 text-xs tracking-wider sm:text-base">
          <span className="">オンラインコミュニティ</span>
          <span className="px-2 text-base font-bold text-primary">
            `progLearning`
          </span>
          <span className="">で</span>
          <span className="px-2 text-base font-bold text-amber-500">
            `プログラミング（魔法）`
          </span>
          <span className="">を学ぼう！</span>
        </div>
      </div>
    </div>
  );
};
