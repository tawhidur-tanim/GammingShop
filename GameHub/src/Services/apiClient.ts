import axios, { CanceledError } from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "7c5e9b86844b4459bedf714a4d0dd845",
  },
});

export { CanceledError };
