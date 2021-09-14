import React from 'react';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hour: 0,
            minute: 0,
            sec: 0,
            ten: 0,
        };
    }
    componentDidMount() {
        if (!this.props.board.hasWon() && !this.props.board.hasLost()) {
            console.log(this.props.board)
            this.intervalID = setInterval(
                () => this.tick(),
                10//update every 10 ten
            );
        }
        if (this.props.board.hasWon()||this.props.board.hasLost())
        {
            clearInterval(this.intervalID);
        }
        else {
            console.log(2312);
            
        }
    }
    componentWillUnmount() {
        clearInterval(this.intervalID);
    }
    tick() {
        if (!this.props.board.hasWon() && !this.props.board.hasLost()) {
        let hour = this.state.hour;
        let ten = this.state.ten;
        let sec = this.state.sec;
        let minute = this.state.minute;
        ten++;
        if (ten > 100) {
            ten = 0;
            sec++;
            if (sec > 60) {
                sec = 0;
                minute++;
                if (minute > 60) {
                    minute = 0;
                    hour++;
                }
            }
        }
        this.setState({
            hour: hour,
            ten: ten,
            sec: sec,
            minute,
        })}
    }
    render() {
        return (
            <div className="clock">
                <p className="directions">
                    {this.state.hour < 10 ? '0' + this.state.hour : this.state.hour}:{this.state.minute < 10 ? '0' + this.state.minute : this.state.minute}:{this.state.sec < 10 ? '0' + this.state.sec : this.state.sec}:{this.state.ten < 10 ? '0' + this.state.ten : this.state.ten}
                </p>
            </div>
        );
    }
}
export default Clock;