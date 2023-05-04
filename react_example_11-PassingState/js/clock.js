console.log("Clock");

const DigitalDisplay = props => React.createElement(
    "div",
    null,
    props.time
);

const AnalogDisplay = (props) => {
    let date = new Date(props.time);
    let dialStyle = {
        position: 'relative',
        top: 0,
        left: 0,
        width: 200,
        height: 200,
        borderRadius: 20000,
        borderStyle: 'solid',
        borderColor: 'black'
    };
    let secondHandStyle = {
        position: 'relative',
        top: 100,
        left: 100,
        border: '1px solid red',
        width: '40%',
        height: 1,
        transform: 'rotate(' + ((date.getSeconds() / 60) * 360 - 90).toString() + 'deg)',
        transformOrigin: '0% 0%',
        backgroundColor: 'red'
    };
    let minuteHandStyle = {
        position: 'relative',
        top: 100,
        left: 100,
        border: '1px solid grey',
        width: '40%',
        height: 3,
        transform: 'rotate(' + ((date.getMinutes() / 60) * 360 - 90).toString() + 'deg)',
        transformOrigin: '0% 0%',
        backgroundColor: 'grey'
    };
    let hourHandStyle = {
        position: 'relative',
        top: 92,
        left: 106,
        border: '1px solid grey',
        width: '20%',
        height: 7,
        transform: 'rotate(' + ((date.getHours() / 12) * 360 - 90).toString() + 'deg)',
        transformOrigin: '0% 0%',
        backgroundColor: 'grey'
    };
    return (
        React.createElement('div', null,
            React.createElement('div', { style: dialStyle },
                React.createElement('div', { style: secondHandStyle }),
                React.createElement('div', { style: minuteHandStyle }),
                React.createElement('div', { style: hourHandStyle })
            )
        )
    );
};

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.launchClock();
        this.state = { currentTime: new Date() };
    }
    launchClock() {
        console.log(this);
        setInterval(
            function () {
                console.log('updating...');
                this.setState({ currentTime: new Date() });
            }.bind(this),
            1000,
        );
    }
    render() {
        console.log('Rendering...');
        return React.createElement('div', null,
            React.createElement(AnalogDisplay, { time: this.state.currentTime.getTime() }),
            React.createElement(DigitalDisplay, { time: this.state.currentTime.toLocaleString() }));
    }
}


