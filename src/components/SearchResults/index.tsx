import { useContext } from "react";
import { SearchContext } from "../../contexts/SearchContext/SearchContext";
import { UserCard } from "../UserCard";

import styles from "./styles.module.css";
import { IUser } from "./types";
import { Button } from "../UI/Button";
import { en } from "./local";

export const SearchResults = () => {
    const { users, loadMore, total, isSearching} = useContext(SearchContext);

    return (
        <div className={styles.mainContainer}>
            <div className={styles.usersList}>
                {isSearching ? (
                    <div>{en.search}</div>
                ) : (
                    users ? (
                        users.length > 0 ? (
                            users.map((user: IUser) => (
                                <UserCard key={user.id} user={user} />
                            ))
                        ) : (
                            <div>{en.not_found}</div>
                        )
                    ) : null
                )}
            </div>

            {!isSearching && users && users.length < total &&
                <Button onClick={loadMore} type={'primary'}>{en.load}</Button>
            }
        </div>
    );
};
