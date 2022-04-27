//留言板
import React from "react";

class leaveword extends React.Component {
    state = {
        uname: '',
        utext: '',
        texts: []
    }

    formhandle = (e) => {
        let t = e.target
        let name = t.name
        let value = t.value

        this.setState({
            [name]: value
        })
    }

    //向评论数组添加内容
    addText = () => {
        let text = {
            uname: this.state.uname,
            utext: this.state.utext
        }

        this.setState({
            uname: '',
            utext: '',
        })

        this.state.texts.push(text)
    }

    loadtext = () => {
        if (this.state.texts.length === 0) {
            return <h1>暂无评论</h1>
        } else {
            let texts1 = []
            // for (const item of this.state.texts) {
            //     texts1.push(< ul key={item.uname}>
            //         <li>{item.uname}</li>
            //         <li>{item.utext}</li>
            //     </ul >)
            // }
            texts1 = this.state.texts.map(i => {
                return (
                    <ul key={i.uname}>
                        <li>{i.uname}</li>
                        <li>{i.utext}</li>
                    </ul>
                )
            })
            return texts1
        }
    }

    render() {
        return (
            <div>
                <h1>留言板</h1>
                <p><input type="text" name="uname" onChange={this.formhandle} value={this.state.uname} /></p>
                <p><textarea name="utext" onChange={this.formhandle} value={this.state.utext} ></textarea></p>
                <button onClick={this.addText}>发表</button>
                <div>
                    {this.loadtext()}
                </div>
            </div>
        )
    }
}

export default leaveword