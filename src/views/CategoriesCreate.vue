<template>
  <div>
    <nav-bar
      :back-button="{
        show: true,
        to: 'Categories',
      }"
    />

    <category-form />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import NavBar from "@/components/navbar/NavBar.vue";
import FormBuilder from "../library/builders/FormBuilder";
import FormDirector from "../library/builders/FormDirector";

@Component({
  components: {
    NavBar,
    CategoryForm: new FormDirector(new FormBuilder()).makeCategoryForm(),
  },
})
export default class CategoriesCreate extends Vue {}
</script>
