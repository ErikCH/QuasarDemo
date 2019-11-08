<template>
  <q-page>
    <div class="column justify-center items-center">
      <h3>{{ character.name }}</h3>
      <q-card class="my-card">
        <img :src="character.img" @click="alert = true" />

        <q-card-section>
          <div class="text-h6">{{ character.name }}</div>
          <div class="text-subtitle2">{{ character.nickname }}</div>
        </q-card-section>

        <q-card-section>
          <q-chip
            v-for="occupation in character.occupation"
            color="teal"
            :key="occupation"
            text-color="white"
            icon="bookmark"
            >{{ occupation }}</q-chip
          >
        </q-card-section>
      </q-card>
    </div>

    <q-dialog v-model="alert">
      <q-card>
        <q-card-section>
          <div class="text-h6">Birthday Info</div>
        </q-card-section>

        <q-card-section>{{ character.birthday }}</q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="OK" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
    <!-- content -->
  </q-page>
</template>

<script>
export default {
  name: "mini-profile",
  props: ["character"],

  data() {
    return {
      alert: false
    };
  }
};
</script>
<style lang="stylus" scoped>
.my-card {
  @media (max-width: $breakpoint-xs-max) {
    width: 80%;
  }
}
</style>
