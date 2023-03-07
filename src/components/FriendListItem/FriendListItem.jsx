import css from "./FriendListItem.module.css";
import blankProfileImage from "../../images/blank.svg";
import PropTypes from "prop-types";

const FriendListItem = ({ avatar = blankProfileImage, name, isOnline = false }) => {
  return (
    <li className={css.item}>
      <span className={isOnline ? css.statusActive : css.statusInactive}></span>
      <img
        className={css.avatar}
        src={avatar === "" ? blankProfileImage : avatar}
        alt="User avatar"
        width="48"
      />
      <p className={css.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  isOnline: PropTypes.bool,
};

export default FriendListItem;
