import React from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Modal from "./DelModal";

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 390px;
  height: 98vh;
  background: #fffef1;
`;
const BackBtn = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
`;
const Title = styled.div`
  width: 10rem;
  height: 2.5rem;
  border-bottom: 1px solid #000;
  color: #000;
  margin-top: 90px;
  font-family: Inter;
  font-size: 1.25rem;
  font-weight: 700;
  text-align: center;
`;
const ContentBox = styled.div`
  margin-top: 25px;
  width: 18rem;
  height: 27rem;
  border-radius: 5px;
  background: #ffebc5;
`;
const UpdateBtn = styled.div`
  width: 120px;
  height: 50px;
  border-radius: 20px;
  background: #ffe4ec;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  text-align: center;
  color: #000;
  font-family: Inter;
  font-size: 24px;
  font-weight: 500;
  line-height: 2;
`;
const DeleteBtn = styled.div`
  width: 120px;
  height: 50px;
  border-radius: 20px;
  background: #dbf6ff;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  text-align: center;
  color: #000;
  font-family: Inter;
  font-size: 24px;
  font-weight: 500;
  line-height: 2;
`;
const BtnWrapper = styled.div`
  width: 16rem;
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Detail = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(`/`);
  };

  // 모달창 상태
  const [modal, setModal] = useState(false);

  return (
    <Container>
      <BackBtn onClick={goBack}>
        <img
          src={`${process.env.PUBLIC_URL}/images/backBtn.svg`}
          alt="back"
          width="35px"
        />
      </BackBtn>
      <Title>제목</Title>
      <ContentBox>어쩌고저쩌고</ContentBox>
      <BtnWrapper>
        <UpdateBtn>수정하기</UpdateBtn>
        <DeleteBtn onClick={() => setModal(true)}>삭제하기</DeleteBtn>
        {modal ? <Modal isClose={setModal} postId={3} /> : null}
      </BtnWrapper>
    </Container>
  );
};

export default Detail;
