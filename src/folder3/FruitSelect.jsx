import React, {useState} from "react";

function FruitSelect(props){
  const [value, setValue] = useState('grape');
  const [value2, setValue2] = useState(['pineapple,grape']);

  const handleChange = (event) => {
    setValue(event.target.value);
  }
  const handleChange2 = (event) => {
    // select box의 자식태그인 option 태그를 모두 가져옴
    const options= event.target.options;
    // 선택된 데이터를 저장하기 위한 배열
    let items = [];

    // option의 크기만큼 반복
    for (let i = 0; i < options.length; i++){
      //option 태그 중 선택된 태그인지 아닌지를 확인
    if(options[i].selected){
      //선택된 태그의 내용만 배열에 저장
      items.push(options[i].value);
      }
    }
    // setState() 함수를 통해서 state를 업데이트
    setValue2(items);
  }


  const handleSubmit = (event) => {
    alert(`선택한 과일 : ${value}`);
    event.preventDefault();
  }


  return(
    <form onSubmit={handleSubmit}>
      <div className={'my-3'}>
        <label for={'sel1'} className={'form-label'}>과일을 선택하세요 : </label>
        {/*select 사용 시 기본값 설정 value 속성으로 진행*/}
        {/*multiple 속성 사용 시 true/false 사용*/}
        {/*리액트에서 기본 html의 속성 중 속성명으로만 효과가 발생하는 속성에 대해서도 값을 제어하기 위해서 속성명={값} 형식으로 사용함*/}
        <select id={'sel1'} className={'form-select'} value={value} onChange={handleChange} >
          <option value={'apple'}>사과</option>
          <option value={'orange'}>오뤤지</option>
          <option value={'banana'}>빠나나</option>
          <option value={'grape'}>포도</option>
        </select>
        <div className={'my-3'}>
          <label for={'sel2'} className={'form-label'}>과일을 선택하세요 : </label>
            <select id={'sel2'} className={'form-select'} value={value2} onChange={handleChange2} multiple={true}>
            <option value={'pineapple'}>파인사과</option>
            <option value={'starfruit'}>스타후르츠</option>
            <option value={'banana'}>빠나나</option>
            <option value={'grape'}>포도</option>
          </select>

        </div>

      </div>
      <div className={'my-3'}>
        <button type={'submit'} className={'btn btn-info'}>제출</button>
      </div>
    </form>
  )
}

export default FruitSelect