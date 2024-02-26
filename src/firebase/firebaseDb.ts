import {
  ref,
  get,
  getDatabase,
  set,
  update,
  remove,
  push,
  child,
} from 'firebase/database'
import { app } from './firebaseApp'

const db = getDatabase(app)
// connectDatabaseEmulator(db, 'localhost', 9000)

export const getFn = async (url: string = '') => {
  const data = await get(ref(db, url))
  if (!data.exists()) return Promise.reject('No data')
  return data.val()
}

export const setFn = async (url: string, payload: any) => {
  const res = await get(ref(db, url))
  if (res.exists())
    return Promise.reject('Data already exists at this location\ndb/' + url)

  try {
    const res = set(ref(db, url), payload)
    return res
  } catch (error) {
    return Promise.reject(error)
  }
}

export const deleteFn = async (url: string) => {
  try {
    // find if resource exists
    const exists = await getFn(url)
    if (!exists) {
      console.warn('Resource doesnt exist!')
      return
    }

    //delete
    await remove(ref(db, url))
    console.log('Resource deleted!')
  } catch (error) {
    throw new Error(`${error}`)
  }
}

// [IMPROVEMENT] remove any's from codebase
// export const updateMultipleFn = async (object: any) => {
//   /* No check for already existing data */
//   // const res = await get(ref(db, url))
//   // if (res.exists())
//   //   return Promise.reject('Data already exists at this location\ndb/' + url)

//   try {
//     const res = update(ref(db), object)
//     return res
//   } catch (error) {
//     return Promise.reject(error)
//   }
// }
// export const updateData = async (url: string, payload: any) => {
//   // ⚠ No checks
//   try {
//     const res = update(ref(db, url), payload)
//     return res
//   } catch (error) {
//     return Promise.reject(error)
//   }
// }

export const getKey = (url: string): string | undefined | null => {
  try {
    const key = push(child(ref(db), url)).key
    return key?.toString()
  } catch (error) {
    console.log(error)
    return undefined
  }
}
