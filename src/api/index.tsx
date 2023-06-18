import { request } from "./request"

interface InputLogin {
    username: String
    password: String
}

interface InputCreateNote {
    content: String
}

export const getCalls = async (offset: Number, limit: Number) => {
    return await request(`/calls?offset=${offset}&limit=${limit}`, "GET")
}

export const getCall = async (id: String) => {
    return await request(`/calls/${id}`, "GET")
}

export const getUser = async () => {
    return await request(`/me`, "GET")
}

export const login = async (input: InputLogin) => {
    return await request(`/auth/login`,"POST", input )
}

export const getGefreshToken = async () => {
    return await request(`/auth/refresh-token`,"POST")
}

export const createNote = async (id: String, input: InputCreateNote) => {
    return await request(`/calls/${id}/note`,"POST", input )
}

export const archive = async (id: String) => {
    return await request(`/calls/${id}/archive`,"PUT")
}

export const unarchive = async (id: String) => {
    return await request(`/calls/${id}/unarchive`,"PUT")
}