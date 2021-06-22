import PropTypes from "prop-types";
import styles from "./FriendList.module.scss";
const FriendList = ({ friends }) => {
  return (
    <ul>
      {friends.map(
        ({
          id,
          avatar = "http://rostov-gorod.ru/local/templates/markup/img/70_no-img.jpg",
          name,
          isOnline,
        }) => (
          <li className={styles.item} key={id}>
            {isOnline ? (
              <span className={styles.status}>{isOnline}</span>
            ) : (
              <span className={styles.statusFalse}></span>
            )}

            <img
              className={styles.avatar}
              src={avatar}
              alt="avatar"
              width="48"
            />
            <p className={styles.name}>{name}</p>
          </li>
        )
      )}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string,
    })
  ),
};
FriendList.defaultProps = {
  friends: [],
};

export default FriendList;
