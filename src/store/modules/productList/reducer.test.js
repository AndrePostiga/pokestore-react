import ProductList from './reducer';
import * as ProductListActions from './actions';

describe('ProductList reducer', () => {
  const data = 'SearchText';

  it('Should be able to add item to searchTerm', () => {
    const state = ProductList('', ProductListActions.search(data));
    expect(state).toStrictEqual(data);
  });
});
