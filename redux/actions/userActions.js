import axios from 'axios'

const service = axios.create({
  baseURL: 'https://reqres.in/api'
})

export const fetchUsersAxios = async (url) => {
  let users = {}
  try {
    users = await service.get('/users')
  } catch(err) {
    console.log(err)
  }
  return users.data
}