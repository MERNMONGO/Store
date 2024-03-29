import { customAxios, customAxiosWithAuth } from './api'

export async function userLogin(user) {
    const axios = customAxios()
    try {
        const response = await axios.post('/auth/login', user)
        return response.data.token
    } catch(err) {
        console.log(err)
        alert(err.response?.data?.error)
    }
}

export async function userRegister(user) {
    const axios = customAxios()
    console.log("userRegister")
    try {
        const response = await axios.post('/auth/register', user)
        console.log("response")
        return response.data.token
    } catch(err) {
        console.log(err)
        alert(err.response?.data?.error)
    }
}

export async function userInfo() {
    const axios = customAxiosWithAuth()
    try {
        const response = await axios.get('/users')
        return response.data
    } catch(err) {
        console.log(err)
        localStorage.removeItem("token")
        alert(err.response?.data?.error)
        return {}
    }
}

