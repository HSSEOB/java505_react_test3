import React, {useState} from "react";

let realResult = 0

function Calculator() {
  let [num1, setNum1] = useState(0);
  let [num2, setNum2] = useState(0);
  let [result, setResult] = useState(0);


  let plus=() => {
    result = num1+ num2
    realResult = result;
  }


  const minus=() => {
    result = num1- num2
    realResult = result;
  }

  const multiple= () => {
    result = num1* num2
    realResult = result;
  }

  const divide= () => {
    result = num1/ num2
    realResult = result;
  }

  const submit=() =>{
    setResult(result => realResult)
    console.log(result);

    return result;

  }









  return (
    <div className={"row"}>
      <div className={"col-sm-4 mx-auto border rounded-3"}>
        <div className={"my-3"}>
          <label for={"num1"}>첫번째 숫자 : </label>
          <input type={"int"} id={"num1"} name={"num1"} className={"form-control"} placeholder={"첫번째 숫자를 입력하세요"} value={num1} onChange={(e)=>setNum1(parseInt((e).target.value))} />
        </div>
        <div className={"my-3"}>
          <label for={"num2"}>두번째 숫자 : </label>
          <input type={"int"} id={"num2"} name={"num2"} className={"form-control"} placeholder={"두번째 숫자를 입력하세요"} value={num2}  onChange={(e)=>setNum2(parseInt((e).target.value))}/>
        </div>
        <hr/>
        <div className={"my-3 d-flex justify-content-between"}>
          <button type={"button"} className={"btn btn-primary"} onClick={plus}> + </button>
          <button type={"button"} className={"btn btn-primary"} onClick={minus}> - </button>
          <button type={"button"} className={"btn btn-primary"} onClick={multiple}> * </button>
          <button type={"button"} className={"btn btn-primary"} onClick={divide}> / </button>
          <button type={"button"} className={"btn btn-info"} onClick={submit} > = </button>
        </div>
        <hr/>
        <div className={"my-3"}>
          <label for={"result"}>계산 결과 : </label>
          <input type={"text"} id={"result"} name={"result"} className={"form-control"} value={result} />
        </div>
      </div>
    </div>
  );
}

export default Calculator;