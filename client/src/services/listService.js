import { httpService } from './http-service.js'

export const listService = {
  query,
  getById,
  save,
  removeList,
}

async function query() {
  try {
    return await httpService.get('list')
  } catch (err) {
    console.log('Cannot get lists', err)
  }
}

async function getById(listId) {
  try {
    return await httpService.get(`list/${listId}`)
  } catch (err) {
    console.log(err)
    console.error('Something went wrong try again later')
  }
}

async function save(list) {
  try {
    const savedList = list._id
      ? await axios.put('list', list)
      : await axios.post('list', list)
    return savedList.data
  } catch {
    console.log(err)
    throw new Error('Failed to save list, try again')
  }
}

async function removeList(listId) {
  try {
    return httpService.delete(`list/${listId}`)
  } catch (err) {
    console.log(err)
    throw new Error('Failed to delete list, try again')
  }
}