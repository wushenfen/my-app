import React from "react";
class Hello extends React.Component {
    constructor(props) {
        super(props)
        console.log('构造方法', this.props);
    }

    render() {
        const { name, age, bobit, funs, tag } = this.props

        return (
            <div>
                <h1>hello</h1>
                <p>字符串{name}</p>
                <p>数字{age}</p>
                <p>数组{bobit}</p>
                <p>函数{funs()}</p>
                <p>标签{tag}</p>
            </div>
        )
    }
}

export default Hello
