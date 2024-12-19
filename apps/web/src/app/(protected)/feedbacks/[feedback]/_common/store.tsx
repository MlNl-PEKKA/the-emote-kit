"use client";

import type { PropsWithChildren } from "react";
import { createContext, useContext, useState } from "react";
import type { StoreApi } from "zustand";
import { createStore, useStore } from "zustand";

import type { StoreType } from "@/app/types";

export type Store = StoreType<{
  mode: "Feedback" | "code";
}>;

const useStoreDefaults = () => {
  const [store] = useState<StoreApi<Store>>(() =>
    createStore((set) => ({
      mode: "code",
      actions: {
        reset: () =>
          set({
            mode: "code",
          }),
        setMode: (mode) => set({ mode }),
      },
    }))
  );
  return store;
};

const FeedbackStore = createContext<
  ReturnType<typeof useStoreDefaults> | undefined
>(undefined);

export const FeedbackStoreProvider = (props: PropsWithChildren) => {
  const store = useStoreDefaults();
  return (
    <FeedbackStore.Provider value={store}>
      {props.children}
    </FeedbackStore.Provider>
  );
};

export const useFeedbackStore = <T,>(selector: (store: Store) => T) => {
  const store = useContext(FeedbackStore);
  if (!store) throw new Error("FeedbackStore not found");
  return useStore(store, selector);
};
