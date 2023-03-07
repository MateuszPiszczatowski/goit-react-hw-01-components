import css from "./Statistics.module.css";
import PropTypes from "prop-types";

const getRandom = (min, max) => {
  return Math.round(Math.random() * (max - min)) + min;
};

const getRandomRGBAColor = (min = 50, max = 135, alpha = 1) => {
  return `rgba(${getRandom(min, max)}, ${getRandom(min, max)}, ${getRandom(min, max)}, ${alpha})`;
};

const Statistics = ({ label, stats = [] }) => {
  return (
    <section className={css.statistics}>
      {stats.length > 0 ? (
        <>
          {label && <h2 className={css.title}>{label}</h2>}
          <ul className={css.statList}>
            {stats.map((stat) => (
              <li
                key={stat.id}
                className={css.item}
                style={{ backgroundColor: getRandomRGBAColor() }}>
                <span className={css.label}>{stat.label}</span>
                <span className={css.percentage}>{stat.percentage}</span>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p className={css.paragraph}>No stats to show</p>
      )}
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Statistics;
