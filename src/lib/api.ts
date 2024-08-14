import { ITask } from "../types/Task";

const API = "http://localhost:8989/";

const myHeaders = new Headers();
myHeaders.append("Accept", "application/json");
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Authorization", "******");
myHeaders.append("Access-Control-Allow-Origin", "http://localhost:3000/");


const endpoint = (path: string): string => {
  return `${API}${path}`;
};
const get = async (path: string): Promise<any> => {
  return fetch(endpoint(path)).then((res) => res.json());
};

const post = async (path: string, data: any): Promise<any> => {
  return fetch(endpoint(path), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((res) => res.json());
};

const patch = async (path: string, data: any): Promise<any> => {
  return fetch(endpoint(path), {
    method: "PATCH",
    headers: myHeaders,
    
    body: JSON.stringify(data),
  }).then((res) => res.json());
};

const Delete = async (path: string): Promise<any> => {
  return fetch(endpoint(path), {
    method: "DELETE",
    headers: myHeaders,
  }).then((res) => res.json());
};

export const getTasks = async () => {
  return get("api/tasks");
};

export const getTask = async (id: string) => {
  return get(`api/tasks/${id}`);
};

export const updateTask = async (id: string,data: ITask) => {
  return patch(`api/tasks/${id}`,data);
};

export const createTask = async (data: ITask) => {
  return post("api/tasks", data);
};

export const deleteTask = async (id: string) => {
  return Delete(`api/tasks/${id}`);
};