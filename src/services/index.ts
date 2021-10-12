import axios, { AxiosResponse } from "axios";

const publicUrl = "https://my-json-server.typicode.com";

async function get(servicesUrl: string): Promise<AxiosResponse> {
  const url = new URL(servicesUrl, publicUrl);
  return await axios.get(url.href);
}

export { get };