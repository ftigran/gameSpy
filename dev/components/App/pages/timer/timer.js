import React, { Component } from 'react'
import { useDispatch } from 'react-redux'
// import cn from 'classnames/bind'
import './timer.scss'
import Modal from '../../../Modal/Modal'
import {IconButton} from '@material-ui/core'
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
class CountDown extends Component {
    constructor(props) {
        super(props)
        this.count = this.count.bind(this)
        this.timeIsUp = this.timeIsUp.bind(this)
        this.timerPause = this.timerPause.bind(this)
        this.state = {
            minutes: 0,
            secounds: 0,
            time_up:"",
            isStart: false
        }
        this.deadline=props.timer;
        this.x = null
    }
    count () {        
        this.deadline-=1000
        var minutes = Math.floor((this.deadline % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((this.deadline % (1000 * 60)) / 1000);
        this.setState({minutes, seconds})
        if (this.deadline < 0) {
                this.timeIsUp()
            }
    }
    componentDidMount() {
        this.x = setInterval(this.count, 1000);
        this.setState({isStart:true})
    }
    timerPause(){
        if(this.state.isStart){
            this.setState({isStart:false})
            clearInterval(this.x);
        }else{
            this.x = setInterval(this.count, 1000);
            this.setState({isStart:true})
        }
    }
    timeIsUp(){
        clearInterval(this.x);
        this.setState({ minutes: 0, seconds: 0, time_up: "TIME IS UP" })
        const dispatch = useDispatch();
    }
    render() {
        const { seconds,minutes, time_up, isStart } = this.state
        
        return ( 
            <div onClick={this.timerPause}> 
                <h1>Выяви</h1>
                <IconButton color="primary" aria-label="pause timer" component="span">
                    {isStart?<PauseIcon/>:<PlayArrowIcon/>}
                </IconButton>
                <div id="clockdiv">
                    <span className="minutes" id="minute">{minutes}</span>
                    <span className="seconds" id="second">{seconds}</span>
                </div>
                <p id="demo">{time_up}</p>
                {/* <Modal/> */}
            </div>
        )
    }
}

export default CountDown