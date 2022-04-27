import React from "react";
class Parent3 extends React.Component {
    state = {
        gift: '无'
    }

    setGift = gift => {
        this.setState({
            gift
        })
    }

    render() {
        let { gift } = this.state

        return (
            <div>
                <Jerry gift={gift}></Jerry>
                <Tom fn={this.setGift}></Tom>
            </div>
        )
    }
}

class Tom extends React.Component {
    state = {
        gift: '洋娃娃'
    }

    handle = () => {
        console.log(this.props);
        let { fn } = this.props
        fn(this.state.gift);

    }

    render() {
        return (
            <div>
                <p>Tom</p>
                <button onClick={this.handle}>送礼物</button>
            </div>
        )
    }
}

class Jerry extends React.Component {
    render() {
        return (
            <div>
                <p>Jerry</p>
                <p>礼物:{this.props.gift}</p>
            </div>
        )
    }
}

export default Parent3
