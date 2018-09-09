import axios from 'axios'

export function getAll () {
  return axios.get('/static/def.json')
}
