<template>
  <v-app>
    <v-main>
      <v-container grid-list-xs grid-list-lg>
        <v-layout row wrap>
          <v-flex xs10>
            <router-view></router-view>
          </v-flex>
          <v-flex xs2>
            <CartView />
          </v-flex>
        </v-layout>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ListView from '@/components/ProductListView.vue';
import CartView from '@/components/CartListView.vue';

@Component({
  components: {
    ListView,
    CartView,
  },
})
export default class App extends Vue {}
</script>
