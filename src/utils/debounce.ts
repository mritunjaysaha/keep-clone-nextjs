export function debounce<T extends (...args: any[]) => void>(
  func: T,
  delay: number,
) {
  let timer: ReturnType<typeof setTimeout> | undefined;

  return function (this: unknown, ...args: Parameters<T>) {
    const that = this;

    clearTimeout(timer);

    timer = setTimeout(function () {
      func.apply(that, args);
    }, delay);
  };
}
