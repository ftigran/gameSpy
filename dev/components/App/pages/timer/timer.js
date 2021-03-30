import React, { Component } from 'react'
import { useDispatch } from 'react-redux'
// import cn from 'classnames/bind'
import './timer.scss'
import Modal from '../../../Modal/Modal'
//const cx = cn.bind(styles)
import {bindActionCreators} from 'redux'
import {Button} from '@material-ui/core'
import {setGameProgress} from '../../../../store/actions'
import {connect} from 'react-redux';
class CountDown extends Component {
    constructor(props) {
        super(props)
        this.count = this.count.bind(this)
        this.timeIsUp = this.timeIsUp.bind(this)
        this.timerPause = this.timerPause.bind(this)
        this.state = {
            minutes: 0,
            secounds: 0,
        }
        this.deadline=props.timer*60*1000;
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
    componentWillUnmount(){
        clearInterval(this.x);
        this.x = null
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
        this.props.setGameProgress('settings')
    }
    render() {
        const { seconds,minutes } = this.state
        return ( 
            <div onClick={this.timerPause}> 
                <h1>Countdown Clock</h1>
                <div id="clockdiv">
                    <span className="minutes" id="minute">{minutes}</span>
                    <span className="seconds" id="second">{seconds}</span>
                </div>
                {/* <Modal/> */}
                <Button variant="outlined" onClick={this.timeIsUp}>Завершить</Button>
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return {
        timer: state.timer,
    }
};

const putActionsToProps=(dispatch)=>{
    return {
        setGameProgress: bindActionCreators(setGameProgress, dispatch),
    }
}
export default connect(mapStateToProps, putActionsToProps)(CountDown)