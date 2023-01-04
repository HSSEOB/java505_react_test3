import React from "react";
import {Button} from "react-bootstrap";

class CountButton extends React.Component{
  constructor(props) {
    super(props);

    // state 객체 생성
    this.state={
      count:0,
    }

    // 객체 멤버 변수 count 선언
    this.count = this.state.count;
  }

  //메서드 두개 생성
  countUp=() =>{
    console.log("이전 this.count:" + this.count);
    this.count = this.count + 1
    // setState()함수를 실행햐이지만 state의 값이 수정되고,  state의 값이 수정되면 render()함수가 재실행됨
    this.setState({
      count: this.count
    })
    console.log(" + this.count:" + this.count);
  };

  countDown=() =>{
    console.log("이전 this.count:" + this.count);
    this.count = this.count - 1
    this.setState({
      count: this.count
    })
    console.log(" - this.count:" + this.count);

  };

  render() {
    return (
      <div>
        <label className={"form-laber"}>count: <span>{this.count}</span></label><br/>
        <Button variant={"outline-primary"} onClick={this.countUp}>+</Button>
        <Button variant={"outline-danger"} onClick={this.countDown}>-</Button>
      </div>
    );
  }
}

export default CountButton;