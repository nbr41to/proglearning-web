import type { Lesson } from '@/types/lesson';
import type { NotionPageObjectResponse } from '@/types/notion';

/**
 * NotionのDatabaseから取得したLessonsを変換
 */
export const toLessons = (
  notionLessons: NotionPageObjectResponse[]
): Lesson[] => {
  const parents = notionLessons.filter((page) => {
    if (page.properties.Parent.type !== 'relation')
      throw new Error('Parent is not relation');

    return !page.properties.Parent.relation.length;
  });

  const lessons = parents.map((parentPage) => {
    if (parentPage.properties.Title.type !== 'title')
      throw new Error('Title is not title');
    const title = parentPage.properties.Title.title[0].plain_text;

    const contents = notionLessons
      .filter((page) => {
        if (page.properties.Parent.type !== 'relation')
          throw new Error('Parent is not relation');

        return page.properties.Parent.relation.some((relation) => {
          return relation.id === parentPage.id;
        });
      })
      .map((page) => {
        if (page.properties.Title.type !== 'title')
          throw new Error('Title is not title');

        return {
          id: page.id,
          title: page.properties.Title.title[0].plain_text,
        };
      });

    return {
      id: parentPage.id,
      title,
      contents,
    };
  });

  return lessons;
};
