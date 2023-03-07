import css from "./Profile.module.css";
import PropTypes from "prop-types";
import blankProfileImage from "../../images/blank.svg";

const Profile = ({
  username,
  tag,
  location,
  avatar = blankProfileImage,
  stats = { followers: 0, views: 0, likes: 0 },
}) => {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img
          src={avatar === "" ? blankProfileImage : avatar}
          alt="User avatar"
          className={css.avatar}
        />
        <p className={css.name}>{username}</p>
        {tag && <p className={css.tag}>@{tag}</p>}
        {location && <p className={css.location}>{location}</p>}
      </div>

      <ul className={css.stats}>
        <li>
          <span className={css.label}>Followers: </span>
          <span className={css.quantity}>{stats.followers}</span>
        </li>
        <li>
          <span className={css.label}>Views: </span>
          <span className={css.quantity}>{stats.views}</span>
        </li>
        <li>
          <span className={css.label}>Likes: </span>
          <span className={css.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.objectOf(PropTypes.number),
};

export default Profile;
