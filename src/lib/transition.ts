type NavigateFunction = (url: string) => Promise<void>;

let navigateFunction: NavigateFunction | null = null;

export function registerNavigate(fn: NavigateFunction) {
  navigateFunction = fn;
}

export function unregisterNavigate() {
  navigateFunction = null;
}

export async function navigate(url: string) {
  if (navigateFunction) {
    await navigateFunction(url);
  }
}
