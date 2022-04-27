import React from "react";
class Parent extends React.Component {
    state = {
        data: "王建"
    }

    render() {
        return (
            <div>
                我是父组件,里面有个子
                <Child name={this.state.data}></Child>
            </div>
        )
    }
}

class Child extends React.Component {
    render() {
        return (
            <div>
                我是子组件{this.props.name}
                
            </div>
        )
    }
}

export default Parent
