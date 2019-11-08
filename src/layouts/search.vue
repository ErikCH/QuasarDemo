<template>
  <q-layout view="hHh Lpr fFf">
    <!-- Be sure to play with the Layout demo on docs -->

    <!-- (Optional) The Header -->
    <q-header elevated>
      <q-toolbar class="row justify-start">
        <q-btn flat round dense icon="menu" class="lt-xs" />

        <q-toolbar-title>Breaking Bad Info</q-toolbar-title>
        <q-tabs v-model="tab">
          <q-route-tab
            name="ww"
            label="Walter White"
            :to="{ name: 'profile', params: { id: 1 } }"
          />
          <q-route-tab
            name="jp"
            label="Jesse Pinkman"
            :to="{ name: 'profile', params: { id: 2 } }"
          />
          <q-route-tab name="search" label="Search" :to="{ name: 'search' }" />
          <q-route-tab
            name="random"
            label="Random"
            :to="{ name: 'profile', params: { id: 'random' } }"
          />
        </q-tabs>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <!-- This is where pages get injected -->
      <router-view :key="$route.params.id" />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  // name: 'LayoutName',
  meta: {
    title: "Break Bad"
  },
  data() {
    return {
      leftDrawer: false,
      tab: ""
    };
  }
};
</script>
