export const Hero = () => {
  return (
    <div className="select-none py-12 text-center sp:pt-2 sp:pb-10">
      <div className="">
        <div className="whitespace-pre bg-[url('../../public/gradient-background.png')] bg-cover bg-clip-text py-8 text-8xl font-bold text-transparent drop-shadow sp:text-4xl">
          <div className="font-sans leading-tight">
            Let&#39;s start
            <br />
            Learning the magic.
          </div>
        </div>

        <div className="mt-8 whitespace-pre px-6 text-base tracking-wider sp:mt-0 sp:text-[12px]">
          <span className="">オンラインコミュニティ</span>
          <span className="px-2 text-base font-bold text-primary">
            `progLearning`
          </span>
          <span className="">で</span>
          <wbr />
          <span className="px-2 text-base font-bold text-amber-500">
            `プログラミング（魔法）`
          </span>
          <span className="">を学ぼう！</span>
        </div>
      </div>
    </div>
  );
};
