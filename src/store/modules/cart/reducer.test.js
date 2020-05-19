import Cart from './reducer';
import * as CartActions from './actions';

describe('Cart reducer', () => {
  const data = {
    id: 1,
    name: 'Bulbasaur',
    imageUrl:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
    price: 54.58613166339663,
    priceFormatted: 'R$ 54,59',
  };

  it('Should be able to add item to cart state', () => {
    const initialState = Cart();
    const state = Cart(initialState, CartActions.addToCart(data));
    data.amount = 1;

    expect(state).toStrictEqual([data]);
  });

  it('Should be abble to increase amount of item at cart', () => {
    data.amount = 2;

    const initialState = Cart([data]);
    const state = Cart(initialState, CartActions.addToCart(data));

    data.amount = 3;

    expect(state).toStrictEqual([data]);
  });

  it('should be abble to remove item from cart', () => {
    data.amount = 1;
    const initialState = Cart([data]);
    const state = Cart(initialState, CartActions.removeFromCart(data.id));

    expect(state).toStrictEqual([]);
  });

  it('Should be abble to decrease amount form cart', () => {
    data.amount = 2;
    const initialState = Cart([data]);
    const state = Cart(initialState, CartActions.removeFromCart(data.id));
    data.amount = 1;
    expect(state).toStrictEqual([data]);
  });

  it('Should be able to remove all itens', () => {
    data.amount = 30;
    const initialState = Cart([data]);
    const state = Cart(initialState, CartActions.buy());
    expect(state).toStrictEqual([]);
  });
});
