import * as axios from "axios";

const api = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: { "API-KEY": "612fccf7-e310-4957-b1c8-ba80363081b9" }
})

export const usersApi = {
  async getUsers(page, count) {
    const response = await api.get(`users?page=${page}&count=${count}`)
    return response.data
  }
}

export const followApi = {
  async follow(id) {
    const response = await api.post(`follow/${id}`)
    return response.data
  },
  async unfollow(id) {
    const response = await api.delete(`follow/${id}`)
    return response.data
  }
}

export const authApi = {
  async auth() {
    const response = await api.get("auth/me")
    return response.data
  },
  async login(email, password, rememberMe = false, captchaUrl = null) {
    const response = await api.post("auth/login", { email, password, rememberMe, captchaUrl })
    return response.data
  },
  async logout() {
    const response = await api.delete("auth/login")
    return response.data
  }
}

export const securityApi = {
  async getCaptcha() {
    const response = await api.get("get-captcha-url")
    return response.data
  }
}

export const profileApi = {
  async getProfile(id) {
    const response = await api.get(`profile/${id}`)
    return response.data
  },
  async getStatus(id) {
    const response = await api.get(`profile/status/${id}`)
    return response.data
  },
  async updateStatus(status) {
    const response = await api.put("profile/status", { status })
    return response.data
  },
  async putPhoto(photo) {
    const formData = new FormData()
    formData.append("image", photo)
    const response = await api.put("profile/photo", formData, { 
      headers: { "Content-Type": "multipart/form-data" } 
    })
    return response.data
  }
}  