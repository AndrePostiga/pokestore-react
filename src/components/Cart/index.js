import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { MdRemoveShoppingCart } from 'react-icons/md';

import swal from '@sweetalert/with-react';

import * as CartActions from '../../store/modules/cart/actions';
import { formatPrice } from '../../util/format';

import { ProductCartView, Container, CartFooter } from './style';

class Cart extends Component {
  state = {
    cart: [],
    total: 0,
    formatedTotal: '',
  };

  componentDidMount() {
    const { cart, total, formatedTotal } = this.props;
    this.setState({
      cart: cart || [],
      total,
      formatedTotal,
    });
  }

  componentDidUpdate(prevProps) {
    const { cart, total, formatedTotal } = this.props;
    if (prevProps.cart !== cart) {
      sessionStorage.setItem('cart', JSON.stringify(cart));
      sessionStorage.setItem('total', JSON.stringify(total));
      this.setState({
        cart: cart || [],
        total,
        formatedTotal,
      });
    }
  }

  handleBuy = (event) => {
    const { buy } = this.props;
    const { total, formatedTotal } = this.props;

    swal({
      text: 'Parabéns pela compra',
      buttons: {
        cancel: 'Fechar',
      },
      content: (
        <div>
          <strong>Muito obrigado por comprar conosco</strong>
          <p>
            O valor da sua compra foi de: <strong>{formatedTotal}</strong>
          </p>
          <p>
            Você ganhou <strong>{formatPrice(total * 0.01)}</strong>≈ de
            cashback
          </p>
        </div>
      ),
    });

    sessionStorage.removeItem('cart');
    buy();
  };

  render() {
    const { theme, removeFromCart } = this.props;
    const { cart, formatedTotal } = this.state;
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
            <span>{formatedTotal}</span>
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
  formatedTotal: formatPrice(
    state.cart.reduce((total, item) => (total += item.amount * item.price), 0)
  ),
  total: state.cart.reduce(
    (total, item) => (total += item.amount * item.price),
    0
  ),
  theme: state.theme,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
export { Cart };
