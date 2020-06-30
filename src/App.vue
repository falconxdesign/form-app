<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <span class="mr-2 text--center">Vue Form App</span>
    </v-app-bar>
    <v-content>
      <router-view></router-view>
    </v-content>

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
