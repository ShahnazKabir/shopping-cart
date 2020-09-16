<template>
  <v-main>
    <v-container grid-list-xs grid-list-lg>
      <v-layout row wrap>
        <v-flex xs12>
          <ListView />
        </v-flex>
      </v-layout>
    </v-container>
  </v-main>
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
export default class Home extends Vue {}
</script>
