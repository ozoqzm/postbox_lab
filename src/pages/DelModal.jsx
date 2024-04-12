import React from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  position: absolute;
  top: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 255px;
  height: 147px;
  border-radius: 20px;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;
const TextBox = styled.div`
  margin-top: 25px;
  color: #000;
  font-family: Inter;
  font-size: 19px;
  font-weight: 550;
  text-align: center;
`;
const BtnWrapper = styled.div`
  width: 11rem;
  margin-top: 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Btn = styled.div`
  width: 80px;
  height: 34.859px;
  background: #e2ffd5;
  color: #000;
  font-family: Inter;
  font-size: 16px;
  line-height: 2;
  text-align: center;
`;

const Modal = (props) => {
  const { isClose, post } = props;
  const navigate = useNavigate();

  const handleDelete = () => {
    // 로컬스토리지 데이터 삭제
    const savedLetters = JSON.parse(localStorage.getItem("letters")) || [];
    const updatedLetters = savedLetters.filter(
      (item) => item.postId !== parseInt(post.postId)
    );
    localStorage.setItem("letters", JSON.stringify(updatedLetters));

    // 홈 이동
    navigate("/");
  };

  return (
    <Container>
      <TextBox>
        "{post.title}" 편지
        <br /> 정말 삭제하실 거예요..? 🥹
      </TextBox>
      <BtnWrapper>
        <Btn onClick={handleDelete}>네</Btn>
        <Btn
          onClick={() => {
            isClose(false);
          }}
        >
          아뇨!!!
        </Btn>
      </BtnWrapper>
    </Container>
  );
};

export default Modal;
