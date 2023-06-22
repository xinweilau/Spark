import axios from "axios"
import { User } from "../types/User";

const USER_ENDPOINT = "https://fastapi-production-c9a2.up.railway.app/user"

export const getAllUsers = async () => {
    return axios.get(`${USER_ENDPOINT}/topusers`);
}

export const getUserById = async (id: string) => {
    return axios.get(`${USER_ENDPOINT}/${id}`);
}

export const getUserRegisteredActivity = async (id: string) => {
    return axios.get(`${USER_ENDPOINT}/${id}/activitylist`);
}

export const createNewUser = async (data: User) => {
    return axios.post(`${USER_ENDPOINT}/create`, data);
}

export const updateUser = async (data: User) => {
    return axios.put(`${USER_ENDPOINT}/update`, data);
}
