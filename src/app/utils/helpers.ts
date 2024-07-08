export function heightToMetres(height: number) {
  return height / 100;
}

export function formatDate(inputDate: string) {
  const date = new Date(inputDate);

  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  return `${day}-${month}-${year}`;
}

export function generateHoverClass(number: number) {
  return `hover:bg-color-${number}`;
}
