import axios from "axios"
import { Activity } from "../types/Activity";

const ACTIVITY_ENDPOINT = "https://fastapi-production-c9a2.up.railway.app/activity"

// getAllActivity will get all activities
export const getAllActivity = async () => {
    return axios.get(`${ACTIVITY_ENDPOINT}`);
}

// getActivityById will get all activities with a given id
export const getActivityById = async (id: string) => {
    return axios.get(`${ACTIVITY_ENDPOINT}/${id}`);
}

export const getActivitySubCategory = async (subCategory: string) => {
    return axios.get(`${ACTIVITY_ENDPOINT}/subcategory/${subCategory}`);
}

export const getUsersInActivity = async (id: string) => {
    return axios.get(`${ACTIVITY_ENDPOINT}/${id}/userlist`);
}

export const createActivity = async (data: Activity) => {
    return axios.post(`${ACTIVITY_ENDPOINT}`, data);
}

export const joinActivity = async (activityId: string, userId: string) => {
    const body = {
        id: 0,
        activityid: activityId,
        userid: userId, // Temporary
    }
    return axios.post(`${ACTIVITY_ENDPOINT}/join`, body);
}

export const leaveActivity = async (activityId: string, userId: string) => {
    return axios.delete(`${ACTIVITY_ENDPOINT}/deleteuseractivity/${activityId}/${userId}`);
}
