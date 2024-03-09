import styles from "./styles.module.css";
import { IUserCard } from "./types";

export const UserCard = (props: IUserCard) => {
    const user = props.user;
  return (
    <div className={styles.userCard}>
      <img className={styles.userPic} src={user.image} />
      <div className={styles.userInfo}>
        <div>{`${user.firstName} ${user.lastName}`}</div>
        <div>{user.address.city}</div>
          <div className={styles.ellipsis}>{user.email}</div>
      </div>
    </div>
  );
}
