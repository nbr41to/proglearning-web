import { CaseItem } from './CaseItem';
import { SignboardContainer } from '@/components/common/SignboardContainer/SignboardContainer';

export const Case = () => {
  return (
    <div className="py-12">
      <h2 className="text-center text-xl font-bold sm:text-2xl">
        こんな経験はありませんか？
      </h2>
      <SignboardContainer>
        <div className="mx-auto mt-12 flex flex-wrap justify-center gap-10 p-10">
          <div className="space-y-10">
            <CaseItem
              title="プログラミングの学習に挫折したことがある🙉"
              paragraph="プログラミングの学習は挫折しやすいと言われているそうです。三度挫折してもエンジニアになった私だからこそ心理学的に挫折しにくい勉強の続け方を伝えることができます。"
            />
            <CaseItem
              title="一人だと勉強が続かない🙉"
              paragraph="プログラミングの学習を頑張ることを決めたけれど、なにから始めていいのかわからずになかなか勉強が続かないことはありませんか？新しいことを始めると少なからずストレスがかかります。個別で相談を頂いた方には、これを乗り越えるような明確な目標設定をサポートいたします。"
            />
            <CaseItem
              title="HTML,CSS,JavaScriptを勉強したところで止まっている🙉"
              paragraph="プログラミング学習は、これといった学ぶ順序や内容が明確でないため、学校の試験で高得点をとるような勉強では、ついつい目標を見失いがちになってしまいます。個別で相談を頂いた方には、一人ひとりの性格にあった新しい勉強法でサポートさせていただいております。"
            />
            <CaseItem
              title="良いメンターに出会えない🙉"
              paragraph="メンターとは、プログラミングを学ぶことを導いてくれる先生のような存在のことです。私自身が良いメンターであると言うつもりはありませんが、現役エンジニアで教育が上手な人は少なく、私が元教員であるということは事実だと思っております。プログラミング学習コミュニティprogLabに入ることで,そんなを私がメンターとなり、コミュニケーションを提供いたします。"
            />
          </div>
          <div className="space-y-10">
            <CaseItem
              title="プログラミング学習が流行っているが実際にどんな感じかわからない🙉"
              paragraph="progLearningはプログラミング学習の記録を初学者だったことから記録しており、無料で公開しております。また,勉強した内容とその感想もアウトプットしているので、ぜひご活用ください。"
            />
            <CaseItem
              title="gitやGitHubの使い方がイマイチわからない🙉"
              paragraph="一人で学習しているとgitやGitHubを使う機会はそれほど多くなく、使わなくてもいいのかなと思っています。progLabではGitHubを使ってタスクをこなしたり、共同開発でコミュニケーションを取るので、自然とgitやGitHubの使い方を学ぶことができます。"
            />
            <CaseItem
              title="プログラミングの教材はわかりにくいものが多い🙉"
              paragraph="私は元教員ということもあり、常に「わかりやすい」を追求してしまいます。というよりも、私自身の理解力が高くないため、わかりやすくして、理解し直すことが多くあるというのが正直な話です。そんな私は趣味でわかりやすくまとめた内容を文書に書き出したり、動画に収めたりしております。これらが、少しでも多くの方の「わかりやすい」になりましたら幸いです。"
            />
            <CaseItem
              title="実務経験の積み方がわからない🙉"
              paragraph="プログラミング学習コミュニティprogLabでは、実務に近い内容のタスクや共同開発を実施しております。また、稀にではありますが、報酬を受け取りながら経験を積むための案件も紹介させていただくこともございます。"
            />
          </div>
        </div>
      </SignboardContainer>
    </div>
  );
};
