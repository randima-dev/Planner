import { createTheme } from "@mui/material/styles";
import { typography, customTypography } from "./typography";
//import { typography, customTypography } from "./testTypography";
import { PaletteOptions } from "@mui/material";
import { palette } from "./palette";
import { overrides } from "./overrides";
import { TypographyOptions } from "@mui/material/styles/createTypography";

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    h1_48: true;
    h2_34: true;
    h3_28: true;
    h4_23: true;
    body2_14: true;
    text_27: true;
    subtitle1_18: true;
    bold_16: true;
    h4_38: true;
    form_18: true;
    side_bar_14: true;
  }
}

interface ExtendedTypographyOptions extends TypographyOptions {
  h1_48: React.CSSProperties;
  h2_34: React.CSSProperties;
  h3_28: React.CSSProperties;
  h4_23: React.CSSProperties;
  body2_14: React.CSSProperties;
  text_27: React.CSSProperties;
  subtitle1_18: React.CSSProperties;
  bold_16: React.CSSProperties;
  h4_38: React.CSSProperties;
  form_18: React.CSSProperties;
  side_bar_14: React.CSSProperties;
}

const customTheme = createTheme({
  palette: palette() as PaletteOptions,
  typography: {
    ...typography,
    ...customTypography,
    button: {
      textTransform: "none",
      fontFamily: typography.fontFamily
    },
  } as ExtendedTypographyOptions,
});

customTheme.components = overrides(customTheme);

export default customTheme;