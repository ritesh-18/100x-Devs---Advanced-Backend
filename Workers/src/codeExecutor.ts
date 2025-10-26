import axios from "axios";
import { options } from "./options";

export async function runCodeWithJudge0(
  sourceCode: string,
  input = null,
  expectedOutput = null
) {
  console.log("inside exec-1");
  try {
    const optionsVal = options(sourceCode);
    const response = await axios.request(optionsVal);
    console.log("inside exec-2");
    return response.data;
  } catch (error) {
    console.log(error);
    return;
  }
}
