import { Section } from "./Section/Section";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions"
import { Statistics } from "./Statistics/Statistics";
import { Notification } from "./Notification/Notification";
import { useState } from "react";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  
  const setOption = {
    good: setGood,
    neutral:setNeutral,
    bad: setBad
  }

  const updateFeedback = evt => {
    const option = evt.target.textContent;
    setOption[option](prev => prev + 1)
 }
  
  const countTotalFeedback = () => good + neutral + bad
  
  const countPositiveFeedbackPercentage = () =>  Math.round(good / countTotalFeedback() * 100)
  
  return (
      <>
      <Section title="Please leave feedback">
          <FeedbackOptions options={{good, neutral, bad}} onLeaveFeedback={updateFeedback} />
      </Section>
      { countTotalFeedback() ?
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positiveFeedbackPercentage={countPositiveFeedbackPercentage()}
          />
        </Section>
       :
        <Notification message="There is no feedback"/>
        }
      </>
    )
}

export default App;