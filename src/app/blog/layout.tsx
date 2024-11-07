import { storyblokInit, apiPlugin } from "@storyblok/react";
import StoryblokProvider from "@/storyblok/StoryblokProvider";
import { ReactNode } from "react";
import "./globals.css";

storyblokInit({
  accessToken: process.env.STORYBLOK_TOKEN,
  use: [apiPlugin],
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <StoryblokProvider>
      <html lang="en">
        <body className="bg-black text-white">{children}</body>
      </html>
    </StoryblokProvider>
  );
}
