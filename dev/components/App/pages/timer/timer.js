import React, { Component } from 'react'
import { useSelector } from 'react-redux'
// import cn from 'classnames/bind'
import './timer.scss'

//const cx = cn.bind(styles)

class CountDown extends Component {
    constructor(props) {
        super(props)
        this.count = this.count.bind(this)
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
                clearInterval(this.x);
                this.setState({ minutes: 0, seconds: 0, time_up: "TIME IS UP" })
            }
    }
    componentDidMount() {
        this.x = setInterval(this.count, 1000);
    }
    
    render() {
        const { seconds,minutes, time_up } = this.state
        return ( 
            <div> 
                <h1>Countdown Clock</h1>
                <div id="clockdiv">
                    <div>
                        <span className="minutes" id="minute">{minutes}</span>
                    <div className="smalltext">Minutes</div>
                </div>
                    <div>
                        <span className="seconds" id="second">{seconds}</span>
                        <div className="smalltext">Seconds</div>
                    </div>
                </div>
                <p id="demo">{time_up}</p>
            </div>
        )
    }
}

export default CountDown