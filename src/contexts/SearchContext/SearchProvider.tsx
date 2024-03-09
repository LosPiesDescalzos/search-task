import { SearchContext } from './SearchContext';
import { useUsersSearch } from '../../hooks/useUsersSearch';
import { ReactNode } from "react";

export interface ISearchProvider {
    children: ReactNode;
}

export const SearchProvider = (props: ISearchProvider) => {
    const search = useUsersSearch();

    return (
        <SearchContext.Provider value={search}>
            {props.children}
        </SearchContext.Provider>
    );
};
