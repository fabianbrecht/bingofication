import { BingoFieldEditor } from "../Bingo";

export class Cookies {
  private static cookieIdentBingoField = "bingo_field_editor";

  public static saveBingoFieldEditor(bingoFieldEditor: BingoFieldEditor) {
    const date = new Date();
    const value = JSON.stringify(bingoFieldEditor);
    const name = this.cookieIdentBingoField + "_" + bingoFieldEditor.uuid;

    // Set it expire in 3 years
    date.setTime(date.getTime() + 3 * 365 * 24 * 60 * 60 * 1000);

    // Set it
    document.cookie =
      name +
      "=" +
      encodeURIComponent(value) +
      "; expires=" +
      date.toUTCString() +
      "; path=/;";
  }

  public static getBingoFieldEditor(uuid: string): BingoFieldEditor {
    const name = this.cookieIdentBingoField + "_" + uuid + "=";
    const cookie = document.cookie;
    const ca = cookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        const decoded = decodeURIComponent(c.substring(name.length, c.length));
        const b: BingoFieldEditor = BingoFieldEditor.cast(decoded);
        return b;
      }
    }

    const b = new BingoFieldEditor();
    b.uuid = uuid;
    return b;
  }

  public static checkUID(uuid: string): boolean {
    const name = this.cookieIdentBingoField + "_" + uuid;
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      // I c start with bingoField-
      if (c.indexOf(name) == 0) {
        return true;
      }
    }
    return false;
  }

  public static removeCookie(uuid: string) {
    const name = this.cookieIdentBingoField + "_" + uuid;
    document.cookie = name + "=; Max-Age=-99999999;";
  }

  // public static getAllUIDs() {
  //     const name = this.cookieIdent + '_';
  //     const decodedCookie = decodeURIComponent(document.cookie);
  //     const ca = decodedCookie.split(';');
  //     const uuids: string[] = [];
  //     for(let i = 0; i <ca.length; i++) {
  //         let c = ca[i];
  //         while (c.charAt(0) == ' ') {
  //             c = c.substring(1);
  //         }
  //         // I c start with bingoField-
  //         if (c.indexOf(name) == 0) {
  //             uuids.push(c.substring(name.length, c.indexOf('=')));
  //         }
  //     }
  //     return uuids;
  // }

  // public static getAllEditors(): BingoFieldEditor[] {
  //     const name = this.cookieIdent + '_';
  //     const decodedCookie = decodeURIComponent(document.cookie);
  //     const ca = decodedCookie.split(';');
  //     const fields: BingoFieldEditor[] = [];
  //     for(let i = 0; i <ca.length; i++) {
  //         let c = ca[i];
  //         while (c.charAt(0) == ' ') {
  //             c = c.substring(1);
  //         }
  //         // I c start with bingoField-
  //         if (c.indexOf(name) == 0) {
  //             const unparsedField = c.substring(c.indexOf('=')+1, c.length);
  //             const field: BingoFieldEditor = JSON.parse(unparsedField);
  //             fields.push(field);
  //         }
  //     }
  //     return fields;
  // }
}
