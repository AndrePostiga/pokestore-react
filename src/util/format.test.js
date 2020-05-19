import { Capitalize, formatPrice } from './format';

// describe('Format price', () => {
//   it('Should transform float number in BR Currency', () => {
//     const value = 109.9;
//     const data = 'R$ 109,90';
//     const priceFormated = formatPrice(value);
//     expect(priceFormated).toEqual(data);
//   });
// });

describe('Capitalize letter', () => {
  it('Should capitalize words', () => {
    const word = 'b2w-pokestore';
    const wordCapitalized = 'B2w-pokestore';
    const capitalized = Capitalize(word);
    expect(capitalized).toEqual(wordCapitalized);
  });
});
