import React from "react";
import ReactDOM from "react-dom";
// import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'
import axios from 'axios'

//函数组件
// const Main = () => <h3>我是首页</h3>
// const Login = () => <div>
//   <p>我是登录页</p>
//   <input type="text" />
//   <button>登录</button>
// </div>

// const App = () =>
// (<Router>
//   <h1>路由测试</h1>
//   <ul>
//     <li><Link to="/main">首页</Link></li>
//     <li><Link to="/login">登录</Link></li>
//   </ul>

//   <Routes>
//     <Route path="/login" element={<Login />}></Route>
//     <Route path="/main" element={<Main />}></Route>
//   </Routes>
// </Router>)

class App extends React.Component {
  state = {
    info: []
  }
  handle = async () => {
    let ret = await axios.get("https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata");
    console.log(ret.data.message);
    this.setState({
      info: ret.data.message
    })
  }
  render() {
    return (
      <div>
        <h3>测试 axios 发请求</h3>
        <button onClick={this.handle}>发送请求</button>
        {
          this.state.info.map(item => 
            <p key={item.goods_id}>
              <span>{item.goods_id}</span> <br/>
              <img alt={item.goods_id} src={item.image_src}></img>
            </p>
          )
        }
      </div>
    )
  }
}

var root = document.getElementById("root");
ReactDOM.render(<App />, root)


/**
// import React from 'react';
import ReactDOM from 'react-dom/client';
// import NumberCount from './test3';
// import Leaveword from './leaveword.js';
// import Hello from './Hello';
// import Parent from './Parent';
// import Parent2 from './Parent2';
// import Parent3 from './Parent3';
import C1 from './test8';

import "./index.css"
const root = ReactDOM.createRoot(document.getElementById('root'));

// 函数组件
// 类组件
// 独立js组件

// function hello(props) {
//   return <h1>world</h1>
// }

// let user = '武器大师'
// let age = 10

// let logined = true
// let loadd = (na) => {
//   if (logined) {
//     return "<u>欢迎" + na + "登录</u>"
//   } else {
//     return "<u>还没登录 亲</u>"
//   }
// }

// let div = (
//   <div className='box'>
//     <h1>条件渲染</h1>
//     {loadd("temo")}
//   </div>
// )

// root.render(
//   hello()
// )

// 循环
// const number = [1, 2, 3, 4, 5]
// let ok = number.map(num => <li> {num} </li>)

// let hero = [
//   {
//     hid: 1, name:"temo"
//   },
//   {
//     hid:2,name:"dema"
//   }
// ]
// let ok = hero.map(num => <li key={num.hid}> {num.name} </li>)

// function Box() {
//   function show(e) {
//     console.log(e);
//   }
//   return <button onClick={show}>按钮1</button>;
// }

// class Box2 extends React.Component {
//   show() {
//     console.log("show2");
//   }

//   render() {
//     return < div >
//       我是个组件2,可以重复利用
//       <button onClick={this.show}>点我试试</button>
//     </div >
//   }
// }

// root.render(
//   new Box2().render()
// )


// root.render(
//   <Hello name="武器大师" age={18} bobit={['砍树', '跑步', '听歌']} funs={() => {
//     console.log("光头强");
//   }} tag={<b>标签</b>}/>
// )

root.render(
  <C1/>
)
 */