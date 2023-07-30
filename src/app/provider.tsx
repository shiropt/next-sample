"use client";

import { CacheProvider } from "@emotion/react";
import { useEmotionCache, MantineProvider } from "@mantine/core";
import { useServerInsertedHTML } from "next/navigation";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "../libs/redux";

export default function Provider({ children }: { children: React.ReactNode }) {
  const cache = useEmotionCache();
  cache.compat = true;
  if (process.env.NODE_ENV === "development") {
    const mockServer = () => import("../mocks/worker");
    mockServer();
  }

  useServerInsertedHTML(() => (
    <style
      data-emotion={`${cache.key} ${Object.keys(cache.inserted).join(" ")}`}
      dangerouslySetInnerHTML={{
        __html: Object.values(cache.inserted).join(" "),
      }}
    />
  ));

  return (
    <CacheProvider value={cache}>
      <ReduxProvider store={store}>
        <MantineProvider withGlobalStyles withNormalizeCSS>
          {children}
        </MantineProvider>
      </ReduxProvider>
    </CacheProvider>
  );
}
