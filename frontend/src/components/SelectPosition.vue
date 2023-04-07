<template>
  <div class="flex items-center mb-6 gap-4">
    <label for="position-selector" class="">Position:</label>
    <select
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      id="entry-selector"
      v-on:change="$emit('change', $event)"
    >
      <option
        v-for="(position, index) in availablePositions"
        :key="position"
        :value="position"
        :selected="index === selectedPositionSelectIndex"
      >
        {{ position }}
      </option>
    </select>
  </div>
</template>

<script lang="ts">
import { BingoCellPositions } from "@/classes/Bingo";
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    availablePositions: Array,
    selectedPositionSelectIndex: Number,
  },
})
export default class SelectEntry extends Vue {
  availablePositions!: BingoCellPositions[];
  selectedPositionSelectIndex!: number;
}
</script>
