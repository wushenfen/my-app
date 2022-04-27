import React from 'react';
// 生命周期

class C1 extends React.Component {

  // 1
  constructor() {
    super();
    console.log('1-构造方法');
  }
  state = {
    goods: '无',
    num: 0
  }

  render() {
    console.log('2-rander渲染');
    
    return (
      <div>
        <h1>生命周期{this.state.goods}</h1>
        <button>s</button>
      </div>
    )
  }

  componentDidMount() {
    console.log('3-componentDidMount组件挂载');
    setTimeout(() => {
      this.setState({
        goods: [123]
      })
    }, 3000)
  }

  componentWillUnmount() {
    console.log('5-卸载');
  }
}

export default C1;




  