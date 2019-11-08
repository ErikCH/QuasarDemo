<template>
  <div>
    <mini-profile :character="character"></mini-profile>
  </div>
</template>

<script>
import { QSpinnerCube } from "quasar";
import MiniProfile from "../components/mini-profile";
export default {
  components: {
    "mini-profile": MiniProfile
  },
  mounted() {
    console.log(this.$route);
    this.$q.loading.show({
      message: "please wait",
      spinnerColor: "red",
      spinner: QSpinnerCube
    });
    let url = `https://www.breakingbadapi.com/api/characters/${this.$route.params.id}`;
    if (this.$route.params.id === "random") {
      url = `https://www.breakingbadapi.com/api/character/${this.$route.params.id}`;
    }
    this.$axios
      .get(url)
      .then(val => {
        console.log(val.data[0]);
        this.character = val.data[0];
      })
      .catch(err => console.log(err))
      .finally(() => {
        setTimeout(() => {
          this.$q.loading.hide();
        }, 300);
      });
  },
  data() {
    return {
      character: "",
      alert: false
    };
  }

  // name: 'PageName',
};
</script>

<style lang="stylus" scoped>
.my-card {
  width: 20%;

  @media (max-width: $breakpoint-xs-max) {
    width: 80%;
  }
}
</style>
