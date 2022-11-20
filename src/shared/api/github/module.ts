import type { GHPersonalData } from './model';

const BASE_URL = 'https://api.github.com'

export const getUserInfo = async (username: string): Promise<GHPersonalData> => {
  return fetch(`${BASE_URL}/users/${username}`)
    .then((res) => res.json())
}
