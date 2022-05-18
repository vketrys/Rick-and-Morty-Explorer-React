import { ListTypes } from 'types/generalTypes';

enum pageQty {
  character = 42,
  location = 7,
  episode = 3,
}
export default function hasMore(type: string, page: number): boolean {
  switch (type) {
    case ListTypes.character:
      return page <= pageQty.character;
    case ListTypes.episode:
      return page <= pageQty.episode;
    case ListTypes.location:
      return page <= pageQty.location;
    default:
      return false;
  }
}
