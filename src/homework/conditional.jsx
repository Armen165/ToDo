import React from 'react';

class Conditional extends React.Component {
    state = {
        text1: 'Hello',
        text2: 'Hi',
        name: "Hagop",
        toggle: true,
        toggle1: true,
    }

    showFirst = () => {
        this.setState({
            toggle: !this.state.toggle,
        })
    }

    showHagop = () => {
            this.setState({
            toggle1: !this.state.toggle1,
        })
    }

    render() {
        const { text2, text1, toggle,toggle1, } = this.state;
        return (
            <div>
                <button onClick={this.showHagop}>{toggle1? "Show" : "Hide" }</button>
                <button onClick={this.showFirst}>BTN</button>
                <span>{toggle ? <h3>{text1}</h3> : <h3>{text2}</h3>}</span>
              <h3>{toggle1 ? {text1} : {text2}}</h3>

            </div>
        )
    }
}
export default Conditional;