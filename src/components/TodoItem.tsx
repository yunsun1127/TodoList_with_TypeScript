import React from "react";
import styled from "styled-components";

interface TodoItemProps {
  text: String; // todo의 내용
  checked: any; // 체크박스의 상태
  id: number; // todo의 고유 id
  onToggle: (e: any) => void; // 체크박스를 키고 끄는 함수
  onRemove: (e: any) => void; // 아이템을 삭제시키는 함수
}

const TodoItem: React.FC<TodoItemProps> = ({
  text,
  checked,
  id,
  onToggle,
  onRemove,
}) => {
  return (
    // 해당 id를 가진 데이터를 업데이트 하여 체크박스 on/off
    <TodoItems onClick={() => onToggle(id)}>
      <Remove
        onClick={(e) => {
          e.stopPropagation(); // 이벤트 확산 방지(onToggle이 실행되지 않기 위해)
          onRemove(id);
        }}
      >
        &times;
      </Remove>
      <div>
        <TodoText checked={checked}>{text}</TodoText>
      </div>
      {checked && <CheckMark>&#x2713;</CheckMark>}
    </TodoItems>
  );
};

export default TodoItem;

const Remove = styled.div`
  margin-right: 1rem;
  color: #e64980;
  font-weight: 600;
  opacity: 0; // 기본값은 투명하게
`;

const TodoItems = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.15s;
  user-select: none;

  &:hover {
    // TodoItems에 마우스 오버시 배경색 변경 및 Remove div 보이기
    background: #e3fafc;
    ${Remove} {
      opacity: 1;
    }
  }

  & + & {
    // TodoItems 사이에 윗 테두리
    border-top: 1px solid #f1f3f5;
  }
`;

const CheckMark = styled.div`
  font-size: 1.5rem;
  line-height: 1rem;
  margin-left: 1rem;
  color: #ffa2a2;
  font-weight: 800;
`;

const TodoText = styled.div<{ checked?: boolean }>`
  // boolean 형태의 checked를 props로 전달받음
  flex: 1;
  word-break: break-all;
  text-decoration: ${(props) =>
    props.checked
      ? "line-through"
      : "none"}; // 전달받은 props의 checked가 true이면 line-through
  color: ${(props) =>
    props.checked
      ? "#adb5bd"
      : "#000"}; // true이면 color 연하게 false이면 black
`;
