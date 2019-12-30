import React from 'react';
import './timer.css'


class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            seconds: 0,
            minutes: 0,
            hours: 0,
            isRunning : false 
        }













    }
    setMinutes = () => {

        if (this.state.seconds === 60) {
            this.setState({
                seconds: 0,
                minutes: this.state.minutes + 1,
            })

        }
    }

    setHours = () => {
        if (this.state.minutes === 60) {
            this.setState({
                minutes: 0,
                hours: this.state.hours + 1,
            })
        }
    }

  x = 0
    start = () => {
        
        if (!this.state.isRunning) {
            console.log(this.state.isRunning)
            this.setState({
                isRunning: true
            })
             this.x = setInterval(
                () => {

                    this.setState({
                        seconds: this.state.seconds + 1,

                    })
                    this.setMinutes();
                    this.setHours();
                    
                },
                1000
            );
            
            
        }
        else{
            console.log(this.x)
            clearInterval(this.x) ;
            
            this.setState({
                seconds: this.state.seconds,
                minutes: this.state.minutes,
                hours: this.state.hours,
                isRunning: false
            })
            
        }

        }

        resetFun = () => {
            clearInterval(this.x)
            this.setState({
                seconds: 0,
                minutes: 0,
                hours: 0,
                isRunning: false
            })
        }   
         pad(d) {
            return (d < 10) ? '0' + d.toString() : d.toString();
        }

    render() {
        return (
            <div id="comp">
            <div id = "mainTimer">
                <div className = "timee">{this.pad(this.state.seconds)}</div>
                <span className = "timee">:</span>
                <div className = "timee">{this.pad(this.state.minutes)}</div>
                <span className = "timee">:</span>
                <div className = "timee">{this.pad(this.state.hours)}</div>
                </div>
            <div className='buttons'>
                <button id = "startBtn" onClick={this.start}> Start</button>
                <button id = "resetBtn" onClick={this.resetFun}> Reset</button>
            </div>
            </div>
        )
    }
}


export default Timer;