import greeter from '../src';

describe('test add function', () => {
  it('should return worldy greeting', () => {
    expect(greeter()).toBe('Hello World!');
  });
  it('should return custom greeting', () => {
    expect(greeter('Rolando')).toBe('Hello Rolando!');
  });
});
