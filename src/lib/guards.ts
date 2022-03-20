import { connected } from "$lib/stores";
import type { LoadOutput } from "@sveltejs/kit/types/internal";

let isConnected = false;
connected.subscribe((newConnected) => {
  isConnected = newConnected;
});
export async function authGuard(url: URL): Promise<LoadOutput> {
  if (
    isConnected &&
    (url.pathname === "/register" || url.pathname === "/login")
  ) {
    return { status: 302, redirect: "/" };
  } else if (
    !isConnected &&
    url.pathname !== "/register" &&
    url.pathname !== "/login"
  ) {
    return { status: 302, redirect: "/login" };
  }
  return {};
}

export default {
  authGuard,
};
