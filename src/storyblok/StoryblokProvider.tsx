"use client";
import { storyblokInit, apiPlugin } from "@storyblok/react";

/** Import your components */
/** import Page from "./Page"; */
import { ReactNode } from "react";

const components = {
/** feature: Feature,*/
};

storyblokInit({
  accessToken: process.env.STORYBLOK_TOKEN,
  use: [apiPlugin],
  components,
});

export default function StoryblokProvider({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
