import React from 'react';
import { connect } from 'react-redux';
import { MdRemoveShoppingCart } from 'react-icons/md';

import { formatPrice } from '../../util/format';
import { ProductCartView, Container, CartFooter } from './style';

function Cart({ cart, dispatch, total }) {
  return (
    <Container>
      <h1>Carrinho</h1>
      <ProductCartView>
        {cart.map((item) => (
          <li key={item.name}>
            <img src={item.imageUrl} alt={item.name} />
            <strong>{item.name}</strong>
            <span>{item.subTotal}</span>
            <span>{item.amount}</span>
            <button
            type="button"
            onClick={() => dispatch({type: 'REMOVE_FROM_CART', id: item.id})}
            >
              <MdRemoveShoppingCart size={12} color="#FFF" />
            </button>
          </li>
        ))}
      </ProductCartView>

      <CartFooter>
        <div>
          <strong>Total</strong>
          <span>{total}</span>
        </div>

        <button type="button">
          <span>Finalizar compra</span>
        </button>
      </CartFooter>
    </Container>
  );
}

const mapStateToProps = (state) => ({
  cart: state.cart.map(item => ({
    ...item,
    subTotal: formatPrice(item.price * item.amount)
  })),
  total: formatPrice(state.cart.reduce((total, item) => (
    total += (item.amount * item.price)
  ), 0))
});

export default connect(mapStateToProps)(Cart);
