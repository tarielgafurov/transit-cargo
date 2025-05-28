import React from "react";
import styled, { keyframes } from "styled-components";

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Wrapper = styled.div`
  background-color: #a7c4f2;
  padding: 40px 20px;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 32px;
  font-weight: bold;
  color: white;
  margin-bottom: 30px;
`;

const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 70px;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
  }
`;

const Card = styled.div`
  width: 280px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  opacity: 0;
  animation: ${fadeInUp} 0.6s ease forwards;
  animation-delay: ${props => props.$delay || "0s"};
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.25);
    cursor: pointer;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 16px;
`;

const Icon = styled.div`
  font-size: 24px;
`;

const CardTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-top: 10px;
`;

const Duration = styled.p`
  color: #555;
  margin-top: 4px;
`;

function Services() {
  return (
    <Wrapper>
      <Title>Наши услуги</Title>
      <CardsContainer>
        <Card $delay="0s">
          <Image
            src="https://news.transinfo.by/uploads/posts/2021-04/1617973332_man-tgx-2020-1.jpg"
            alt="Грузовик"
          />
          <CardContent>
            <Icon>🚛</Icon>
            <CardTitle>ГРУЗОВЫЕ ПЕРЕВОЗКИ</CardTitle>
            <Duration>от 15 до 20 дней</Duration>
          </CardContent>
        </Card>

        <Card $delay="0.2s">
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu-B1v6OOe9TbldnvAbX6QBBk7VDkKvMjkOQ&s"
            alt="Самолёт"
          />
          <CardContent>
            <Icon>✈️</Icon>
            <CardTitle>АВИА ПЕРЕВОЗКИ</CardTitle>
            <Duration>от 7 до 10 дней</Duration>
          </CardContent>
        </Card>

        <Card $delay="0.4s">
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfjzSic0udWMRbcuFd71RdAR1fro3zZbmsqQ&s"
            alt="Поезд"
          />
          <CardContent>
            <Icon>🚆</Icon>
            <CardTitle>ЖЕЛЕЗНО-ДОРОЖНЫЕ ПЕРЕВОЗКИ</CardTitle>
            <Duration>от 15 до 20 дней</Duration>
          </CardContent>
        </Card>
      </CardsContainer>
    </Wrapper>
  );
}

export default Services;