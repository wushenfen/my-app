import React from 'react';

class Box3 extends React.Component {
    show(e) {
        console.log(e);
    }

    render() {
        return < div >
            我是独立文件哦!
            <button onClick={this.show}>点我试试</button>
        </div >
    }
}

export default Box3