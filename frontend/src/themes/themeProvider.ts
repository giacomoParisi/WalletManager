import { BASIC, LIGHT, DARK } from "./";
import { Themes } from "./themes";

export default function getTheme(theme: Themes) {
  switch (theme) {
    case Themes.LIGHT:
      return LIGHT;
    case Themes.DARK:
      return DARK;
    default:
      return BASIC;
  }
}
