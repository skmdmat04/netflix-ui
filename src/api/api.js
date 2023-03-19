import axios from 'axios'

const url='https://netflix-api-vf7c.onrender.com';

export const createUser=async(details)=>{
    return await axios.post(`${url}/user`,details)
}
export const login=async(details)=>{
    return await axios.get(`${url}/login`,details)
}