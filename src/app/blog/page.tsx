"use client";

import { QueryClient, QueryClientProvider } from "react-query";
import { useStoryblok } from "@/hooks/useStoryblok";
import { useTranslation } from "react-i18next";
import IzarLog from "@/components/izar-logo";
import {cormorant, charter, halveticaNowText} from "../fonts/fonts";
import "../../utils/i18n";

const queryClient = new QueryClient();

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <HomeContent />
    </QueryClientProvider>
  );
}

function HomeContent() {
  const { data, isLoading, error } = useStoryblok("home");
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang : string) => {
    i18n.changeLanguage(lang);
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return (
    <div>
      <div>
        <button onClick={() => changeLanguage('en')}>English</button>
        <button onClick={() => changeLanguage('fr')}>Français</button>
      </div>
      <div >
        <div>
      <h1 className={`${cormorant.className}`}>This is a heading with the Cormorant font</h1>
      <h1 className={`${charter.className} font-bold`}>This is a heading with the bold Charter font</h1>
      <p className={`${halveticaNowText.className} italic text-2xl font-light`}>This is a paragraph with the italic halveticaNowText font</p>
    </div>
        <IzarLog color="text-zinc-400" />
        {data.name} : {t("Welcome")}
      </div>
    </div>
  );
}
