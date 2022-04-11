import { ReplaceInDoc } from "../../modules/replace/replaceInDoc";

export class Client {
  replaceInDoc(
    pathFile: string,
    nameFile: string,
    variables: object,
  ){
    const op = new ReplaceInDoc;
    return op.replaceInDoc(pathFile, nameFile, variables);;
  }
}
