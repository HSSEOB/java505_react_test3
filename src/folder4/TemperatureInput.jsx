import React from "react";

const scaleNames = {
  c: '섭씨',
  f: '화씨',
};

const styles = {
  margin : {
    marginLeft: 30,
    marginTop: 50
  }
}

function TemperatureInput(props){
  // input 태그의 값이 변경 이벤트 발생 시 동작할 함수, event 객체를 매개변수로 가져옴

  const handleChange =(e) => {
    // 부모 컴포넌트에서 전달받은 props 중 이름이 onTemperatureChange인 함수를 실행
    // onTemperatureChange 함수는 부모 컴포넌트의 state 값을 수정하는 함수
    props.onTemperatureChange(e.target.value);
  };
  return(
    <fieldset style={styles.margin}>
      <legend>
        온도를 입력해 주세요 (단위 : {scaleNames[props.scale]})
      </legend>
      {/* onChange는 input 태그의 값 변경 시 발생하는 이벤트 */}
      <input value={props.temperature} onChange={handleChange}/>
    </fieldset>
  )
}

export default TemperatureInput;