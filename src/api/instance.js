import axios from 'axios'

const usersInstance = axios.create({
     baseURL: process.env.REACT_APP_BASE_URL_USERS,
     headers: {
        "Content-Type" : "application/json"
     }
})

const productsInstance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL_PRODUCTS,
    headers: {
       "Content-Type" : "application/json"
    }
})

export { usersInstance, productsInstance}