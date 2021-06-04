import React, { Component } from "react";
import { useDispatch } from "react-redux";
// import cn from 'classnames/bind'
import "./timer.scss";
import Modal from "../../../Modal/Modal";
//const cx = cn.bind(styles)
import { bindActionCreators } from "redux";
import { Button } from "@material-ui/core";
import { showFinalModal } from "../../../../store/actions";
import { connect } from "react-redux";
import IconButton from "@material-ui/core/IconButton";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";

import timer1 from "../../../../sounds/timer1.mp3";
import timer2 from "../../../../sounds/timer2.mp3";
import gameEnd from "../../../../sounds/gameEnd.mp3";
import toggleSound from "../../../../sounds/toggle.mp3";

const sound1 = new Audio(timer1);
const sound2 = new Audio(timer2);
const gameEndSound = new Audio(gameEnd);
const toggle = new Audio(toggleSound);

class CountDown extends Component {
  constructor(props) {
    super(props);
    this.count = this.count.bind(this);
    this.timeIsUp = this.timeIsUp.bind(this);
    this.timerPause = this.timerPause.bind(this);
    this.state = {
      minutes: 0,
      secounds: 0,
      active: false,
    };
    const getWord = () => {
      if (this.props.spys == 1) {
        return "шпиона";
      } else {
        return this.props.spys + "х шпионов";
      }
    };
    this.title = "Вычислите среди игроков " + getWord();
    this.deadline = props.timer * 60 * 1000;
    this.x = null;
  }
  count() {
    this.deadline -= 1000;
    var minutes = Math.floor((this.deadline % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((this.deadline % (1000 * 60)) / 1000);
    this.sound();
    this.setState({ minutes, seconds });
    if (this.deadline < 0) {
      this.timeIsUp();
    }
  }
  sound() {
    if (this.tick) {
      sound1.play();
    } else {
      sound2.play();
    }
    this.tick != this.tick;
  }
  componentDidMount() {
    this.count();
    this.x = setInterval(this.count, 1000);
    this.setState({ active: true });
  }
  componentWillUnmount() {
    clearInterval(this.x);
    this.x = null;
  }
  timerPause() {
    toggle.play();
    if (this.state.active) {
      this.setState({ active: false });
      clearInterval(this.x);
      this.x = null;
    } else {
      this.setState({ active: true });
      this.x = setInterval(this.count, 1000);
    }
  }
  timeIsUp() {
    clearInterval(this.x);
    gameEndSound.play();
    this.props.showFinalModal(true);
  }
  render() {
    const { seconds, minutes, active } = this.state;
    return (
      <div className="timer">
        <h1>{this.title}</h1>
        <IconButton
          onClick={this.timerPause}
          aria-label="upload picture"
          component="span"
        >
          {active ? (
            <PauseCircleOutlineIcon className="button active" />
          ) : (
            <PlayCircleOutlineIcon className="button" />
          )}
        </IconButton>
        <div
          id={"clockdiv"}
          className={active ? "active" : null}
          onClick={this.timerPause}
        >
          <span className="minutes" id="minute">
            {minutes}
          </span>
          <span className="seconds" id="second">
            {seconds}
          </span>
        </div>
        <Modal />
        <Button variant="contained" onClick={this.timeIsUp}>
          Завершить
        </Button>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    timer: state.timer,
    spys: state.spys,
  };
};

const putActionsToProps = (dispatch) => {
  return {
    showFinalModal: bindActionCreators(showFinalModal, dispatch),
  };
};
export default connect(mapStateToProps, putActionsToProps)(CountDown);
