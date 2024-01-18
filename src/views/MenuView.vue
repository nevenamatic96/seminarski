<template>
    <div class="menu">
      <HeaderComponent></HeaderComponent>
      <FeaturedComponent></FeaturedComponent>
      <CategoryComponent></CategoryComponent>
      <MenuComponent></MenuComponent>
      <FooterComponent></FooterComponent>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
    import HeaderComponent from '@/components/HeaderComponent.vue';
    import FeaturedComponent from '@/components/FeaturedComponent.vue';
    import CategoryComponent from '@/components/CategoryComponent.vue';
    import FooterComponent from '@/components/FooterComponent.vue';
    import MenuComponent from '@/components/MenuComponent.vue';
  
  export default {
    name: 'MenuView',
    components: {
    HeaderComponent,
    FeaturedComponent,
    CategoryComponent,
    FooterComponent,
    MenuComponent
}
  }
  </script>
  