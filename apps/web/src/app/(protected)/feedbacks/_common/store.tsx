"use client";

import type { PropsWithChildren } from "react";
import { useState, createContext, useContext } from "react";
import type { StoreApi } from "zustand";
import { createStore, useStore } from "zustand";

type Store = {
  search: string;
  actions: {
    setSearch: (_search: string) => void;
  };
};

const useStoreDefaults = () => {
  const [store] = useState<StoreApi<Store>>(() =>
    createStore((set) => ({
      search: "",
      actions: {
        setSearch: (search) => set({ search }),
      },
    }))
  );
  return store;
};

const FeedbacksStore = createContext<
  ReturnType<typeof useStoreDefaults> | undefined
>(undefined);

export const FeedbacksStoreProvider = (props: PropsWithChildren) => {
  const store = useStoreDefaults();
  return (
    <FeedbacksStore.Provider value={store}>
      {props.children}
    </FeedbacksStore.Provider>
  );
};

export const useFeedbacksStore = <T,>(selector: (store: Store) => T) => {
  const store = useContext(FeedbacksStore);
  if (!store) throw new Error("FeedbacksStore not found");
  return useStore(store, selector);
};
