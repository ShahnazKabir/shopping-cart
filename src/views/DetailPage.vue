<template>
  <v-container grid-list-xs>
    <v-layout row wrap>
      <v-flex xs12>
        <div class="d-flex">
          <v-img
            :src="product.picture"
            width="400"
            height="400"
            class="ma-2"
          >

          </v-img>
          <div>
            <h2>{{product.title}}</h2>
            <p>{{product.price}}</p>
            <p>{{product.description}}</p>
            <div class="d-flex cart-container">
              <v-text-field v-model="qty"></v-text-field>
              <v-btn @click="addToCart">Add To Cart</v-btn>
            </div>
          </div>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import {
  ProductViewInterface, ProductService, Product, OldProductViewInterface,
} from '@/services/ProductService';
import CartService from '@/services/CartService';

export default Vue.extend({
  name: 'Detail',
  data() {
    return {
      product: {},
      qty: 0,
    };
  },
  beforeMount() {
    this.product = this.$router.currentRoute.params.product;
    console.log(this.product);
    // this.qty = this.product.quantity;
  },
  methods: {
    addToCart() {
      // this.product.quantity += 1;
      // this.qty = this.product.quantity
      console.log(this.product);
      CartService.addToCart(this.product);
    },
  },
});

</script>

<style lang="sass">
.cart-container
  width: 200px
</style>
