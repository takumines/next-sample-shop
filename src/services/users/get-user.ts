import { ApiContext } from '@/types/data'

export type GetUserParams = {
  id: number
}

/**
 *
 * @param {ApiContext} context
 * @param {number} id
 * @returns {Promise<User>}
 */
const getUser = async (context: ApiContext, { id }: GetUserParams): Promise<Response> => {
  return await fetch(`${context.apiRootUrl.replace(/\/$/g, '')}/users/${id}`, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })
}

export default getUser
