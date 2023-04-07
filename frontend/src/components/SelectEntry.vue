<template>
  <div class="flex items-center mb-6 gap-4">
    <label for="entry-selector" class="">Entry:</label>
    <select
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      id="entry-selector"
      @change="$emit('change', $event)"
      v-model="bingoFieldEditor.selectedCellIndex"
    >
      <option
        v-for="(cell, index) in bingoFieldEditor.bingoField.cells"
        :key="cell.name"
        :value="index"
        :selected="index === bingoFieldEditor.selectedCellIndex"
      >
        {{ cell.name }}
      </option>
    </select>
  </div>
</template>

<script lang="ts">
import { BingoFieldEditor } from "@/classes/Bingo";
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    bingoFieldEditor: BingoFieldEditor,
  },
})
export default class SelectEntry extends Vue {
  bingoFieldEditor!: BingoFieldEditor;
}
</script>
