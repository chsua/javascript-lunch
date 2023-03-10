export const $ = (element: string) => document.querySelector(element);

export const ControlDom = {
  showClose(elem: HTMLElement, message: string) {
    elem?.classList.toggle(message);
  },
};
