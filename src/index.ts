const world = 'world';

export default function hello(word: string = world): string {
  return `Hello ${word}!`;
}
