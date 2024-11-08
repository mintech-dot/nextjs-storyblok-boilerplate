import localFont from "next/font/local";
import { Cormorant } from "next/font/google";

export const cormorant = Cormorant({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    style: ["italic", "normal"],
    display: "swap",
});

export const charter = localFont({
  src: [
    {
      path: "./charter/charter_italic-webfont.woff",
      weight: "400",
      style: "italic",
    },
    {
      path: "./charter/charter_regular-webfont.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "./charter/charter_bold-webfont.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "./charter/charter_bold_italic-webfont.woff",
      weight: "700",
      style: "italic",
    },
  ],
});

export const halveticaNowText = localFont({
  src: [
    {
      path: "./halveticaNowText/helveticaNowText-LightItalic.woff",
      weight: "300",
      style: "italic",
    },
    {
      path: "./halveticaNowText/helveticaNowText-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "./halveticaNowText/helveticaNowText-RegIta.woff",
      weight: "400",
      style: "italic",
    },
    {
      path: "./halveticaNowText/helveticaNowText-MediumItalic.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "./halveticaNowText/helveticaNowText-Bold.woff",
      weight: "700",
      style: "normal",
    },
  ],
});
