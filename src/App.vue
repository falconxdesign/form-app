<template>
  <v-app>
    <v-app-bar
      flat
      app
      color="primary"
      dark
    >
      <span class="mr-2 text--center">Vue Form App</span>
    </v-app-bar>
    <v-content>
      <router-view></router-view>
    </v-content>
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
