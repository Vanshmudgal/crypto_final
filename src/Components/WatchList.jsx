import { createContext, useContext } from "react";

export const WatchlistContext = createContext();

export const useWatchlist = () => useContext(WatchlistContext);
