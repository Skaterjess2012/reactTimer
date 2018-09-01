import React, { Component } from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'title',
      subTitle: 'sub-title',
      secondCount: 60,
      minuteCount: 60,
      hourCount: 0
    };
  }
  componentWillUnmount () {
    clearInterval(this.timer);
  }
  tick () {
    if (this.state.secondCount === 1) {
      this.setState({
        secondCount: 60,
        minuteCount: this.state.minuteCount - 1
      });
    } else {
      this.setState({secondCount: (this.state.secondCount - 1)});
    }
    if (this.state.minuteCount === 0) {
      this.setState({
        minuteCount: 60,
        hourCount: this.state.hourCount + 1
      });
    }
  }
  startTimer () {
    clearInterval(this.timer)
    this.timer = setInterval(this.tick.bind(this), 1000);
  }
  stopTimer () {
    clearInterval(this.timer);
  }
  displayNum(timerCount, type) {
    let tempNum;
    if (type === 'second') {
      tempNum = 60 - timerCount;
      if (tempNum === 0) {
        return '00';
      }
    }
    if (type === 'minute') {
      tempNum = 60 - timerCount;
    }
    if (type === 'hour') {
      tempNum = timerCount;
    }
    if (tempNum < 10) {
      return '0' + tempNum;
    }
    return tempNum;
  }
  updateTitleInput(evt) {
    this.setState({
      title: evt.target.value
    })
  }
  updateSubTitleInput(evt) {
    this.setState({
      subTitle: evt.target.value
    })
  }
  timerEdit() {
  }
  render() {
    return(
    <Card className="timerCard">
      <div className="timerTitle">
        <h2 className="title">{this.state.title}</h2>
        <input className="input inputTitle" type="text" placeholder="Title" value={this.state.inputValue} onChange={evt => this.updateTitleInput(evt)} />
        <h4 className="subTitle">{this.state.subTitle}</h4>
        <input className="input inputSubTitle" type="text" placeholder="Sub Title" value={this.state.inputValue} onChange={evt => this.updateSubTitleInput(evt)} />
      </div>
      <h1>{`${this.displayNum(this.state.hourCount, 'hour')}:${this.displayNum(this.state.minuteCount, 'minute')}:${this.displayNum(this.state.secondCount, 'second')}`}</h1>
      <div className="timerButtons">
        <Button color="primary" className="button timerDelete">Delete</Button>
      </div>
      <div className="timerStartStop">
        <Button onClick={this.startTimer.bind(this)}>Start</Button>
        <Button onClick={this.stopTimer.bind(this)}>Stop</Button>
      </div>
    </Card>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <h1>Timers</h1>
        <Timer></Timer>
      </div>
    );
  }
}

export default App;
