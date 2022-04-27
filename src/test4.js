import React from "react";
class Mytxt extends React.Component {
    state = {
        stname: "temo",
        area: "湖南省",
        city: "湘潭",
        ok: true
    }

    //文本框处理事件
    // handle = e => {
    //     this.setState({
    //         stname: e.target.value
    //     })
    // }

    // cityHandle = e => {
    //     this.setState({
    //         city: e.target.value
    //     })
    // }

    //统一管理
    formhandle = (e) => {
        let t = e.target
        let name = t.name
        let value = t.type === 'checkbox' ? t.checked : t.value
        
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div>
                <h1>表单测试</h1>
                <p><input type='text' onChange={this.formhandle} name='stname' value={this.state.stname}></input></p>
                <textarea onChange={this.formhandle} defaultValue={this.state.area} name='area'></textarea>
                <select onChange={this.formhandle} value={this.state.city} name='city'>
                    <option>湘潭</option>
                    <option>武汉</option>
                    <option>东北</option>
                </select>
                <input onChange={this.formhandle} type='checkbox' checked={this.state.ok} name='ok'></input>
            </div>
        )
    }
}

export default Mytxt
