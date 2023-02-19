import { writable } from 'svelte/store';

export const accountsStore = writable([]);
export const selectedAccount = writable(undefined);