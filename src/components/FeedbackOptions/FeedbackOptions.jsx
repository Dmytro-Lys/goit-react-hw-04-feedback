import css from './FeedbackOptions.module.css';
import PropTypes from "prop-types";

export const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return (
        <div className={css['feedback-options']}>
            {Object.keys(options).map((option, index) =>
                <FeedbackButton key={index} item={option} onLeaveFeedback = {onLeaveFeedback}/>
                )}
        </div>
    )
}

const FeedbackButton = ({ item, onLeaveFeedback }) => {
   return <button type="button" onClick={onLeaveFeedback} className={css["feedback-btn"]}>{item}</button>
}

FeedbackOptions.propTypes = {
    options: PropTypes.object.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired
}

FeedbackButton.propTypes = {
    item: PropTypes.string.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired
}