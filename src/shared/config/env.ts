const getEnvVar = (key: string) => {
  if (import.meta.env[key] === undefined) {
    throw new Error(`Env variable ${key} is required`);
  }
  return import.meta.env[key] || '';
};

export const GITHUB_USERNAME = getEnvVar('VITE_GITHUB_USERNAME');

export const TELEGRAM_USERNAME = getEnvVar('VITE_TELEGRAM_USERNAME');

export const MAPBOX_ACCESS_TOKEN = getEnvVar('VITE_MAPBOX_ACCESS_TOKEN');

export const isDevEnv = getEnvVar('DEV'); // Vite feature

export const isProdEnv = getEnvVar('PROD'); // Vite feature
