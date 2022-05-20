import { ListTypes } from 'types/generalTypes';

export const pagesQty = {
  pages: 0,
};

export default function hasMore(type: string, page: number): boolean {
  switch (type) {
    case ListTypes.character:
      return page <= pagesQty.pages;
    case ListTypes.episode:
      return page <= pagesQty.pages;
    case ListTypes.location:
      return page <= pagesQty.pages;
    default:
      return false;
  }
}
