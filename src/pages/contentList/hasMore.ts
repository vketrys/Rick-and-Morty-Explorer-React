import { listTypes } from 'types/generalTypes';

export default function hasMore(type: string, page: number): boolean {
  switch (type) {
    case listTypes.character:
      return page < 43;
    case listTypes.episode:
      return page < 4;
    case listTypes.location:
      return page < 8;
    default:
      return false;
  }
}
