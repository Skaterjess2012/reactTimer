import React, { Component } from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';

class Timer extends Component {
  timerState = false;
  constructor(props) {
    super(props);
    this.state = {
      title: 'title',
      subTitle: 'sub-title',
      counter: 0,
      timer: null
    };
  }
  render() {
    return(
    <Card className="timerCard">
      <div className="timerTitle">
        <h2 className="Title">{this.state.title}</h2>
        <h4 className="SubTitle">{this.state.subTitle}</h4>
      </div>
      <h1>{this.state.timer}</h1>
      <div className="timerButtons">
        <Button color="primary" className="button timerDelete">Delete</Button>
        <Button color="primary" className="button timerEdit">Edit</Button>
      </div>
      <Button onClick={this.startStopTimer}>Start</Button>
    </Card>
    )
  }
  tick() {
    this.setState({
      counter: this.state.counter + 1
    });
  }
  startStopTimer() {
    if (this.timerState) {
      this.clearInterval(this.state.timer);
      this.timerState = false;
    } else {
      let timer = setInterval(this.tick(), 1000);
      this.setState({timer});
      this.timerState = true;
    }
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
