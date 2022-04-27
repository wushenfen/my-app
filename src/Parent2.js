import React from "react";
class Parent2 extends React.Component {
    state = {
        gift: '无'
    }

    callback = obj => {
        console.log("收到礼物", obj);
        this.setState({
            gift: obj
        })
    }

    render() {
        let { gift } = this.state

        return (
            <div>
                我的礼物{gift}
                <Child fn={this.callback}></Child>
            </div>
        )
    }
}

class Child extends React.Component {
    state = {
        gift: "xbox"
    }

    handluwu = () => {
        let { fn } = this.props
        console.log("开始送");
        //调用父组件的函数
        fn(this.state.gift);
    }

    render() {
        return (
            <div>
                <h3>我是子组件</h3>
                <button onClick={this.handluwu}>送礼物</button>
            </div>
        )
    }
}

export default Parent2
