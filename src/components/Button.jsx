// Button이라는 함수형 컴포넌트를 정의
// 컴포넌트는 clickAddButtonHandler와 children이라는 두 개의 props를 받고
// clickAddButtonHandler: 이 함수는 버튼이 클릭될 때 호출될 콜백 함수
// children: 이 컴포넌트가 감싸는 요소(여기서는 버튼) 안에 포함된 텍스트를 의미
const Button = ({ clickAddButtonHandler, children }) => {
  // 이 컴포넌트는 <button> 요소를 반환
  // onClick 속성에는 clickAddButtonHandler 함수가 전달되어 버튼이 클릭될 때 이 함수가 호출됨
  // 버튼 내부의 내용은 {children}을 통해 동적으로 처리되고 이는 컴포넌트가 감싸는 부분에 어떠한 들어가는 역할을 함
  return <button onClick={clickAddButtonHandler}>{children}</button>;
};

// 정의한 Button 컴포넌트를 외부에서 사용할 수 있도록 내보낸다.
export default Button;
