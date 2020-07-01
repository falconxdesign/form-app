<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <span class="mr-2 text--center">Vue Form App</span>
    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>

    <v-footer padless color="primary">
      <v-col
        class="primary py-4 text-center white--text"
        cols="12"
      >
        <strong>Melchizedek</strong>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
    
  },

  data: () => ({
    //
  }),
};
</script>
