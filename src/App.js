import React from 'react';

class App extends React.Component {
  state = {
    count: 0,
  };

  add = () => {
    this.setState(current => ({ count: current.count + 1 }))
  };

  minus = () => {
    this.setState(current => ({ count: current.count - 1 }))
  };
  // [ Mounting ]
  constructor(props) {
    super(props)
    console.log("constructor")
  }
  // constructor 는 JavaScipt에서 class 생성 시 실행
  render() {
    console.log("render");
    return <div>
      <h1>count : {this.state.count}</h1>
      <button onClick={this.add}>Add</button>
      <button onClick={this.minus}>Minus</button>
    </div>
  }
  //render 는 최초 Mounting 되었을 때 실행
  //render 는 setState가 실행 될때 Updating됨
  //render 는 Mounting과 Updating 모두에 속함 
  componentDidMount() {
    console.log("componentDidMount");
  }
  // componentDidMount는 render 이후에 자동으로 실행

  // [ Updating ]
  componentDidUpdate(){
    console.log("componentDidUpdate");
  }
  //componentDidUpdate는 Updating 되어서 render 된 이후에 실행

  // [ Unmounting ]
  componentWillUnmount(){
    console.log("componentWillUnmount");
  }
  // componentWillUnmount는 컴포넌트를 벋어날 때 발생 
}

export default App;