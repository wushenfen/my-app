import React from "react";

import './index.css'
class NumberCount extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 88
        }
    }

    // this无法取值
    // handle() {
    //     this.setState({
    //         count: this.state.count + 3
    //     });
    // }

    handle = (obj,e) => {
        console.log(obj);
        this.setState({
            count: this.state.count + 3
        });
    }

    //渲染的
    render() {
        return (
            <div>
                <h1>计数器</h1>
                <h3>{this.state.count}</h3>
                <button onClick={this.handle.bind(this,"temo")}>点我+3</button>
            </div>
        )
    }
}

export default NumberCount