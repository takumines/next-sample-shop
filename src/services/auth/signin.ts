import { fetcher } from '@/utils'
import { ApiContext, User } from '@/types/data'

export type SigninParams = {
  username: string
  password: string
}

const signin = async (context: ApiContext, params: SigninParams): Promise<User> => {
  return await fetcher(`${context.apiRootUrl.replace(/\/$/g, '')}/auth/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(params),
  })
}

export default signin
