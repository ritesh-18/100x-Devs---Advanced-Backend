import * as dotenv from "dotenv";
dotenv.config();
export function options(code: any, input = null) {
  const option = {
    method: "POST",
    url: "https://judge0-ce.p.rapidapi.com/submissions",
    params: {
      base64_encoded: "true",
      wait: "false",
      fields: "*",
    },
    headers: {
      "x-rapidapi-key": process.env.RAPIDAPI_KEY,
      "x-rapidapi-host": "judge0-ce.p.rapidapi.com",
      "Content-Type": "application/json",
    },
    data: {
      language_id: 52,
      source_code: code,
      stdin: input,
    },
  };
  return option;
}
