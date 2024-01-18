<template>
  <div class="home">
    <HeaderComponent></HeaderComponent>
    <FeaturedComponent></FeaturedComponent>
    <AboutComponent></AboutComponent>
    <CategoryComponent></CategoryComponent>
    <MenuComponent></MenuComponent>
    <FooterComponent></FooterComponent>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderComponent from '@/components/HeaderComponent.vue';
import FeaturedComponent from '@/components/FeaturedComponent.vue';
import AboutComponent from '@/components/AboutComponent.vue';
import CategoryComponent from '@/components/CategoryComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import MenuComponent from '@/components/MenuComponent.vue';

export default {
  name: 'HomeView',
  components: {
    HeaderComponent,
    FeaturedComponent,
    AboutComponent,
    CategoryComponent,
    FooterComponent,
    MenuComponent
}
}
</script>
