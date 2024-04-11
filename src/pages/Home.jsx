import React from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import jsonData from "./data.json";

const Container = styled.div`
  position: relative;
  margin: 0 auto;
  width: 390px;
  height: 98vh;
  background: #fff2c6;
`;
const Line = styled.div`
  position: relative;
  top: 5px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 95%;
  height: 98%;
  border: 3px solid #fff;
`;
const Logo = styled.div`
  margin-top: 20px;
`;
const Title = styled.div`
  color: #000;
  text-align: center;
  font-family: Inter;
  font-size: 1.5rem;
  font-weight: 600;
`;
const LetterWrapper = styled.div`
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 29rem;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const Letter = styled.div`
  display: flex;
  align-items: center;
  width: 200px;
  min-height: 90px;
  border-radius: 5px;
  border: 1px solid #cf4d4d;
  background: #fff;
  margin-top: 8px;
  color: #5f5f5f;
  font-family: Inter;
  font-size: 16px;
  text-align: center;
`;
const PostBox = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 365px;
  height: 247px;
  border-radius: 160px 160px 0px 0px;
  background: #cf4d4d;
  #postText {
    margin-top: 20px;
    color: #fff;
    font-family: Inter;
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  hr {
    width: 190px;
    height: 9px;
    background: #000;
    border: none;
  }
`;
const SendBtn = styled.div`
  margin-top: 10px;
  width: 190px;
  height: 110px;
  border: 1px solid #890505;
  background: #cf4d4d;

  #heart {
    text-align: center;
    color: #fff;
    font-size: 60px;
  }
  #goText {
    text-align: center;
    color: #fff;
    font-size: 14px;
    font-weight: 800;
  }
`;

const Home = () => {
  const dataList = jsonData;

  const navigate = useNavigate();
  const goSend = () => {
    navigate(`/send`);
  };

  return (
    <Container>
      <Line>
        <Logo>
          <img
            src={`${process.env.PUBLIC_URL}/images/logo.svg`}
            alt="logo"
            width="70px"
          />
        </Logo>
        <Title>
          🦁DDWU LIKE_LION🦁
          <br />
          LETTER
        </Title>
        <LetterWrapper>
          {dataList.map((e) => (
            <Letter
              key={e.postId}
              onClick={() => navigate(`/detail`, { state: e.postId })}
            >
              {e.title}
            </Letter>
          ))}
        </LetterWrapper>
        <PostBox>
          <div id="postText">POST</div>
          <hr></hr>
          <SendBtn onClick={goSend}>
            <div id="heart">❤️</div>
            <div id="goText">편지 보내러 가기</div>
          </SendBtn>
        </PostBox>
      </Line>
    </Container>
  );
};

export default Home;
