import { customAxios, customAxiosWithAuth } from './api'

export async function getAllFoods() {
    const axios=customAxiosWithAuth()
    try {
        const response = await axios.get('/foods')
        return response.data
    } catch(err) {
        console.log(err.message)
    }
}

export async function createFood(food) {
    const axios=customAxiosWithAuth()
    try {
        console.log("Trying")
        console.log("food:",food)
        const response = await axios.post('/foods', food)
        
        console.log("res:", response)
        return response.data
    } catch(err) {
        console.log(err.message)
    }
}


export async function getFood(id) {
    const axios=customAxios()
    try {
        const response = await axios.get(`/foods/${id}`)
        return response.data
    } catch(err) {
        console.log(err.message)
    }
}

export async function updateFood(id, food) {
    const axios=customAxiosWithAuth()
    try {
        await axios.put(`/foods/${id}`, food)
    } catch(err) {
        console.log(err.message)
    }
}

export async function deleteFood(id) {
    const axios=customAxiosWithAuth()
    try {
        await axios.delete(`/foods/${id}`)
    } catch(err) {
        console.log(err.message)
    }
}

export async function deleteAllFood() {
    const axios=customAxiosWithAuth()
    try {
        await axios.delete(`/foods`)
    } catch(err) {
        console.log(err.message)
    }
}

