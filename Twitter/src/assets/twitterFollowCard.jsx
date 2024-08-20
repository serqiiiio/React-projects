import { useState } from "react";
import PropTypes from "prop-types";

const Card = ({ children, nickName, imageSrc, initialFollowing }) => {
  const [isFolllowingState, isFollowingSetState] = useState(initialFollowing);

  const buttonText = isFolllowingState ? "Following" : "Follow";
  const buttonClassName = isFolllowingState
    ? "tw-follow-card-button is-following"
    : "tw-follow-card-button";

  const handleClick = () => {
    isFollowingSetState(!isFolllowingState);
  };

  return (
    <article className="tw-follow-card">
      <header className="tw-follow-card-header">
        <div className="continer-image-avatar">
          <img
            alt="unknow man"
            className="tw-follow-card-avatar"
            src={imageSrc}
          ></img>
        </div>
        <div className="tw-follow-card-info">
          <strong>{children}</strong>
          <span>@{nickName}</span>
        </div>
        <aside>
          <button className={buttonClassName} onClick={handleClick}>
            <span className="tw-follow-button-text">{buttonText}</span>
            <span className="tw-follow-card-stop-follow">Stop Following</span>
          </button>
        </aside>
      </header>
    </article>
  );
};

Card.propTypes = {
  children: PropTypes.string.isRequired,
  nickName: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  initialFollowing: PropTypes.bool.isRequired,
};

export default Card;
