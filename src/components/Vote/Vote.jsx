import { Component } from "react";
import Block from "./Block";
import styles from "./Vote.module.scss";
import VoteActions from "./VoteActions";
import VoteResults from "./VoteResults";

class Vote extends Component {
  state = {
    JS: 0,
    Phyton: 0,
  };

  countTotal() {
    const { JS, Phyton } = this.state;
    return JS + Phyton;
  }

  countPercentage(propertyName) {
    const total = this.countTotal();
    if (!total) {
      return 0;
    }
    const value = this.state[propertyName];
    const result = (value / total) * 100;
    return Number(result.toFixed(2));
  }

  handleVote = (propertyName) => {
    this.setState((prevState) => {
      const value = prevState[propertyName];
      return {
        [propertyName]: value + 1,
      };
    });
  };

  render() {
    const { JS, Phyton } = this.state;
    const total = this.countTotal();
    const jsPercentage = this.countPercentage("JS");
    const phytonPercentage = this.countPercentage("Phyton");
    // const { handleVote } = this;

    return (
      <div className={styles.wrapper}>
        <Block title="Votes for:">
          <VoteActions handleVote={this.handleVote} />
        </Block>
        <Block title="Results:">
          <VoteResults
            total={total}
            JS={JS}
            Phyton={Phyton}
            jsPercentage={jsPercentage}
            phytonPercentage={phytonPercentage}
          />
        </Block>
      </div>
    );
  }
}

export default Vote;
