import axios from "axios";

export const TestingService = () => {
  return axios.get("http://localhost:3005/phiblockendpoint");
};
