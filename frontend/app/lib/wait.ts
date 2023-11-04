export function wait(secs: number) {
  // wait for secs
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, secs * 1000);
  });
}