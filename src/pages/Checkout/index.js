import React from 'react';
import { MdAddShoppingCart, MdRemoveShoppingCart } from 'react-icons/md';

import {
  Container,
  ProductList,
  ProductCartView,
  Cart,
  Footer,
} from './styles';

export default function Checkout() {
  return (
    <Container>
      <ProductList>
        <li>
          <img
            src="https://pm1.narvii.com/6223/11335ffde96efad386b23068bb8751d77e26c1ef_hq.jpg"
            alt="Bulbassaur"
          />

          <strong>Bulbassaur</strong>
          <span>Price</span>

          <button type="button">
            <MdAddShoppingCart size={12} color="#FFF" />
            <span>Adicionar ao carrinho</span>
          </button>
        </li>
        <li>
          <img
            src="https://pm1.narvii.com/6223/11335ffde96efad386b23068bb8751d77e26c1ef_hq.jpg"
            alt="Bulbassaur"
          />

          <strong>Bulbassaur</strong>
          <span>Price</span>

          <button type="button">
            <MdAddShoppingCart size={12} color="#FFF" />
            <span>Adicionar ao carrinho</span>
          </button>
        </li>
        <li>
          <img
            src="https://pm1.narvii.com/6223/11335ffde96efad386b23068bb8751d77e26c1ef_hq.jpg"
            alt="Bulbassaur"
          />

          <strong>Bulbassaur</strong>
          <span>Price</span>

          <button type="button">
            <MdAddShoppingCart size={12} color="#FFF" />
            <span>Adicionar ao carrinho</span>
          </button>
        </li>
        <li>
          <img
            src="https://pm1.narvii.com/6223/11335ffde96efad386b23068bb8751d77e26c1ef_hq.jpg"
            alt="Bulbassaur"
          />

          <strong>Bulbassaur</strong>
          <span>Price</span>

          <button type="button">
            <MdAddShoppingCart size={12} color="#FFF" />
            <span>Adicionar ao carrinho</span>
          </button>
        </li>
        <li>
          <img
            src="https://pm1.narvii.com/6223/11335ffde96efad386b23068bb8751d77e26c1ef_hq.jpg"
            alt="Bulbassaur"
          />

          <strong>Bulbassaur</strong>
          <span>Price</span>

          <button type="button">
            <MdAddShoppingCart size={12} color="#FFF" />
            <span>Adicionar ao carrinho</span>
          </button>
        </li>
        <li>
          <img
            src="https://pm1.narvii.com/6223/11335ffde96efad386b23068bb8751d77e26c1ef_hq.jpg"
            alt="Bulbassaur"
          />

          <strong>Bulbassaur</strong>
          <span>R$ 128,99</span>

          <button type="button">
            <MdAddShoppingCart size={12} color="#FFF" />
            <span>Adicionar ao carrinho</span>
          </button>
        </li>
      </ProductList>

      <Cart>
        <h1>Carrinho</h1>
        <ProductCartView>
          <li>
            <img
              src="https://pm1.narvii.com/6223/11335ffde96efad386b23068bb8751d77e26c1ef_hq.jpg"
              alt="Bulbassaur"
            />
            <strong>Bulbassaur</strong>
            <span>R$ 128,99</span>

            <button type="button">
              <MdRemoveShoppingCart size={12} color="#FFF" />
            </button>
          </li>
          <li>
            <img
              src="https://pm1.narvii.com/6223/11335ffde96efad386b23068bb8751d77e26c1ef_hq.jpg"
              alt="Bulbassaur"
            />
            <strong>Bulbassaur</strong>
            <span>R$ 128,99</span>

            <button type="button">
              <MdRemoveShoppingCart size={12} color="#FFF" />
            </button>
          </li>
          <li>
            <img
              src="https://pm1.narvii.com/6223/11335ffde96efad386b23068bb8751d77e26c1ef_hq.jpg"
              alt="Bulbassaur"
            />
            <strong>Bulbassaur</strong>
            <span>R$ 128,99</span>

            <button type="button">
              <MdRemoveShoppingCart size={12} color="#FFF" />
            </button>
          </li>
          <li>
            <img
              src="https://pm1.narvii.com/6223/11335ffde96efad386b23068bb8751d77e26c1ef_hq.jpg"
              alt="Bulbassaur"
            />
            <strong>Bulbassaur</strong>
            <span>R$ 128,99</span>

            <button type="button">
              <MdRemoveShoppingCart size={12} color="#FFF" />
            </button>
          </li>
          <li>
            <img
              src="https://pm1.narvii.com/6223/11335ffde96efad386b23068bb8751d77e26c1ef_hq.jpg"
              alt="Bulbassaur"
            />
            <strong>Bulbassaur</strong>
            <span>R$ 128,99</span>

            <button type="button">
              <MdRemoveShoppingCart size={12} color="#FFF" />
            </button>
          </li>
        </ProductCartView>
        <Footer>
          <div>
            <strong>Total</strong>
            <span>R$ 1920,90</span>
          </div>
          <br />
          <button type="button">
            <span>Finalizar compra</span>
          </button>
        </Footer>
      </Cart>
    </Container>
  );
}
