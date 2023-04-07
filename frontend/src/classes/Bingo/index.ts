export enum BingoCellPositions {
  Random = "Random",
  A1 = "A1",
  A2 = "A2",
  A3 = "A3",
  A4 = "A4",
  A5 = "A5",
  B1 = "B1",
  B2 = "B2",
  B3 = "B3",
  B4 = "B4",
  B5 = "B5",
  C1 = "C1",
  C2 = "C2",
  C3 = "C3",
  C4 = "C4",
  C5 = "C5",
  D1 = "D1",
  D2 = "D2",
  D3 = "D3",
  D4 = "D4",
  D5 = "D5",
  E1 = "E1",
  E2 = "E2",
  E3 = "E3",
  E4 = "E4",
  E5 = "E5",
}

export class BingoFieldEditor {
  /**
   * The underlying Bingofield this editor edits
   */
  bingoField: BingoField;

  /**
   * A completly unique id to identify this editor in the database
   */
  public uuid: string;
  /**
   * The index of the element that is currently edited in the editor.
   */
  public selectedCellIndex: number;
  /**
   * @deprecated because bingofields are not editable after they were publisehd
   */
  public password: string = Math.random().toString(36).slice(-8);

  /**
   * An array of all possible BingoCellPositions
   */
  public static readonly STATIC_BINGO_CELL_POSITIONS: BingoCellPositions[] = [
    BingoCellPositions.Random,
    BingoCellPositions.A1,
    BingoCellPositions.A2,
    BingoCellPositions.A3,
    BingoCellPositions.A4,
    BingoCellPositions.A5,
    BingoCellPositions.B1,
    BingoCellPositions.B2,
    BingoCellPositions.B3,
    BingoCellPositions.B4,
    BingoCellPositions.B5,
    BingoCellPositions.C1,
    BingoCellPositions.C2,
    BingoCellPositions.C3,
    BingoCellPositions.C4,
    BingoCellPositions.C5,
    BingoCellPositions.D1,
    BingoCellPositions.D2,
    BingoCellPositions.D3,
    BingoCellPositions.D4,
    BingoCellPositions.D5,
    BingoCellPositions.E1,
    BingoCellPositions.E2,
    BingoCellPositions.E3,
    BingoCellPositions.E4,
    BingoCellPositions.E5,
  ];

  public constructor() {
    this.bingoField = new BingoField(
      "New Bingo",
      "Entry 1",
      "<p class='ql-align-center'>Entry 1</p>",
      BingoCellPositions.Random
    );

    this.uuid = BingoFieldEditor.genUniqueId();
    this.selectedCellIndex = 0;
  }

  /**
   * @returns the index of the last added BingoCell
   */
  public lastIndex() {
    return this.bingoField.cells.length - 1;
  }

  /**
   * @returns a absolutely unique id
   */
  public static genUniqueId(): string {
    const dateStr = Date.now().toString(36); // convert num to base 36 and stringify

    const randomStr = Math.random().toString(36).substring(2, 8); // start at index 2 to skip decimal point

    return `${dateStr}-${randomStr}`;
  }

  /**
   * Creates a BingoFieldEditor object from a stringyfied json object
   * @param json a stringified json object
   * @returns the cast BingoFieldEditor
   */
  public static cast(json: any): BingoFieldEditor {
    let obj = null;
    if (typeof json == "string") {
      obj = JSON.parse(json);
    } else {
      obj = json;
    }

    const field: BingoFieldEditor = new BingoFieldEditor();
    field.bingoField.cells = obj.bingoField.cells;
    field.uuid = obj.uuid;
    field.bingoField.name = obj.bingoField.name;
    field.password = obj.password;
    return field;
  }

  /**
   *
   * @param obj
   * @returns
   */
  public static castFromDatabase(obj: any): BingoFieldEditor {
    const field: BingoFieldEditor = new BingoFieldEditor();
    field.bingoField = BingoField.castFromDatabase(obj.bingoField);
    field.uuid = obj.uuid;
    field.password = "";
    return field;
  }
}

export class BingoField {
  /**
   * An array of all BingoCells in this BinfoField
   */
  public cells: BingoCell[] = [];

  /**
   * The name of this BingoFiel
   */
  public name: string;

  /**
   * An array of all unique BingoCellPositions that are already occupied
   */
  public usedPositions: BingoCellPositions[] = [];

  public constructor(
    name: string,
    firstCellName: string,
    text: string,
    position: BingoCellPositions,
    checked: boolean = false
  ) {
    this.name = name;
    const cell = new BingoCell(firstCellName, text, position, checked);

    this.cells.push(cell);
  }

  public static castFromDatabase(json: string) {
    const obj = JSON.parse(json);
    const bingoField: BingoField = new BingoField(obj.name, "", "", BingoCellPositions.Random);
    bingoField.cells = obj.cells;
    return bingoField;
  }

  /**
   * Returns all BingoCells in this BingoField that do __not__ use the BingoCellPosition 'Random'
   * @returns an array of BingoCells
   */
  public getStaticCells() {
    const c: BingoCell[] = [];
    for (let i = 0; i < this.cells.length; i++) {
      if (this.cells[i].position != BingoCellPositions.Random) c.push(this.cells[i]);
    }
    return c;
  }

  /**
   * Returns all BingoCells in this BingoField that __do__ use the BingoCellPosition 'Random'
   * @returns an array of BingoCells
   */
  public getRandomCells() {
    const c: BingoCell[] = [];
    for (let i = 0; i < this.cells.length; i++) {
      if (this.cells[i].position == BingoCellPositions.Random) c.push(this.cells[i]);
    }
    return c;
  }
}

export class BingoCell {
  public name: string = "";
  public text: string = "";
  public checked: boolean = false;
  public position: BingoCellPositions = BingoCellPositions.Random;
  public cellId: string;

  public constructor(name: string, text: string, position: BingoCellPositions, checked: boolean = false) {
    this.name = name;
    this.text = text;
    this.position = position;
    this.checked = checked;
    this.cellId = BingoFieldEditor.genUniqueId();
  }
}
