import { useState, useCallback, useEffect } from 'react';
import { IUser } from "../components/SearchResults/types";

export const useUsersSearch = () => {
    const [users, setUsers] = useState<IUser[] | null>(null);
    const [query, setQuery] = useState('');
    const [skip, setSkip] = useState(0);
    const [total, setTotal] = useState(0);
    const [isSearching, setIsSearching] = useState(false);
    const [responseFailed,  setResponseFailed] = useState<boolean>(false)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const encodedQuery = encodeURIComponent(query);
                const response = await fetch(`https://dummyjson.com/users/search?q=${encodedQuery}&skip=${skip}&limit=30`);
                if (!response.ok) {
                    throw new Error('failed');
                }
                const data = await response.json();
                if (isSearching) {
                    setUsers(data.users);
                } else {
                    setUsers(prev => [...prev, ...data.users]);
                }
                setTotal(data.total);
                setIsSearching(false);
            } catch (error) {
                setResponseFailed(true);
            }
        };

        if (query && (isSearching || skip > 0)) {
            fetchData();
        }
    }, [query, skip, isSearching]);

    const searchUsers = useCallback((newQuery: string) => {
        setQuery(newQuery);
        setSkip(0);
        setIsSearching(true);
    }, []);

    const loadMore = useCallback(() => {
        if (users &&  users.length < total) {
            setSkip(prevSkip => prevSkip + 30);
            setIsSearching(false);
        }
    }, [users, total]);

    return { users, searchUsers, loadMore, total, responseFailed, setUsers, isSearching};
};