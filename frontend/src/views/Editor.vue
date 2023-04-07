<template>
  <BingoFieldComponent :key="bingoFieldCompKey" :bingoField="bingoFieldEditor.bingoField"></BingoFieldComponent>

  <div class="container mt-4 mb-8">
    <div class="grid lg:grid-cols-3 gap-x-4 gap-y-2 justify-items-stretch my-8">
      <input-name
        :label="'Name'"
        v-model="bingoFieldEditor.bingoField.cells[bingoFieldEditor.selectedCellIndex].name"
        @add="addCell()"
      ></input-name>
      <SelectEntry :bingoFieldEditor="bingoFieldEditor" @change="onSelectedCellChanged($event)"></SelectEntry>
      <SelectPosition
        :availablePositions="getAvailablePositions()"
        :selectedPositionSelectIndex="selectedPositionSelectIndex"
        @change="changePosition($event)"
      ></SelectPosition>
    </div>

    <QuillEditor
      class="h-64"
      theme="snow"
      contentType="html"
      :content="bingoFieldEditor.bingoField.cells[bingoFieldEditor.selectedCellIndex].text"
      :toolbar="toolbarOptions"
      @update:content="onContentChanged($event)"
    />
  </div>
</template>

<script lang="ts">
import BingoFieldComponent from "@/components/BingoField.vue";
import InputName from "@/components/InputName.vue";
import SelectEntry from "@/components/SelectEntry.vue";
import SelectPosition from "@/components/SelectPosition.vue";
import { Options, Vue } from "vue-class-component";
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";
import { BingoCell, BingoCellPositions, BingoFieldEditor } from "@/classes/Bingo";
import { Cookies } from "@/classes/Cookies";

@Options({
  components: {
    BingoFieldComponent,
    QuillEditor,
    SelectEntry,
    InputName,
    SelectPosition,
  },
})
export default class Editor extends Vue {
  toolbarOptions = [
    ["bold", "italic", "underline", "strike"], // toggled buttons

    [{ list: "ordered" }, { list: "bullet" }],
    [{ script: "sub" }, { script: "super" }], // superscript/subscript
    //[{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
    //[{ 'direction': 'rtl' }],                         // text direction

    [{ size: ["small", false, "large", "huge"] }], // custom dropdown
    // [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

    [{ color: [] }, { background: [] }], // dropdown with defaults from theme
    [{ font: [] }],
    [{ align: [] }],

    ["clean"], // remove formatting button
  ];
  quill: any;

  bingoFieldEditor: BingoFieldEditor = new BingoFieldEditor();
  bingoFieldCompKey: number = 0;
  selectedPositionSelectIndex: number = 0;
  editorContent: string = "";

  delay: number = 0;

  get selectedCell(): BingoCell {
    return this.bingoFieldEditor.bingoField.cells[this.selectedPositionSelectIndex];
  }

  mounted() {
    const uid = this.getUUID();
    if (uid === null) {
      this.$router.push("/edit?uid=" + this.bingoFieldEditor.uuid);
    } else {
      this.bingoFieldEditor = Cookies.getBingoFieldEditor(uid);
    }
    this.bingoFieldCompKey++;
  }

  getUUID(): string | null {
    return new URL(location.href).searchParams.get("uid");
  }

  update() {
    Cookies.saveBingoFieldEditor(this.bingoFieldEditor);
    this.bingoFieldCompKey++;
  }

  onContentChanged(e: string) {
    clearTimeout(this.delay);
    this.delay = setTimeout(() => {
      this.bingoFieldEditor.bingoField.cells[this.bingoFieldEditor.selectedCellIndex].text = e;
      this.update();
    }, 1000);
  }

  getAvailablePositions() {
    let positions: BingoCellPositions[] = BingoFieldEditor.STATIC_BINGO_CELL_POSITIONS.slice(0);

    for (let i = 0; i < this.bingoFieldEditor.bingoField.usedPositions.length; i++) {
      const element = this.bingoFieldEditor.bingoField.usedPositions[i];
      if (element != this.bingoFieldEditor.bingoField.cells[this.bingoFieldEditor.selectedCellIndex].position) {
        const index = positions.indexOf(element);
        positions.splice(index, 1);
      }
    }

    this.selectedPositionSelectIndex = positions.indexOf(
      this.bingoFieldEditor.bingoField.cells[this.bingoFieldEditor.selectedCellIndex].position
    );

    return positions;
  }

  addCell() {
    let entryNumber = this.bingoFieldEditor.bingoField.cells.length + 1;
    let cell: BingoCell = new BingoCell(
      "Entry " + entryNumber,
      "<p class='ql-align-center'>Entry " + entryNumber + "</p>",
      BingoCellPositions.Random
    );
    this.bingoFieldEditor.bingoField.cells.push(cell);
    const index = this.bingoFieldEditor.lastIndex();

    //this.saveText();

    this.changeSelectedCell(index);

    //this.setText();
  }

  onSelectedCellChanged(event: any) {
    debugger;
    this.changeSelectedCell(event.target.value);
  }

  changeSelectedCell(newIndex: number) {
    const index: number = newIndex;

    this.bingoFieldEditor.selectedCellIndex = index;
    this.bingoFieldEditor.bingoField.cells[this.bingoFieldEditor.selectedCellIndex] =
      this.bingoFieldEditor.bingoField.cells[index];
  }

  changePosition(event: any) {
    let newPosition: BingoCellPositions =
      BingoFieldEditor.STATIC_BINGO_CELL_POSITIONS[
        BingoFieldEditor.STATIC_BINGO_CELL_POSITIONS.indexOf(event.target.value)
      ];
    let oldPosition: BingoCellPositions =
      this.bingoFieldEditor.bingoField.cells[this.bingoFieldEditor.selectedCellIndex].position;

    this.bingoFieldEditor.bingoField.cells[this.bingoFieldEditor.selectedCellIndex].position = newPosition;

    if (oldPosition != BingoCellPositions.Random) {
      // Remove Old Index
      let oldIndex: number = this.bingoFieldEditor.bingoField.usedPositions.indexOf(oldPosition);
      this.bingoFieldEditor.bingoField.usedPositions.splice(oldIndex, 1);
    }

    if (newPosition != BingoCellPositions.Random) {
      this.bingoFieldEditor.bingoField.usedPositions.push(newPosition);
    }

    this.update();
  }
}
</script>

<style lang="scss">
.ql-editor,
.ql-toolbar {
  @apply border;
}
</style>
