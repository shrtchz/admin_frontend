import axios from 'axios'

let authToken=localStorage.getItem('token')
let headers={
    Accept:'application/json',
    Authorization: `Bearer ${authToken}`
}
const authFetch=axios.create({
    // baseURL:'http://192.168.0.112:8000/api/admin-profile',
    baseURL:'https://shrtchz.pw/api/admin-profile',
    headers,
})

export default authFetch;