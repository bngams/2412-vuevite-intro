import { ApiResponse } from "../models/api-response";

export class RestService<T> {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  private buildQueryString(params: Record<string, any>): string {
    return Object.entries(params)
      .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
      .join('&');
  }

  async getAll(queryParams: Record<string, any> = {}, dataKey: string): Promise<T[]> {
    const queryString = `?${this.buildQueryString(queryParams)}`;
    const response = await fetch(`${this.baseUrl}${queryString}`);
    if (!response.ok) throw new Error(`Error fetching data: ${response.statusText}`);

    const jsonResponse: ApiResponse<T> = await response.json();
    if (!jsonResponse[dataKey]) {
      throw new Error(`Response does not contain the expected data key: ${dataKey}`);
    }

    return jsonResponse[dataKey];
  }

  async getById(id: number | string): Promise<T> {
    const response = await fetch(`${this.baseUrl}/${id}`);
    if (!response.ok) throw new Error(`Error fetching data: ${response.statusText}`);
    return await response.json();
  }

  async create(data: Partial<T>): Promise<T> {
    const response = await fetch(`${this.baseUrl}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error(`Error creating resource: ${response.statusText}`);
    return await response.json();
  }

  async update(id: number | string, data: Partial<T>): Promise<T> {
    const response = await fetch(`${this.baseUrl}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error(`Error updating resource: ${response.statusText}`);
    return await response.json();
  }

  async delete(id: number | string): Promise<void> {
    const response = await fetch(`${this.baseUrl}/${id}`, { method: 'DELETE' });
    if (!response.ok) throw new Error(`Error deleting resource: ${response.statusText}`);
  }
}
