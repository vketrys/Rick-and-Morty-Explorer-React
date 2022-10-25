const getRandomEpisode = (min: number, max: number): string =>
  String(Math.floor(Math.random() * (max - min + 1)) + min);

export default getRandomEpisode;
