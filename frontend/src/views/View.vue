<template>
  <BingoField></BingoField>
</template>

<script lang="ts">
import BingoField from "@/components/BingoField.vue";
import { Options, Vue } from "vue-class-component";

@Options({
  components: {
    BingoField,
  },
})
export default class View extends Vue {}
</script>

<style lang="scss"></style>
