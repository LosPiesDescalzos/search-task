import { createContext } from "react";
import {IUser} from "../../components/SearchResults/types";


interface SearchContextType {
    users: IUser[] | null;
    searchUsers: (newQuery: string) => void;
    loadMore: () => void;
    responseFailed: boolean;
    setUsers: (newUsers: IUser[] | null) => void;
    isSearching: boolean;
}

const defaultState: SearchContextType = {
    users: null,
    searchUsers: async () => {},
    loadMore: () => {},
    responseFailed: false,
    setUsers: (newUsers: IUser[] | null) => {},
    isSearching: false,
};

export const SearchContext = createContext<SearchContextType>(defaultState);
