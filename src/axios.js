import axios from 'axios'
const instance = axios.create({
    baseURL:'https://8001-ef849cb9-7e6d-4459-ab5b-d3b35c84bf2c.ws-us02.gitpod.io/'
})
export default instance;