import axios from "axios";
export async function getResult(token: string) {
  const options = {
    method: "GET",
    url: `https://judge0-ce.p.rapidapi.com/submissions/${token}`,
    params: { base64_encoded: "true", fields: "*" },
    headers: {
      "x-rapidapi-key": "YOUR_KEY",
      "x-rapidapi-host": "judge0-ce.p.rapidapi.com",
    },
  };
  try {
    const { data } = await axios.request(options);

    return data.response;
  } catch (error) {
    console.log(error);
    return;
  }
}
