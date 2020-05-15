import React from 'react';
import { connect } from 'react-redux';
import { MdRemoveShoppingCart } from 'react-icons/md';
import { formatPrice } from '../../util/format';

import { ProductCartView, Container, CartFooter } from './style';

function Cart({ cart }) {
  return (
    <Container>
      <h1>Carrinho</h1>
      <ProductCartView>
        {cart.map((item) => (
          <li key={item.name}>
            <img src={item.imageUrl} alt={item.name} />
            <strong>{item.name}</strong>
            <span>{item.priceFormatted}</span>

            <button type="button">
              <MdRemoveShoppingCart size={12} color="#FFF" />
            </button>
          </li>
        ))}
      </ProductCartView>

      <CartFooter>
        <div>
          <strong>Total</strong>
          <span>total</span>
        </div>

        <button type="button">
          <span>Finalizar compra</span>
        </button>
      </CartFooter>
    </Container>
  );
}

const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(Cart);
