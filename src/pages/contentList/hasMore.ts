import { ListTypes } from 'types/generalTypes';

export default function hasMore(type: string, page: number): boolean {
  switch (type) {
    case ListTypes.character:
      return page < 43;
    case ListTypes.episode:
      return page < 4;
    case ListTypes.location:
      return page < 8;
    default:
      return false;
  }
}
