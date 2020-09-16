<template>
  <v-container grid-list-xs>
    <v-layout row wrap>
      <v-flex xs12>
        <h2>Shop</h2>
      </v-flex>
      <v-flex xs6>
        <p>Showing All</p>
      </v-flex>
      <v-flex offset-xs4 xs2>
        <v-select :items="sortList" v-model="sortBy" @change="sortListBy">
        </v-select>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex v-for="(product, i) in productList" :key="i" xs4>
        <v-card>
          <v-img  height="200"
            :src="product.picture">
          </v-img>
          <v-card-title>
            <router-link :to="{name:'Product', params: {id: product._id, product}}">
              {{product.title}}
            </router-link>
          </v-card-title>
          <v-card-text class="text-center">
            <span class="red--text">
              ${{product.price}}
            </span>
          </v-card-text>
          <v-card-actions>
            <v-btn block @click="addToCart(product)" v-if="product.quantity < product.stock">
               <v-icon>mdi-cart</v-icon>
              Add To Cart
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import {
  ProductViewInterface, ProductService, Product, OldProductViewInterface, ProductHelper,
} from '@/services/ProductService';
import CartService from '@/services/CartService';

// ProductListView class will be a Vue component
@Component
export default class ProductListView extends Vue {
  private productList: ProductViewInterface[] = [];

  private sortList: string[] = ['Default', 'High', 'Low'];

  private sortBy = 'Default';

  beforeMount() {
    ProductService.getAll().then((res) => {
      res.data.forEach((product: OldProductViewInterface) => {
        /* eslint no-underscore-dangle: 0 */
        const withQty = new Product(product.description, product.picture,
          product.price, product.stock, product.title, product._id);

        this.productList.push(withQty);
        ProductHelper.addToList(withQty);
      });
    });
  }

  sortListBy() {
    if (this.sortBy === 'High') {
      // eslint-disable-next-line max-len
      this.productList.sort((a: ProductViewInterface, b: ProductViewInterface) => a.price - b.price);
    } else if (this.sortBy === 'Low') {
      // eslint-disable-next-line max-len
      this.productList.sort((a: ProductViewInterface, b: ProductViewInterface) => b.price - a.price);
    } else if (this.sortBy === 'Default') {
      this.productList.sort((a: ProductViewInterface, b: ProductViewInterface) => (`${a.title}`).localeCompare(b.title));
    }
  }

  addToCart = (product: ProductViewInterface) => {
    const foundItem: ProductViewInterface | undefined = this.productList.find(
      (item) => item.title === product.title,
    );
    if (foundItem) {
      foundItem.quantity += 1;
      CartService.addToCart(foundItem);
    }
  }

  // pushToRoute(product: ProductViewInterface) {
  //   /* eslint no-underscore-dangle: 0 */
  //   // this.$router.push('/product', { product });
  //   // this.$router.push();
  // }
}

</script>

<style lang="sass">
.v-card__title
  font-size: 16px !important
  display: flex
  justify-content: center
</style>
