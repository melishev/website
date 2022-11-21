/* eslint-disable import/prefer-default-export */
import type { GHPersonalData } from './model';

const BASE_URL = 'https://api.github.com';

// eslint-disable-next-line arrow-body-style
export const getUserInfo = async (username: string): Promise<GHPersonalData> => {
  return fetch(`${BASE_URL}/users/${username}`)
    .then((res) => res.json());
};
