import PropTypes from "prop-types";
import style from "./profileStyle.module.scss";
const Profile = ({
  name,
  tag,
  location,
  avatar = "http://rostov-gorod.ru/local/templates/markup/img/70_no-img.jpg",
  stats: { followers, views, likes },
}) => {
  return (
    <div className={style.profile}>
      <div>
        <img src={avatar} alt="Аватар пользователя" className={style.avatar} />
        <p className={style.name}>{name}</p>
        <p className={style.tag}>{tag}</p>
        <p className={style.location}>{location}</p>
      </div>

      <ul className={style.stats}>
        <li key="id-1">
          <span className={style.label}>Followers</span>
          <span className={style.quantity}>{followers}</span>
        </li>
        <li key="id-2">
          <span className={style.label}>Views</span>
          <span className={style.quantity}>{views}</span>
        </li>
        <li key="id-3">
          <span className={style.label}>Likes</span>
          <span className={style.quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};

export default Profile;
