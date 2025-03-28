export const randomArray = [...Array(Math.floor(Math.random() * 20))].map(() =>
  Math.floor(Math.random() * 100)
);

export const dataDropdownMock = (n = 10) =>
  [...Array(n)].map((v, i) => ({
    label: i + 1,
    value: i + 1,
  }));

export function changeBg(elm, imgPath) {
  if (!document) return;
  document.querySelectorAll(elm)[0].style.backgroundImage =
    "url('" + imgPath + "')";
}
