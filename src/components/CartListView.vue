<template>
  <v-container grid-list-xs>
    <v-layout row wrap>
      <v-flex xs12>
        <h2>Cart</h2>
      </v-flex>
    </v-layout>
    <v-layout row wrap v-if="cartList.length > 0">
      <v-flex v-for="(product, i) in cartList" :key="i" xs12>
        <v-list-item two-line>
          <v-list-item-content>
            <v-list-item-title>
              <v-btn class="red--text" @click="remove(product)">X</v-btn>
              {{product.title}}
            </v-list-item-title>
            <v-list-item-subtitle>{{product.quantity}} x {{product.price}}</v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-avatar>
          <v-img :src="product.picture"></v-img>
        </v-list-item-avatar>
        </v-list-item>
      </v-flex>
      <v-flex xs12>
        <p>SubTotal: {{getMySubtotal}}</p>
      </v-flex>
      <v-flex xs12>
        <v-btn>View Cart</v-btn>
        <v-btn>Checkout</v-btn>
      </v-flex>
    </v-layout>
    <v-layout v-else>
      <v-flex xs12>
        <p>No Products in the cart</p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Product, ProductViewInterface } from '@/services/ProductService';
import CartService from '@/services/CartService';

@Component
export default class CartListView extends Vue {
  private cartList: ProductViewInterface[] = [];

  private subtotal = 0;

  private subscription = CartService.getCartList().subscribe((product: ProductViewInterface) => {
    const index: number = this.cartList.findIndex((item) => item.title === product.title);
    if (index > -1) {
      this.cartList.splice(index, 1, product);
    } else {
      this.cartList.push(product);
    }
  });

  get getMySubtotal() {
    this.subtotal = 0;
    this.cartList.forEach((item) => {
      this.subtotal += item.quantity * item.price;
    });
    return this.subtotal;
  }

  remove = (product: ProductViewInterface) => {
    const index: number = this.cartList.findIndex((item) => item.title === product.title);
    const tempProduct = product;
    tempProduct.quantity = 0;
    this.cartList.splice(index, 1);
    // CartService.removeFromCart(product);
  };
}

</script>

<style lang="sass">
.v-card__title
  font-size: 16px !important
  display: flex
  justify-content: center
</style>
