import { PricePipe } from './price.pipe';

describe('PricePipe', () => {
  let pipe: PricePipe;
  let result;
   
  // arrange
  beforeEach(() => {
    pipe = new PricePipe();
  }); 

  // act
  it ('Should return price with dollar sign', () => {
    result = pipe.transform(500.00);
  })

  it ('Should return price with dollar sign and cents', () => {
    result = pipe.transform(500);
  });

  // assert
  afterEach(() => {
    expect(result).toEqual("$500.00");
  })


});
