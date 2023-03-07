import css from "./Statistics.module.css";
import PropTypes from "prop-types";

const Statistics = ({ label, stats }) => {
  return (
    <section className={css.statistics}>
      {label && <h2 className={css.title}>{label}</h2>}

      <ul className={css.statList}>
        {stats.map((stat) => (
          <li key={stat.id} className={css.item}>
            <span className={css.label}>{stat.label}</span>
            <span className={css.percentage}>{stat.percentage}</span>
          </li>
        ))}
      </ul>
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
