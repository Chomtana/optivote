import type { Config } from "tailwindcss";
import { colors } from "./theme";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    colors: {
      base: {
        white: "#FFFFFF",
        black: "#000000",
        transparent: "#FFFFFF00",
      },
    },
    backgroundColor: {
      primary: {
        light: "#FFF",
        dark: colors["gray-dark"][950].value,
        _hover: {
          light: colors["gray-dark"][800].value,
          dark: colors["gray-dark"][800].value,
        },
      },
      secondary: {
        light: colors["gray-dark"][900].value,
        dark: colors["gray-dark"][900].value,
        _hover: {
          light: colors["gray-dark"][800].value,
          dark: colors["gray-dark"][800].value,
        },
        subtle: {
          light: colors["gray-dark"][900].value,
          dark: colors["gray-dark"][900].value,
        },
      },
      tertiary: {
        light: colors["gray-dark"][800].value,
        dark: colors["gray-dark"][800].value,
      },
      quaternary: {
        light: colors["gray-dark"][700].value,
        dark: colors["gray-dark"][700].value,
      },
      brand: {
        primary: {
          light: colors["brand"][500].value,
          dark: colors["brand"][500].value,
          alt: {
            light: colors["brand"][300].value,
            dark: colors["brand"][300].value,
          },
        },
        secondary: {
          light: colors["brand"][600].value,
          dark: colors["brand"][600].value,
          solid: {
            light: colors["gray-dark"][600].value,
            dark: colors["gray-dark"][600].value,
          },
        },
        solid: {
          light: colors["brand"][600].value,
          dark: colors["brand"][600].value,
          _hover: {
            light: colors["brand"][500].value,
            dark: colors["brand"][500].value,
          },
        },
        fg: {
          white: "#ffffff",
          primary: {
            light: "#ffffff",
            dark: "#ffffff",
          },
          secondary: {
            light: colors["gray-dark"][300].value,
            dark: colors["gray-dark"][300].value,
            _hover: {
              light: colors["gray-dark"][200].value,
              dark: colors["gray-dark"][200].value,
            },
          },
          tertiary: {
            light: colors["gray-dark"][400].value,
            dark: colors["gray-dark"][400].value,
            _hover: {
              light: colors["gray-dark"][300].value,
              dark: colors["gray-dark"][300].value,
            },
          },
          quaternary: {
            light: colors["gray-dark"][400].value,
            dark: colors["gray-dark"][400].value,
            _hover: {
              light: colors["gray-dark"][300].value,
              dark: colors["gray-dark"][300].value,
            },
          },
          quinary: {
            light: colors["gray-dark"][500].value,
            dark: colors["gray-dark"][500].value,
            _hover: {
              light: colors["gray-dark"][400].value,
              dark: colors["gray-dark"][400].value,
            },
          },
          brand: {
            primary: {
              light: colors["brand"][500].value,
              dark: colors["brand"][500].value,
            },
            secondary: {
              light: colors["brand"][500].value,
              dark: colors["brand"][500].value,
            },
          },
          success: {
            primary: {
              light: colors["success"][500].value,
              dark: colors["success"][500].value,
            },
            secondary: {
              light: colors["success"][400].value,
              dark: colors["success"][400].value,
            },
          },
          error: {
            primary: {
              light: colors["error"][500].value,
              dark: colors["error"][500].value,
            },
            secondary: {
              light: colors["error"][400].value,
              dark: colors["error"][400].value,
            },
          },
          warning: {
            primary: {
              light: colors["warning"][500].value,
              dark: colors["warning"][500].value,
            },
            secondary: {
              light: colors["warning"][400].value,
              dark: colors["warning"][400].value,
            },
          },
          disabled: {
            light: colors["gray-dark"][500].value,
            dark: colors["gray-dark"][500].value,
            subtle: {
              light: colors["gray-dark"][600].value,
              dark: colors["gray-dark"][600].value,
            },
          },
          senary: {
            light: colors["gray-dark"][600].value,
            dark: colors["gray-dark"][600].value,
          },
        },
      },
      success: {
        primary: {
          light: colors["success"][500].value,
          dark: colors["success"][500].value,
        },
        secondary: {
          light: colors["success"][600].value,
          dark: colors["success"][600].value,
        },
        solid: {
          light: colors["success"][600].value,
          dark: colors["success"][600].value,
        },
      },
      error: {
        primary: {
          light: colors["error"][500].value,
          dark: colors["error"][500].value,
        },
        solid: {
          light: colors["error"][600].value,
          dark: colors["error"][600].value,
        },
        secondary: {
          light: colors["error"][600].value,
          dark: colors["error"][600].value,
        },
      },
      warning: {
        primary: {
          light: colors["warning"][500].value,
          dark: colors["warning"][500].value,
        },
        secondary: {
          light: colors["warning"][600].value,
          dark: colors["warning"][600].value,
        },
        solid: {
          light: colors["warning"][600].value,
          dark: colors["warning"][600].value,
        },
      },
      disabled: {
        light: colors["gray-dark"][800].value,
        dark: colors["gray-dark"][800].value,
        subtle: {
          light: colors["gray-dark"][900].value,
          dark: colors["gray-dark"][900].value,
        },
      },
      active: {
        light: colors["gray-dark"][800].value,
        dark: colors["gray-dark"][800].value,
      },
      overlay: {
        light: colors["gray-dark"][800].value,
        dark: colors["gray-dark"][800].value,
      },
    },
    borderColor: {
      primary: {
        light: colors["gray-dark"][700].value,
        dark: colors["gray-dark"][700].value,
      },
      secondary: {
        light: colors["gray-dark"][800].value,
        dark: colors["gray-dark"][800].value,
      },
      tertiary: {
        light: colors["gray-dark"][800].value,
        dark: colors["gray-dark"][800].value,
      },
      brand: {
        light: colors["brand"][400].value,
        dark: colors["brand"][400].value,
        alt: {
          light: colors["gray-dark"][700].value,
          dark: colors["gray-dark"][700].value,
        },
      },
      disabled: {
        light: colors["gray-dark"][700].value,
        dark: colors["gray-dark"][700].value,
        subtle: {
          light: colors["gray-dark"][800].value,
          dark: colors["gray-dark"][800].value,
        },
      },
      success: {
        primary: {
          light: colors["success"][200].value,
          dark: colors["success"][200].value,
        },
      },
      error: {
        light: colors["error"][400].value,
        dark: colors["error"][400].value,
        subtle: {
          light: colors["error"][400].value,
          dark: colors["error"][400].value,
        },
      },
    },
    textColor: {
      primary: {
        light: colors["gray-dark"][50].value,
        dark: colors["gray-dark"][50].value,
        _hover: {
          light: colors["gray-dark"][200].value,
          dark: colors["gray-dark"][200].value,
        },
        "on-brand": {
          light: colors["gray-dark"][50].value,
          dark: colors["gray-dark"][50].value,
        },
      },
      secondary: {
        light: colors["gray-dark"][300].value,
        dark: colors["gray-dark"][300].value,
        _hover: {
          light: colors["gray-dark"][200].value,
          dark: colors["gray-dark"][200].value,
        },
        "on-brand": {
          light: colors["gray-dark"][300].value,
          dark: colors["gray-dark"][300].value,
        },
      },
      tertiary: {
        light: colors["gray-dark"][400].value,
        dark: colors["gray-dark"][400].value,
        _hover: {
          light: colors["gray-dark"][300].value,
          dark: colors["gray-dark"][300].value,
        },
        "on-brand": {
          light: colors["gray-dark"][400].value,
          dark: colors["gray-dark"][400].value,
        },
      },
      quaternary: {
        light: colors["gray-dark"][400].value,
        dark: colors["gray-dark"][400].value,
        "on-brand": {
          light: colors["gray-dark"][400].value,
          dark: colors["gray-dark"][400].value,
        },
      },
      brand: {
        primary: {
          light: colors["gray-dark"][50].value,
          dark: colors["gray-dark"][50].value,
        },
        secondary: {
          light: colors["gray-dark"][300].value,
          dark: colors["gray-dark"][300].value,
        },
        tertiary: {
          light: colors["gray-dark"][400].value,
          dark: colors["gray-dark"][400].value,
          alt: {
            light: colors["gray-dark"][50].value,
            dark: colors["gray-dark"][50].value,
          },
        },
      },
      placeholder: {
        light: colors["gray-dark"][500].value,
        dark: colors["gray-dark"][500].value,
        subtitle: {
          light: colors["gray-dark"][700].value,
          dark: colors["gray-dark"][700].value,
        },
      },
      disabled: {
        light: colors["gray-dark"][500].value,
        dark: colors["gray-dark"][500].value,
      },
      error: {
        light: colors["error"][400].value,
        dark: colors["error"][400].value,
      },
      warning: {
        light: colors["warning"][400].value,
        dark: colors["warning"][400].value,
      },
      success: {
        light: colors["success"][400].value,
        dark: colors["success"][400].value,
      },
      white: "#ffffff",
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        display: ["Inter", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      fontSize: {
        xs: ["12px", "18px"],
        sm: ["14px", "20px"],
        md: ["16px", "24px"],
        lg: ["18px", "28px"],
        xl: ["20px", "30px"],
        "display-xs": ["24px", "32px"],
        "display-sm": ["30px", "38px"],
        "display-md": ["36px", "44px"],
        "display-lg": ["48px", "60px"],
        "display-xl": ["60px", "72px"],
        "display-2xl": ["72px", "90px"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
