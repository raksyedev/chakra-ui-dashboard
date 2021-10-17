import { layerStyles } from "./others/layer-styles";
import { textStyles } from "./others/text-styles";
import { styles } from "./styles";
import { colors } from "./collects/colors";
import { fonts } from "./collects/font";

export const config = {
  useSystemColorMode: false,
  initialColorMode: "light",
};

export const overrides = {
  config,
  colors,
  styles,
  textStyles,
  layerStyles,
  fonts,
};
