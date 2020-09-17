import React from "react";
import styled from "styled-components";

interface TemplateProps {
  form?: any;
  children?: any;
}

const Template: React.FunctionComponent<TemplateProps> = ({
  form,
  children,
}) => {
  return (
    <Templates>
      <Title>TO DO LIST</Title>
      <FormWrapper>{form}</FormWrapper>
      <TodosWrapper>{children}</TodosWrapper>
    </Templates>
  );
};

export default Template;

const Templates = styled.div`
  background: white;
  width: 512px;
  margin: 0 auto; /* 페이지 중앙 정렬 */
  margin-top: 4rem;
`;

const Title = styled.div`
  padding: 2rem;
  font-size: 2.5rem;
  text-align: center;
  background: #f38f83;
  color: white;
`;

const FormWrapper = styled.section`
  padding: 1rem;
  border-bottom: 1px sloid #ffe4e1;
`;

const TodosWrapper = styled.section`
  min-height: 5rem;
`;
