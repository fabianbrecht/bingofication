<template>
  <div class="container flex justify-center">
    <div class="max-w-5xl flex-grow py-6 mt-4 mb-4">
      <table id="bingoField">
        <tbody>
          <tr>
            <th class="w-min"><div></div></th>
            <th class="py-2"><div class="content">A</div></th>
            <th class="py-2"><div class="content">B</div></th>
            <th class="py-2"><div class="content">C</div></th>
            <th class="py-2"><div class="content">D</div></th>
            <th class="py-2"><div class="content">E</div></th>
          </tr>
          <tr>
            <th class="w-min">
              <div class="ms-auto w-min px-4">1</div>
            </th>
            <td class="border-2" @click="checkCell($event)">
              <div id="A1" class="content">A1</div>
              <div class="absolute w-full h-full checkbox hidden">
                <close-icon class="m-auto icon-full"></close-icon>
              </div>
            </td>
            <td class="border-2" @click="checkCell($event)">
              <div id="B1" class="content">B1</div>
              <div class="absolute w-full h-full checkbox hidden">
                <close-icon class="m-auto icon-full"></close-icon>
              </div>
            </td>
            <td class="border-2" @click="checkCell($event)">
              <div id="C1" class="content">C1</div>
              <div class="absolute w-full h-full checkbox hidden">
                <close-icon class="m-auto icon-full"></close-icon>
              </div>
            </td>
            <td class="border-2" @click="checkCell($event)">
              <div id="D1" class="content">D1</div>
              <div class="absolute w-full h-full checkbox hidden">
                <close-icon class="m-auto icon-full"></close-icon>
              </div>
            </td>
            <td class="border-2" @click="checkCell($event)">
              <div id="E1" class="content">E1</div>
              <div class="absolute w-full h-full checkbox hidden">
                <close-icon class="m-auto icon-full"></close-icon>
              </div>
            </td>
          </tr>
          <tr>
            <th class="w-min">
              <div class="ms-auto w-min px-4">2</div>
            </th>
            <td class="border-2" @click="checkCell($event)">
              <div id="A2" class="content">A2</div>
              <div class="absolute w-full h-full checkbox hidden">
                <close-icon class="m-auto icon-full"></close-icon>
              </div>
            </td>
            <td class="border-2" @click="checkCell($event)">
              <div id="B2" class="content">B2</div>
              <div class="absolute w-full h-full checkbox hidden">
                <close-icon class="m-auto icon-full"></close-icon>
              </div>
            </td>
            <td class="border-2" @click="checkCell($event)">
              <div id="C2" class="content">C2</div>
              <div class="absolute w-full h-full checkbox hidden">
                <close-icon class="m-auto icon-full"></close-icon>
              </div>
            </td>
            <td class="border-2" @click="checkCell($event)">
              <div id="D2" class="content">D2</div>
              <div class="absolute w-full h-full checkbox hidden">
                <close-icon class="m-auto icon-full"></close-icon>
              </div>
            </td>
            <td class="border-2" @click="checkCell($event)">
              <div id="E2" class="content">E2</div>
              <div class="absolute w-full h-full checkbox hidden">
                <close-icon class="m-auto icon-full"></close-icon>
              </div>
            </td>
          </tr>
          <tr>
            <th class="w-min">
              <div class="ms-auto w-min px-4">3</div>
            </th>
            <td class="border-2" @click="checkCell($event)">
              <div id="A3" class="content">A3</div>
              <div class="absolute w-full h-full checkbox hidden">
                <close-icon class="m-auto icon-full"></close-icon>
              </div>
            </td>
            <td class="border-2" @click="checkCell($event)">
              <div id="B3" class="content">B3</div>
              <div class="absolute w-full h-full checkbox hidden">
                <close-icon class="m-auto icon-full"></close-icon>
              </div>
            </td>
            <td class="border-2" @click="checkCell($event)">
              <div id="C3" class="content">C3</div>
              <div class="absolute w-full h-full checkbox hidden">
                <close-icon class="m-auto icon-full"></close-icon>
              </div>
            </td>
            <td class="border-2" @click="checkCell($event)">
              <div id="D3" class="content">D3</div>
              <div class="absolute w-full h-full checkbox hidden">
                <close-icon class="m-auto icon-full"></close-icon>
              </div>
            </td>
            <td class="border-2" @click="checkCell($event)">
              <div id="E3" class="content">E3</div>
              <div class="absolute w-full h-full checkbox hidden">
                <close-icon class="m-auto icon-full"></close-icon>
              </div>
            </td>
          </tr>
          <tr>
            <th class="w-min">
              <div class="ms-auto w-min px-4">4</div>
            </th>
            <td class="border-2" @click="checkCell($event)">
              <div id="A4" class="content">A4</div>
              <div class="absolute w-full h-full checkbox hidden">
                <close-icon class="m-auto icon-full"></close-icon>
              </div>
            </td>
            <td class="border-2" @click="checkCell($event)">
              <div id="B4" class="content">B4</div>
              <div class="absolute w-full h-full checkbox hidden">
                <close-icon class="m-auto icon-full"></close-icon>
              </div>
            </td>
            <td class="border-2" @click="checkCell($event)">
              <div id="C4" class="content">C4</div>
              <div class="absolute w-full h-full checkbox hidden">
                <close-icon class="m-auto icon-full"></close-icon>
              </div>
            </td>
            <td class="border-2" @click="checkCell($event)">
              <div id="D4" class="content">D4</div>
              <div class="absolute w-full h-full checkbox hidden">
                <close-icon class="m-auto icon-full"></close-icon>
              </div>
            </td>
            <td class="border-2" @click="checkCell($event)">
              <div id="E4" class="content">E4</div>
              <div class="absolute w-full h-full checkbox hidden">
                <close-icon class="m-auto icon-full"></close-icon>
              </div>
            </td>
          </tr>
          <tr>
            <th class="w-min">
              <div class="ms-auto w-min px-4">5</div>
            </th>
            <td class="border-2" @click="checkCell($event)">
              <div id="A5" class="content">A5</div>
              <div class="absolute w-full h-full checkbox hidden">
                <close-icon class="m-auto icon-full"></close-icon>
              </div>
            </td>
            <td class="border-2" @click="checkCell($event)">
              <div id="B5" class="content">B5</div>
              <div class="absolute w-full h-full checkbox hidden">
                <close-icon class="m-auto icon-full"></close-icon>
              </div>
            </td>
            <td class="border-2" @click="checkCell($event)">
              <div id="C5" class="content">C5</div>
              <div class="absolute w-full h-full checkbox hidden">
                <close-icon class="m-auto icon-full"></close-icon>
              </div>
            </td>
            <td class="border-2" @click="checkCell($event)">
              <div id="D5" class="content">D5</div>
              <div class="absolute w-full h-full checkbox hidden">
                <close-icon class="m-auto icon-full"></close-icon>
              </div>
            </td>
            <td class="border-2" @click="checkCell($event)">
              <div id="E5" class="content">E5</div>
              <div class="absolute w-full h-full checkbox hidden">
                <close-icon class="m-auto icon-full"></close-icon>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { BingoCell, BingoField } from "@/classes/Bingo";
import { BingoFieldEditor } from "@/classes/Bingo";
import { BingoCellPositions } from "@/classes/Bingo";
import { Options, Vue } from "vue-class-component";
import CloseIcon from "vue-material-design-icons/Close.vue";

@Options({
  components: {
    CloseIcon,
  },
  props: {
    bingoField: BingoField,
    selectedCellId: String,
  },
})
export default class BingoFieldComponent extends Vue {
  bingoField!: BingoField;
  selectedCellId!: string;

  mounted() {
    this.fillBingoField();
  }

  checkCell($event: MouseEvent) {
    let el = ($event.currentTarget as HTMLElement).querySelector(".content");
    if (el !== null) {
      // el = el as HTMLElement;
      const uid = el.getAttribute("unique-id");
      this.bingoField.cells.forEach((c) => {
        if (c.cellId === uid) {
          c.checked = !c.checked;
          c.checked ? el?.classList.add("checked") : el?.classList.remove("checked");
        }
      });
    }
  }

  fillBingoField() {
    this.clearField();
    var usedPositions: BingoCellPositions[] = [];

    var staticCells = this.bingoField.getStaticCells();
    for (let i = 0; i < staticCells.length; i++) {
      usedPositions.push(staticCells[i].position);
    }

    for (let i = 0; i < staticCells.length; i++) {
      const position: BingoCellPositions = staticCells[i].position;
      const element: HTMLElement = document.getElementById(position)!;
      element.innerHTML = staticCells[i].text;
      element.setAttribute("unique-id", staticCells[i].cellId);
      staticCells[i].checked ? element.classList.add("checked") : element.classList.remove("checked");
      //if (staticCells[i].cellId === this.selectedCellId) element.classList.add("selected");
    }

    var randomCells = this.bingoField.getRandomCells();
    for (let i = 0; i < randomCells.length; i++) {
      const availablePositions: BingoCellPositions[] = this.getAvailablePositions(usedPositions);
      if (availablePositions.length > 0) {
        const position: BingoCellPositions = availablePositions[Math.floor(Math.random() * availablePositions.length)];
        usedPositions.push(position);
        const element: HTMLElement = document.getElementById(position)!;
        element.innerHTML = randomCells[i].text;
        element.setAttribute("unique-id", randomCells[i].cellId);
        randomCells[i].checked ? element.classList.add("checked") : element.classList.remove("checked");
        //if (randomCells[i].cellId === this.selectedCellId) element.classList.add("selected");
      }
    }
  }

  clearField() {
    let positions: BingoCellPositions[] = BingoFieldEditor.STATIC_BINGO_CELL_POSITIONS.slice(1);

    for (let i = 0; i < positions.length; i++) {
      const element: HTMLElement = document.getElementById(positions[i])!;
      element.textContent = positions[i];
      element.classList.remove("selected");
    }
  }

  getAvailablePositions(usedPositions: BingoCellPositions[]) {
    let positions: BingoCellPositions[] = BingoFieldEditor.STATIC_BINGO_CELL_POSITIONS.slice(1);

    for (let i = 0; i < usedPositions.length; i++) {
      const element = usedPositions[i];
      const index = positions.indexOf(element);
      positions.splice(index, 1);
    }

    return positions;
  }
}
</script>

<style lang="scss">
.checked + .checkbox {
  display: flex;
}

table#bingoField {
  width: 90%;
}
#bingoField td {
  cursor: pointer;
  width: 18%;
  position: relative;
}
#bingoField th.top {
  height: 10%;
  position: relative;
}
#bingoField th.left {
  width: 10%;
  position: relative;
}

#bingoField td:after {
  content: "";
  display: block;
  margin-top: 100%;
}
#bingoField td .content {
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  &.selected {
    @apply border-2;
    @apply border-blue-400;
  }

  & p {
    text-align: center;
  }
}

body.dark-mode .ql-formats path,
body.dark-mode .ql-formats line {
  color: var(--dm-base-text-color);
  stroke: var(--dm-base-text-color);
}

#bingoField td .content .ql-size-small {
  font-size: 0.75em !important;
}

#bingoField td .content .ql-size-large {
  font-size: 1.5em;
}

#bingoField td .content .ql-size-huge {
  font-size: 2.5em;
}

#bingoField td .content .ql-font-monospace {
  font-family: Monaco, Courier New, monospace;
}

#bingoField td .content .ql-font-serif {
  font-family: Georgia, Times New Roman, serif;
}

#bingoField td .content .ql-align-center {
  text-align: center;
}

#bingoField td .content .ql-align-right {
  text-align: right;
}
</style>
