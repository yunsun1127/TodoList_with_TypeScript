import React from "react";
import styled from "styled-components";

interface FormProps {
  value: string;
  onChange: (e: any) => void;
  onCreate: (e: any) => void;
  onKeyPress: (e: any) => void;
}

const Form: React.FC<FormProps> = ({
  value,
  onChange,
  onCreate,
  onKeyPress,
}) => {
  return (
    <Forms>
      <Input value={value} onChange={onChange} onKeyPress={onKeyPress} />
      <CreateButton onClick={onCreate}>추가</CreateButton>
    </Forms>
  );
};

export default Form;

const Forms = styled.div`
  display: flex;
`;

const Input = styled.input`
  flex: 1;
  font-size: 1.25rem;
  outline: none;
  border: none;
  border-bottom: 1px solid #f78181;
`;

const CreateButton = styled.div`
  padding: 0.5rem 1rem;
  margin-left: 1rem;
  background: #f78181;
  border-radius: 3px;
  color: white;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background: #ff7878; // 마우스 올라갔을 때 더 진하게
  }
`;
