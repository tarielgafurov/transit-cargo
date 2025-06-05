import React from "react";
import styled, { keyframes } from "styled-components";
import logo1 from '../assets/images/02f2692c68890bfc384f57de403d0390de78d523.jpg'
import logo from '../assets/images/33e169ded93ef4682b8385ad3ab32533c2d517f8.jpg'

const grow1 = keyframes`
  from {
    width: 0;
    opacity: 0;
  }
  to {
    width: 372px;
    opacity: 1;
  }
`;

const grow2 = keyframes`
  from {
    width: 0;
    opacity: 0;
  }
  to {
    width: 319px;
    opacity: 1;
  }
`;

const grow3 = keyframes`
  from {
    width: 0;
    opacity: 0;
  }
  to {
    width: 272px;
    opacity: 1;
  }
`;

const Section = styled.section`
  display: flex;
  padding: 80px 60px;

  @media (max-width: 768px) {
    padding: 40px 20px;
    flex-direction: column;
  }
`;

const Linef = styled.div`
  height: 4px;
  background-color: rgba(69, 62, 199, 1);
  margin: 10px 0;
  opacity: 0;
  border-radius: 5px;
  margin-left: -60px;
  animation: ${grow1} 1s forwards;
  animation-delay: ${(props) => props.delay}s;
`;

const Lines = styled.div`
  height: 4px;
  background-color: rgba(0, 137, 203, 1);
  margin: 10px 0;
  opacity: 0;
  border-radius: 5px;
  margin-left: -60px;
  animation: ${grow2} 1s forwards;
  animation-delay: ${(props) => props.delay}s;
`;

const Linet = styled.div`
  height: 4px;
  background-color: rgba(69, 62, 199, 1);
  margin: 10px 0;
  opacity: 0;
  border-radius: 5px;
  margin-left: -60px;
  animation: ${grow3} 1s forwards;
  animation-delay: ${(props) => props.delay}s;
`;

const Content = styled.div`
  max-width: 700px;
  text-align: left;
`;

const Text = styled.p`
  color: #333;
  font-size: 25px;
  line-height: 1.1;
  margin: 0px 0;
  @media (max-width: 768px) {
  font-size: 18px;
  }
`;

const Ul= styled.div`
 @media (max-width: 768px) {
  margin-top: 350px;
  }
`;
const Us= styled.div`
 @media (max-width: 768px) {
  margin-top: -500px;
  }
`;

const Spacer = styled.div`
  height: 20px;
`;

const ImageWrapper = styled.div`
  width: 325px;
  height: 383px;
  margin-top: 50px;
  margin-left: 23px;
  border-radius: 25px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 25px;
  }

  @media (max-width: 768px) {
    margin-left: 0;
    margin-top:-30px;
    width: 217px;
    height: 255px;
  }
`;

const ImageWrappe = styled.div`
  width: 341px;
  height: 374px;
  margin-top: -270px;
  margin-left: 320px;
  border-radius: 25px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 25px;
  }

  @media (max-width: 768px) {
    margin-left: 145px;
    margin-top: -200px;
    width: 213px;
    height: 234px;
  }
`;

const AboutCompany = () => {
  return (
    <Section>
      <Content>
        <Linef delay={1} />
        <Lines delay={2} />
        <Linet delay={3} />
        <h2 style={{ color: '#000', marginBottom: '15px', fontSize: '35px' }}>О компании</h2>
        <Ul>
        <Text>Транспортная компания «Tranzit Cargo»</Text>
        <Text>предлагает оптимальные и комплексные</Text>
        <Text>решения для перевозок сборных грузов (LTL)</Text>
        <Text>и отдельными машинами (FTL) из Бишкека во</Text>
        <Text>все города России.</Text>

        <Spacer />

        <Text>Если Вам требуется доставить крупную</Text>
        <Text>партию груза — мы выделим под Ваш груз</Text>
        <Text>персональный транспорт в любое удобное</Text>
        <Text>для Вас время.</Text>
        </Ul>
      </Content>
      <Us> 
      <ImageWrapper>
        <img
          src={logo1}
          alt="Tranzit Cargo"
        />
      </ImageWrapper>

      <ImageWrappe>
        <img
        src={logo}
          alt="Tranzit Cargo"
        />
      </ImageWrappe>
      </Us> 
    </Section>
  );
};

export default AboutCompany;