import { writable } from "svelte/store";
import { browser } from "$app/env";

const storedConnected = browser ? localStorage.getItem("connected") : false;
export const connected = writable(storedConnected ?? true);
