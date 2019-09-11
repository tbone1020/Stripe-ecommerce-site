import { AddPercentPipe } from './add-percent.pipe';

describe('AddPercentPipe', () => {
  it('Should return number with percent sign', () => {
    // arrange
    const pipe = new AddPercentPipe();

    // act
    const result = pipe.transform(50);

    // assert
    expect(result).toEqual("50%");
  });
});
