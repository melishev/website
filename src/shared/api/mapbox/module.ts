/* eslint-disable arrow-body-style */
import { MAPBOX_ACCESS_TOKEN } from '@/shared/config';

const BASE_URL = 'https://api.mapbox.com';
const ACCESS_TOKEN = `access_token=${MAPBOX_ACCESS_TOKEN}`;

export const getGeocoding = async (search_text: string): Promise<any> => {
  return fetch(`${BASE_URL}/geocoding/v5/mapbox.places/${search_text}.json?${ACCESS_TOKEN}`);
};

export const getTilequery = async (lon: number, lat: number): Promise<any> => {
  return fetch(`${BASE_URL}/v4/examples.4ze9z6tv/tilequery/${lon},${lat}.json?${ACCESS_TOKEN}`);
};
