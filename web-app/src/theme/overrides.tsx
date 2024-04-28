// ----------------------------------------------------------------------

import { responsiveFontSizes } from "./typography";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function overrides(_theme: unknown) {
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 500,
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        select: {
          '&:focus': {
            backgroundColor: 'transparent', // Remove background color on focus
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          fontFamily: "Outfit",
          fontWeight: "500",
          color: "#5E5364",
          fontSize: "18px",
          "& ::placeholder": {
            fontFamily: "Outfit",
            fontWeight: "500",
            color: "#9BA6B1",
            ...responsiveFontSizes({ sm: 14, md: 16, lg: 18 })
            //fontSize: "18px", // Adjust the placeholder font size as needed
          },
        },
      },
    },
  };
}
