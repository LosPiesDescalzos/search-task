import {useState, useContext, useEffect} from 'react';
import { SearchContext } from "../../contexts/SearchContext/SearchContext";
import styles from "./styles.module.css";
import { Button } from "../UI/Button";
import { en } from "./local";


export const SearchFrom = () => {
    const [query, setQuery] = useState("");
    const { searchUsers, responseFailed, setUsers } = useContext(SearchContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (query.trim() === "") {
            setUsers(null);
        } else {
            searchUsers(query);
        }
    };

    return (
        <div>
            {!responseFailed ? (
                <div className={styles.searchForm}>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            value={query}
                            onChange={(e) => {
                                setQuery(e.target.value);
                            }}
                        />
                    </form>
                    <Button onClick={handleSubmit} type={'primary'}>{en.search}</Button>
                </div>
            ):(
                <div className={styles.failed}>{en.failed}</div>
            )}
        </div>
    );
}