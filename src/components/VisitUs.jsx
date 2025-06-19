import React from 'react';
import styled from 'styled-components';
import foto from '../assets/images/570a8b9c30e37f67154a34342c9787975a1c5b0e.png';
import { FaWhatsapp, FaInstagram, FaFacebookF } from "react-icons/fa";

const ContactWrapper = styled.div`
  width: 100%;
  height: 579px;
  position: relative;
  background: rgba(101, 145, 244, 0.7);
  margin-top: 3600px;
  padding: 40px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    height: 892px;
    margin-top: 3234px;
    padding: 20px;
  }
`;

const Title = styled.h2`
  font-family: Montserrat;
  font-weight: 500;
  font-size: 36px;
  line-height: 100%;
  text-align: center;
  color: rgba(255, 255, 255, 1);

  @media (max-width: 768px) {
    font-size: 30px;
    width: 386px;
    text-align: center;
    margin: 0 auto;
  }
`;

const Titls = styled.h3`
  font-family: Montserrat;
  font-weight: 500;
  font-size: 25px;
  text-align: center;
  margin-left: -15px;
  color: rgba(255, 255, 255, 1);

  @media (max-width: 768px) {
    font-size: 20px;
    margin: 0 auto;
    margin-top: 300px;
    margin-left:-220px;
  }
`;

const Trew = styled.div`
  font-family: Montserrat;
  font-weight: 600;
  font-size: 20px;
  color: rgba(33, 29, 112, 1);
  
  @media (max-width: 768px) {
    margin-top: 90px;
    margin-left: 60px;
  }
`;

const Tres = styled.div`
  font-family: Montserrat;
  font-weight: 600;
  font-size: 20px;
  color: rgba(0, 137, 203, 1);
 
  @media (max-width: 768px) {
    margin-top: 90px;
    margin-left: 60px;
  }
`;

const Wrapper = styled.div`
  margin-top: -80px;
  margin-left: 5px;
  padding: 60px 20px;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 20px;
    justify-content: flex-start;
    margin-top: -320px;
    margin-left: -60px
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  gap: 10px;
  color: white;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 150%;
  max-width: 400px;

  @media (max-width: 768px) {
    font-size: 16px;
    width: 297px;
    margin-left: 20px;
    margin-top: 320px;
  }
`;

const Ul = styled.div`
  width: 794px;
  height: 88px;
  margin-left: 323px;
  margin-top: -30px;

  @media (max-width: 768px) {
    width: 386px;
    margin: 0 auto;
  }
`;

const Us = styled.div`
  width: 334px;
  height: 303px;
  margin-left: 400px;
  margin-top: -60px;

  @media (max-width: 768px) {
    width: 388px;
    height: auto;
    margin-left: 20px;
    margin-top: 20px;
  }
`;

const IconWrapper = styled.div`
  width: 168px;
  height: 74px;
  margin-top: -300px;

  @media (max-width: 768px) {
    margin-top: 10px;
    margin-left: -20px;
    display: flex;
    gap: 23px;
  }
`;

const IconBase = styled.div`
  position: absolute;
  width: 65px;
  height: 64px;
  color: rgba(255, 255, 255, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin-top: 240px;
  margin-left: 70px;

  @media (max-width: 768px) {
    position: relative;
    margin: 0;
    width: 28px;
    height: 28px;
    background: rgba(255, 255, 255, 1);
    color: rgba(88, 137, 246, 1);
  }
`;

const WhatsAppIcon = styled(IconBase)`
  left: 377px;
  @media (max-width: 768px) {
    left: auto;
  }
`;

const InstagramIcon = styled(IconBase)`
  left: 408px;
  @media (max-width: 768px) {
    left: auto;
  }
`;

const FacebookIcon = styled(IconBase)`
  left: 439px;
  @media (max-width: 768px) {
    left: auto;
  }
`;

const Ut = styled.div`
  width: 153px;
  height: 24px;
  margin-left: 60px;
  margin-top: 80px;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    margin-left: 20px;
    margin-top: 20px;
  }
`;

const ImageWrappe = styled.div`
  width: 480px;
  height: 330px;
  margin-top: -300px;
  margin-left: 879px;
  border-radius: 20px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 25px;
  }

  @media (max-width: 768px) {
    width: 388px;
    height: 257px;
    margin-left: -10px;
    margin-top: -670px;
  }
`;

const VisitUs = () => {
  return (
    <ContactWrapper>
      <Ul>
        <Title>Приезжайте к нам в офис, и мы поможем</Title>
        <Title>определиться с выбором</Title>
      </Ul>
      <Ut><Trew>ASIA</Trew><Tres>CARGO.</Tres></Ut>
      <Us>
        <Titls>Контактная информация</Titls>
        <Wrapper>
          <InfoContainer>
            <div>Время работы:<br />Пн–Пт 08:00 – 20:00</div>
            <div>Адрес:<br />г Бишкек, ул. Абдырахманова, д. 86</div>
            <div>Телефон:<br />+996 708-11-26-01</div>
            <div>Email:<br />tranzit_cargo@gmail.com</div>
          </InfoContainer>
        </Wrapper>

        <IconWrapper>
          <WhatsAppIcon><FaWhatsapp size={16} /></WhatsAppIcon>
          <InstagramIcon><FaInstagram size={16} /></InstagramIcon>
          <FacebookIcon><FaFacebookF size={16} /></FacebookIcon>
        </IconWrapper>
      </Us>
      <ImageWrappe>
        <img src={foto} alt="Tranzit Cargo" />
      </ImageWrappe>
    </ContactWrapper>
  );
};

export default VisitUs;