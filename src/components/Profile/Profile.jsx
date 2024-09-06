import s from "./Profile.module.css";

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <section className={s.profile}>
      <div className={s.profileEl}>
        <img className={s.avatar} src={avatar} alt="User avatar" />
        <p className={s.username}>{username}</p>
        <p className={s.tag}>@{tag}</p>
        <p className={s.location}>{location}</p>
      </div>

      <ul className={s.stats}>
        <li className={s.element}>
          <span className={s.label}>Followers </span>
          <span className={s.value}>{stats.followers}</span>
        </li>
        <li className={s.element}>
          <span className={s.label}>Views </span>
          <span className={s.value}>{stats.views}</span>
        </li>
        <li className={s.element}>
          <span className={s.label}>Likes </span>
          <span className={s.value}>{stats.likes}</span>
        </li>
      </ul>
    </section>
  );
};

export default Profile;
