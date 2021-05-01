// store.js
import { writable } from 'svelte/store';

export const formState = writable({
  slo: '99.99',
  requestsPerSecond: '1000000',
  burnRateInDays: '30',
});

export const chartState = writable({});
