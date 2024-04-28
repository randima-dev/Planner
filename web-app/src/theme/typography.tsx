export const primaryFont = "Outfit";
//export const secondaryFont = "Poppins";

interface responsiveBreakPoints {
  sm: number;
  md: number;
  lg: number;
  lgPlus?: number;
}

export function responsiveFontSizes({ sm, md, lg, lgPlus }: responsiveBreakPoints) {
  return {
    "@media (max-width:600px)": {
      fontSize: `${sm}px`,
    },
    "@media (min-width:600px) and (max-width: 900px)": {
      fontSize: `${md}px`,
    },
    "@media (min-width:900px) and (max-width: 1600px)": {
      fontSize: `${lg}px`,
    },
    "@media (min-width:1600px)": {
      fontSize: `${lgPlus}px`,
    },
  };
}

export const typography = {
  fontFamily: primaryFont,
  //fontSecondaryFamily: secondaryFont,
  fontWeightRegular: 300,
  fontWeightMedium: 400,
  fontWeightSemiBold: 600,
  fontWeightBold: 700,
  h1: {
    fontFamily: primaryFont,
    fontSize: "108px",
    fontWeight: 300,
    ...responsiveFontSizes({ sm: 28, md: 42, lg: 108, lgPlus: 108 }),
  },
  h2: {
    fontFamily: primaryFont,
    fontSize: "68px",
    fontWeight: 300,
    ...responsiveFontSizes({ sm: 26, md: 40, lg: 68, lgPlus: 68 }),
  },
  h3: {
    fontFamily: primaryFont,
    fontSize: "54px",
    fontWeight: 400,
    ...responsiveFontSizes({ sm: 24, md: 38, lg: 54, lgPlus: 54 }),
  },
  h4: {
    fontFamily: primaryFont,
    fontSize: "38px",
    fontWeight: 400,
    ...responsiveFontSizes({ sm: 18, md: 30, lg: 38, lgPlus: 38 }),
  },
  h5: {
    fontFamily: primaryFont,
    fontSize: "27px",
    fontWeight: 400,
    ...responsiveFontSizes({ sm: 16, md: 23, lg: 27, lgPlus: 27 }),
  },
  h6: {
    fontFamily: primaryFont,
    fontSize: "23px",
    fontWeight: 500,
    ...responsiveFontSizes({ sm: 15, md: 19, lg: 23, lgPlus: 23 }),
  },
  subtitle1: {
    fontFamily: primaryFont,
    fontWeight: 400,
    fontSize: "18px",
    lineHeight: "125%",
    ...responsiveFontSizes({ sm: 14, md: 16, lg: 18, lgPlus: 18 }),
  },
  subtitle2: {
    fontFamily: primaryFont,
    fontWeight: 500,
    fontSize: "16px",
    lineHeight: "125%",
    ...responsiveFontSizes({ sm: 12, md: 14, lg: 16, lgPlus: 16 }),
  },
  body2: {
    fontFamily: primaryFont,
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "125%",
    ...responsiveFontSizes({ sm: 12, md: 14, lg: 16, lgPlus: 16 }),
  },
  button: {
    fontSize: "16px",
    fontWeight: 500,
    fontFamily: primaryFont,
  },
};

export const customTypography = {
  h1_48: {
    fontFamily: primaryFont,
    fontSize: "48px",
    fontWeight: 300,
    lineHeight: "150%",
    ...responsiveFontSizes({ sm: 23, md: 36, lg: 48, lgPlus: 48 }),
  },
  h4_38: {
    fontFamily: primaryFont,
    fontSize: "38px",
    fontWeight: 500,
    lineHeight: "150%",
    ...responsiveFontSizes({ sm: 18, md: 30, lg: 38, lgPlus: 38 }),
  },
  h2_34: {
    fontFamily: primaryFont,
    fontSize: "34px",
    fontWeight: 300,
    lineHeight: "150%",
    ...responsiveFontSizes({ sm: 22, md: 28, lg: 34, lgPlus: 34 }),
  },
  h3_28: {
    fontFamily: primaryFont,
    fontSize: "28px",
    fontWeight: 400,
    lineHeight: "150%",
    ...responsiveFontSizes({ sm: 20, md: 24, lg: 28, lgPlus: 28 }),
  },
  text_27: {
    fontFamily: primaryFont,
    fontSize: "27px",
    fontWeight: 600,
    lineHeight: "150%",
    ...responsiveFontSizes({ sm: 18, md: 23, lg: 27, lgPlus: 27 }),
  },
  h4_23: {
    fontFamily: primaryFont,
    fontSize: "23px",
    fontWeight: 400,
    lineHeight: "150%",
    ...responsiveFontSizes({ sm: 15, md: 19, lg: 23, lgPlus: 23 }),
  },
  bold_16: {
    fontFamily: primaryFont,
    fontWeight: 600,
    fontSize: "16px",
    ...responsiveFontSizes({ sm: 12, md: 14, lg: 16, lgPlus: 16 }),
  },
  body2_14: {
    fontFamily: primaryFont,
    fontSize: "14px",
    fontWeight: 400,
    lineHeight: "150%",
    ...responsiveFontSizes({ sm: 10, md: 12, lg: 14, lgPlus: 14 }),
  },
  subtitle1_18: {
    fontFamily: primaryFont,
    fontWeight: 600,
    fontSize: "18px",
    ...responsiveFontSizes({ sm: 14, md: 16, lg: 18, lgPlus: 18 }),
  },
  form_18: {
    fontFamily: primaryFont,
    fontWeight: 500,
    fontSize: "18px",
    ...responsiveFontSizes({ sm: 14, md: 16, lg: 18, lgPlus: 18 }),
  },
  side_bar_14: {
    fontFamily: primaryFont,
    fontSize: "14px",
    fontWeight: 500,
    lineHeight: "125%",
    ...responsiveFontSizes({ sm: 10, md: 12, lg: 14, lgPlus: 14 }),
  },
};
