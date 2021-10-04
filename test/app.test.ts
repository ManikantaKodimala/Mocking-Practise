import { isSusscefullCall } from "../src/app";
import axios, { AxiosResponse } from "axios";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;
const mockedResponse: AxiosResponse = {
  data: {
    name: "Henry",
  },
  status: 200,
  statusText: "OK",
  headers: {},
  config: {},
};
describe("testing the status of api call", () => {
  test("if status is success it return true", async () => {
    let url = "https://dog.ceo/api/breeds/image/random";
    let data = { status: "success", message: "hello" };
    let expected = true;
    mockedResponse.data = data;
    mockedAxios.get.mockResolvedValue(mockedResponse);

    let reieved = await isSusscefullCall(url);
    expect(reieved).toBe(expected);
    expect(axios.get).toHaveBeenCalledTimes(1);
  });

  test("if status is error it return false", async () => {
    let url = "https://dog.ceo/api/breeds/image/random";
    let data = { status: "error", message: "hello" };
    let expected = false;
    mockedResponse.data = data;
    mockedAxios.get.mockResolvedValue(mockedResponse);

    let reieved = await isSusscefullCall(url);
    expect(reieved).toBe(expected);
    expect(axios.get).toHaveBeenCalledTimes(2);
  });
});
