import client from "./apiClient";

export const findUser = async (id: string | number): Promise<any> => {
  const { data } = await client.get(`/api/user/${id}`);
  return data;
};

export const searchUsers = async (params: any): Promise<any> => {
  const { data } = await client.get(`/api/users`, { params: params });
  return data;
};

export const pdfUsers = async (params: any): Promise<any> => {
  const { data } = await client.get(`/api/users/pdf`, { params: params });
  return data;
};

export const deleteUser = async (id: string | number): Promise<any> => {
  return await client.delete(`/api/user/${id}`);
};

export const updateUser = async (
  id: string | number,
  params: any
): Promise<any> => {
  return await client.put(`/api/user/${id}`, { params });
};

export const createUser = async (params: any): Promise<any> => {
  return await client.put(`/api/user`, { params });
};
