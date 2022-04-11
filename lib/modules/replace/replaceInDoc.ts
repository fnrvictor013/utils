// const fs = require('fs');
// const path = require('path');

import fs from 'fs';
import path from 'path';

export class ReplaceInDoc {
  private response: any;

  async replaceInDoc(
    pathFile: string,
    nameFile: string,
    variables: object,
  ) {
    // console.log(pathFile, nameFile, variables);
    let response: any;
    const fileRead = fs.readFileSync(path.resolve(pathFile)+nameFile);
    let fileDecode = fileRead.toString().trim();
    Object.keys(variables).map((e,i) => {
      const regex = new RegExp(`{{\\s*${e}\\s*}}`, 'gi');
      if (!!fileDecode.match(regex)) {
        fileDecode = fileDecode.replace(regex, String(Object.values(variables)[i]));
      }
    });

    return fileDecode;
  }

}