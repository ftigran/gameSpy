import React, { Component } from 'react'
import { useDispatch } from 'react-redux'
// import cn from 'classnames/bind'
import './timer.scss'
import Modal from '../../../Modal/Modal'
import {Button} from '@material-ui/core'
//const cx = cn.bind(styles)

class CountDown extends Component {
    constructor(props) {
        super(props)
        this.count = this.count.bind(this)
        this.timeIsUp = this.timeIsUp.bind(this)
        this.timerPause = this.timerPause.bind(this)
        this.state = {
            minutes: 0,
            secounds: 0,
            time_up:""
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
    }
    timerPause(){
        if(this.x){
            clearInterval(this.x);
            this.x = null
        }else{
            this.x = setInterval(this.count, 1000);
        }
    }
    timeIsUp(){
        clearInterval(this.x);
        this.setState({ minutes: 0, seconds: 0, time_up: "TIME IS UP" })
        const dispatch = useDispatch();

    }
    render() {
        const { seconds,minutes, time_up } = this.state
        return ( 
            <div onClick={this.timerPause}> 
                <h1>Countdown Clock</h1>
                <Button variant="contained"></Button>
                <div id="clockdiv">
                    <span className="minutes" id="minute">{minutes}</span>
                    <span className="seconds" id="second">{seconds}</span>
                </div>
                <p id="demo">{time_up}</p>
                <Modal/>
            </div>
        )
    }
}

export default CountDown