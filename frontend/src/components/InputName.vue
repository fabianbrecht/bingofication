<template>
  <div class="flex items-center mb-6 gap-4">
    <label for="input-name" class="">Name:</label>
    <input
      :value="modelValue"
      @input="
        $emit('update:modelValue', ($event.target as HTMLInputElement).value)
      "
      type="text"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      :placeholder="label"
      id="input-name"
    />
    <button
      @click="$emit('add')"
      type="button"
      class="focus:ring-blue-300 font-medium rounded-lg text-sm border border-gray-300 hover:bg-gray-100 text-gray-900 px-5 py-2.5"
    >
      <PlusIcon />
    </button>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import PlusIcon from "vue-material-design-icons/Plus.vue";

@Options({
  props: {
    label: String,
    modelValue: String,
  },
  components: {
    PlusIcon,
  },
})
export default class SelectEntry extends Vue {
  label!: string;
  modelValue!: string;
}
</script>
