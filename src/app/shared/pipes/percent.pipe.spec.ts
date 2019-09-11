import { PercentPipe } from './percent.pipe';

describe('PercentPipe', () => {
  it('Should return number with percent sign', () => {
    // arrange
    const pipe = new PercentPipe();

    // act
    const result = pipe.transform(50);

    // assert
    expect(result).toEqual("50%");
  });
});
