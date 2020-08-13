import axios, { AxiosPromise } from "axios";

export class Sync<T extends { id?: number }> {
  constructor(private baseUrl: string) {}

  fetch(id: number): AxiosPromise<T> {
    return axios.get(`${this.baseUrl}/${id}`);
  }

  save(data: T): AxiosPromise<T> {
    if (data["id"]) {
      return axios.patch(`${this.baseUrl}/${data.id}`, data);
    }

    return axios.post(this.baseUrl, data);
  }
}
