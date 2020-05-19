import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { MdRemoveShoppingCart } from 'react-icons/md';

import * as CartActions from '../../store/modules/cart/actions';
import { formatPrice } from '../../util/format';

import { ProductCartView, Container, CartFooter } from './style';

class Cart extends Component {
  state = {
    cart: [],
    total: 0,
  };

  componentDidMount() {
    const { cart, total } = this.props;
    this.setState({
      cart: cart || [],
      total,
    });
  }

  componentDidUpdate(prevProps) {
    const { cart, total } = this.props;
    if (prevProps.cart !== cart) {
      sessionStorage.setItem('cart', JSON.stringify(cart));
      sessionStorage.setItem('total', JSON.stringify(total));
      this.setState({
        cart: cart || [],
        total,
      });
    }
  }

  handleBuy = (event) => {
    const { buy } = this.props;
    alert('Parabéns pela compra');
    sessionStorage.removeItem('cart');
    buy();
    // aqui entraria a alteração de estado que abriria
    // meu modal hidden = true
  };

  render() {
    const { theme, removeFromCart } = this.props;
    const { cart, total } = this.state;
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
              <button type="button" onClick={() => removeFromCart(item.id)}>
                <MdRemoveShoppingCart size={12} color="#FFF" />
              </button>
            </li>
          ))}
        </ProductCartView>

        <CartFooter theme={theme.color}>
          <div>
            <strong>Total</strong>
            <span>{total}</span>
          </div>

          <button type="button" onClick={() => this.handleBuy()}>
            <span>Finalizar compra</span>
          </button>
        </CartFooter>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart.map((item) => ({
    ...item,
    subTotal: formatPrice(item.price * item.amount),
  })),
  total: formatPrice(
    state.cart.reduce((total, item) => (total += item.amount * item.price), 0)
  ),
  theme: state.theme,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
export { Cart };
