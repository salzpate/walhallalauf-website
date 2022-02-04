import { PropsWithChildren } from 'react';

type InfoArticleProps = {
  id?: number;
  headline: string;
};

function InfoArticle(props: PropsWithChildren<InfoArticleProps>): JSX.Element {
  const { headline, id = 1, children } = props;
  const articleId = `article-${id}`;

  return (
    <article className="max-w-screen-xl mx-auto text-gray-900 dark:text-gray-300" id={articleId}>
      <p className="font-bold">{headline}</p>
      <p>&nbsp;</p>
      <p>{children}</p>
    </article>
  );
}
export default InfoArticle;
