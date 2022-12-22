/* eslint-disable prefer-destructuring */
/* eslint-disable import/prefer-default-export */
import { defineStore } from 'pinia';
import type { GHPersonalData } from '../api';

interface State {
  github: {
    user: GHPersonalData | null,
  },
  mapbox: {
    geocode: any
    tile: any | null
  }
}

const useGlobalStore = defineStore('global', {
  state: (): State => ({
    github: {
      user: null,
    },
    mapbox: {
      geocode: {},
      tile: null,
    },
  }),
  actions: {
    setGithubUser(payload: GHPersonalData) {
      this.github.user = payload;
    },
    setMapboxGeocode(payload: any) {
      if (payload.features.length) {
        this.mapbox.geocode = payload.features[0];
      }
    },
    setMapboxTile(payload: any) {
      if (payload.features.length) {
        this.mapbox.tile = payload.features[0];
      }
    },
  },
  getters: {
    mapboxLocation(state): [number, number] | null {
      if ('center' in state.mapbox.geocode) {
        return state.mapbox.geocode.center;
      }
      return null;
    },
    mapboxTimezone(state): string {
      return state.mapbox.tile?.properties.TZID;
    },
  },
});

export { useGlobalStore };
