import { SignboardContainer } from '@/components/common/SignboardContainer';

export const News = () => {
  return (
    <div className="space-y-2">
      <h2 className="font-baloo">News</h2>
      <SignboardContainer fill>
        <div className="grid h-24 place-content-center">
          <p className="font-bold">現在お知らせはありません</p>
        </div>
      </SignboardContainer>
    </div>
  );
};
