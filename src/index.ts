import up from './otherFile';

const world = 'World';

export default function hello(word: string = world): string {
  return `Hello ${up(word)}!`;
}

console.log(hello());
