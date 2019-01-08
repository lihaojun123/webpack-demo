import React from 'react';
import Tab from '@/conponents/tab/tab.js'
class Container extends React.Component {
    constructor(props) {
      super(props)
      this.state={
          name:"react=>hello world"
      }
      this.bindEvent();
    }
    bindEvent(){
         this.add=this.add.bind(this);
    }
    componentDidMount() {
        this.setState({
            name:"挂载时改变了，数据"
        })
    }
    add(){
        new Tab({
          id: "2222",
          name: "xxx11"
        })
        this.setState({
             name:"点击更新了内容。。。。。。"
        })
    }
    render() {
      return (
        <div className='container'>
             <div className='demo'>{this.state.name}</div>
             <p onClick={this.add}>点击</p>
        </div>
      );
    }
  }

  export default Container

