import css from './Statistics.module.css'
import PropTypes from "prop-types";

export const Statistics = ({ good, neutral, bad, total, positiveFeedbackPercentage }) => {
    return (
        <div className={css.statistics}>
            <p className={css["statistics-item"]}>Good: {good}</p>
            <p className={css["statistics-item"]}>Neutral: {neutral}</p>
            <p className={css["statistics-item"]}>Bad: {bad}</p>
            <p className={css["statistics-item"]}>Total: {total}</p>
            <p className={css["statistics-item"]}>Positive feedback: {positiveFeedbackPercentage}%</p>
        </div>
    )
    
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positiveFeedbackPercentage: PropTypes.number.isRequired
}