<template>
  <q-page padding class="column justify-center items-center page">
    <!-- content -->
    <h3>Search Breaking Bad</h3>
    <div class="search">
      <form @submit.prevent="pressed">
        <q-input
          ref="input"
          v-model="search"
          filled
          type="search"
          hint="Search"
          :rules="[val => !!val || 'Field is required']"
        >
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
        <div class="search-wrapper">
          <q-btn type="submit" color="primary" label="Search" />
        </div>
      </form>

      <div class="profile">
        <mini-profile v-if="character" :character="character"></mini-profile>
      </div>
    </div>
  </q-page>
</template>

<script>
import { QSpinnerCube } from "quasar";
import MiniProfile from "../components/mini-profile";
export default {
  // name: 'PageName',
  components: {
    "mini-profile": MiniProfile
  },
  data() {
    return {
      search: "",
      character: ""
    };
  },
  methods: {
    pressed() {
      // console.log(this.$route);
      console.log("refs", this.$refs.input.validate());
      this.$q.loading.show({
        message: "please wait",
        spinnerColor: "red",
        spinner: QSpinnerCube
      });
      let url = `https://www.breakingbadapi.com/api/characters?name=${this.search}`;
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
    }
  }
};
</script>
<style lang="stylus" scoped>
.search {
  max-width: 1024px;
  margin: 0 auto;
  width: 100%;
}

.search-wrapper {
  display: flex;
  justify-content: flex-end;
}

form {
  width: 50%;
  margin: 0 auto;
}

.profile {
  display: flex;
  justify-content: center;
  max-width: 700px;
  margin: 0 auto;
}
</style>
