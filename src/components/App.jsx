import { Section } from "./Section";
import { FeedbackOptions } from "./FeedbackOptions"
import { Statistics } from "./Statistics";
import { Notification } from "./Notification";
import { Component } from "react";

class App extends Component{
 state = {
  good: 0,
  neutral: 0,
  bad: 0
  }
  
  updateFeedback = evt => {
    const option = evt.target.textContent;
    this.setState(prev => { return { [option]: prev[option] + 1 } } )
  }
  
  countTotalFeedback = () => {
   return  Object.values(this.state).reduce((total, value) => {return total + value}, 0)
  }
  countPositiveFeedbackPercentage = () => {
    return Math.round(this.state.good / this.countTotalFeedback() * 100)
  }
  render() {
    const {good, neutral, bad} = this.state
    return (
      <>
      <Section title="Please leave feedback">
          <FeedbackOptions options={this.state} onLeaveFeedback={this.updateFeedback} />
      </Section>
      { this.countTotalFeedback() ?
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positiveFeedbackPercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
       :
        <Notification message="There is no feedback"/>
        }
      </>
    )
  }
}
export default App;