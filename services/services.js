import axios from 'axios'

const service = axios.create({
  baseURL: 'https://reqres.in/api'
})

export const fetchUsers = () => {
  fetch(
    'https://reqres.in/api/users',
    // { method: 'post' },
    // headers: {}
  )
    .then((res) => {
      // if(res.status !== 200){

      // }
      res.json().then((data) => console.log(data))
    })
    .catch((err) => {

    })
}

// export const fetchUsersAxios = (url) => {
//   let response = {}
//   service.get(url)
//     .then(res => {
//       response = res.data
//     })
//     .catch(err => {
//       console.log(err)
//     })
//   return response
// }

export const fetchUsersAxios = async (url) => {
  let users = {}
  try {
    users = await service.get('/users')
  } catch(err) {
    console.log(err)
  }
  return users.data
}
