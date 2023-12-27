const User = ({ item, removeFunction, completeFunction }) => {
  return (
    <div>
      {/* item.isDone이 참일경우 */}
      {item.isDone ? (
        <div>
          <div key={item.id} className="component-style">
            {/* 작업의 제목을 표시하는 부분으로 작업 객체(item)의 title 속성값을 보여줌 */}
            {item.title}
            {/* 줄 바꿈 태그 */}
            <br />
            {/* 작업의 내용을 표시하는 부분으로, 작업 객체(item)의 body 속성값을 보여줌 */}
            {item.body}
            <div className="User-button">
              {/* 삭제하기 버튼임, 클릭 시 removeFunction 콜백 함수를 작업의 id와 함께 호출 */}
              <button onClick={() => removeFunction(item.id)}>삭제하기</button>
              {/* 취소 버튼임, 클릭 시 completeFunction 콜백 함수를 작업의 id와 함께 호출 */}
              <button onClick={() => completeFunction(item.id)}>취소</button>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div key={item.id} className="component-style">
            {item.title}
            <br />
            {item.body}
            <div className="User-button">
              {/* 삭제하기 버튼임, 클릭 시 removeFunction 콜백 함수를 작업의 id와 함께 호출 */}
              <button onClick={() => removeFunction(item.id)}>삭제하기</button>
              {/* 취소 버튼임, 클릭 시 completeFunction 콜백 함수를 작업의 id와 함께 호출 */}
              <button onClick={() => completeFunction(item.id)}>완료</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default User;
