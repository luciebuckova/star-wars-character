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
  switch (number) {
    case 0:
      return "hover:bg-color-0";
    case 1:
      return "hover:bg-color-1";
    case 2:
      return "hover:bg-color-2";
    case 3:
      return "hover:bg-color-3";
    case 4:
      return "hover:bg-color-4";
    case 5:
      return "hover:bg-color-5";
    case 6:
      return "hover:bg-color-6";
    case 7:
      return "hover:bg-color-7";
    case 8:
      return "hover:bg-color-8";
    case 9:
      return "hover:bg-color-9";
    case 10:
      return "hover:bg-color-10";
    case 11:
      return "hover:bg-color-11";
    case 12:
      return "hover:bg-color-12";
    case 13:
      return "hover:bg-color-13";
    case 14:
      return "hover:bg-color-14";
    case 15:
      return "hover:bg-color-15";
    case 16:
      return "hover:bg-color-16";
    case 17:
      return "hover:bg-color-17";
    case 18:
      return "hover:bg-color-18";
    case 19:
      return "hover:bg-color-19";
    case 20:
      return "hover:bg-color-20";
    case 21:
      return "hover:bg-color-21";
    case 22:
      return "hover:bg-color-22";
    case 23:
      return "hover:bg-color-23";
    case 24:
      return "hover:bg-color-24";
    case 25:
      return "hover:bg-color-25";
    case 26:
      return "hover:bg-color-26";
    case 27:
      return "hover:bg-color-27";
    case 28:
      return "hover:bg-color-28";
    case 29:
      return "hover:bg-color-29";
    case 30:
      return "hover:bg-color-30";
    case 31:
      return "hover:bg-color-31";
    case 32:
      return "hover:bg-color-32";
    case 33:
      return "hover:bg-color-33";
    case 34:
      return "hover:bg-color-34";
    case 35:
      return "hover:bg-color-35";
    case 36:
      return "hover:bg-color-36";
    case 37:
      return "hover:bg-color-37";
    default:
      return "";
  }
}
