import React from "react";
import styled from "styled-components";
import logo from '../assets/images/9f69a4feffc643fbe2ea7cb9c64588d951b2eee6.jpg'
import logo1 from '../assets/images/3ee3fdb8ca88f82932213239b44ed6565b993c4d (2).png'
import logo2 from '../assets/images/a5aa9d48e0c798aefd9864b3644aadc6a14a6b90 (1).png'



const BackgroundShape = styled.div`
  width: 591px;
  height: 400px;
  margin-top: 150px;
  border-radius: 70px;
  margin-left: -180px;
  background: linear-gradient(225deg, rgba(88, 137, 246, 0) 5.84%, #5889F6 100.35%);
  transform: rotate(-25deg);
  z-index: 0;

  @media (max-width: 768px) {
    width: 90%;
    height: 300px;
    margin: 50px auto;
    transform: rotate(-25deg);
    margin-top: 300px;
    margin-left: -200px;
  }
`;

const TextBlock = styled.div`
  max-width: 500px;
  margin: 0;
  margin-left: 40px;
  margin-bottom: 20px;
  margin-top: -440px;
  z-index: 1;

  @media (max-width: 768px) {
    margin: -200px auto 20px;
    text-align: left;
    margin-top: -300px;
    padding: 0 20px;
  }
`;

const Title = styled.h1`
  font-size: 45px;
  color: #211d70;
  margin-bottom: 20px;
  line-height: 0.7;

  @media (max-width: 768px) {
    font-size: 25px;
    line-height: 0.4;
  }
`;

const Description = styled.p`
  font-size: 30px;
  color: #211d70;
  margin-bottom: 18px;
  line-height: 0.5;

  @media (max-width: 768px) {
    font-size: 20px;
    line-height: 0.4;
  }
`;

const ImagesBlock = styled.section`
  width: 841px;
  height: 530px;
  border-radius: 70px;
  margin-left: 800px;
  margin-top: -440px;
  background: linear-gradient(42.57deg, rgba(88, 137, 246, 0) 5.84%, #5889F6 100.35%);
  transform: rotate(-25deg);
  z-index: 0;

  @media (max-width: 768px) {
    width: 90%;
    height: 300px;
    margin: 50px auto;
    transform: rotate(-25deg);
    padding: 40px 20px;
    flex-direction: column;
    margin-left: 230px;
    margin-top: -200px;
     z-index: 0;
  }
`;

const Us = styled.div`
  margin-left: 760px;
  margin-top: -230px;
 z-index: 1;
  @media (max-width: 768px) {
    margin: 0 auto;
    margin-top: -320px;
    margin-left: 330px;
    flex-direction: column;
    align-items: center;
    gap: 20px;
     z-index: 1;
  }
`;

const DiamondImage = styled.div`
  width: 180px;
  height: 180px;
  background: white;
  transform: rotate(45deg);
  margin-left: 80px;
  margin-top: -230px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
 z-index: 1;
  @media (max-width: 768px) {
    margin: 0;
    width: 100px;
    height: 100px;
    margin-left: -90px;
    margin-top: -260px;
     z-index: 1;
  }
`;

const DiamondImages = styled.div`
  width: 190px;
  height: 190px;
  background: white;
  transform: rotate(45deg);
  margin-left: 230px;
  margin-top: -130px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
 z-index: 1;
  @media (max-width: 768px) {
    margin: 0;
    width: 100px;
    height: 100px;
    margin-left: 15px;
    margin-top: 60px;
     z-index: 1;
  }
`;

const DiamondImagef = styled.div`
  width: 180px;
  height: 180px;
  background: white;
   transform: rotate(45deg);
  margin-left: 350px;
  margin-top: 10px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
 z-index: 1;
  @media (max-width: 768px) {
    margin: 0;
    width: 100px;
    height: 100px;
    margin-left: 20px;
    margin-top: 140px;
     z-index: 1;
  }
`;

const DiamondImagek = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
  margin-top: -50px;
  margin-left: -50px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  transform: rotate(-45deg);
 z-index: 1;
  @media (max-width: 768px) {
    margin: 0;
    width: 200px;
    height: 200px;
    transform: rotate(-45deg);
    margin-top: -50px;
    margin-left: -50px;
     z-index: 1;
  }
`;

const OurServices = () => {
  return (
    <>
      <BackgroundShape />
      <TextBlock>
        <Title>Доставим товар</Title>
        <Title>Быстро и безопасно!</Title>
        <Description>Доставка, хранение, складирование</Description>
        <Description>грузов любой сложности и объема!</Description>
      </TextBlock>

      <Us>
        <DiamondImages>
          <DiamondImagek src={logo} alt="Truck" />
        </DiamondImages>
        <DiamondImagef>
          <DiamondImagek src={logo1} alt="Warehouse" />
        </DiamondImagef>
        <DiamondImage>
          <DiamondImagek src={logo2} alt="Delivery" />
        </DiamondImage>
      </Us>

      <ImagesBlock />
    </>
  );
};

export default OurServices;