<template>
  <div class="home">
    <HeaderComponent></HeaderComponent>
    <FeaturedComponent></FeaturedComponent>
    <AboutComponent></AboutComponent>
    <FooterComponent></FooterComponent>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderComponent from '@/components/HeaderComponent.vue';
import FeaturedComponent from '@/components/FeaturedComponent.vue';
import AboutComponent from '@/components/AboutComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';

export default {
  name: 'HomeView',
  components: {
      HeaderComponent,
      FeaturedComponent,
      AboutComponent,
      FooterComponent
  }
}
</script>
