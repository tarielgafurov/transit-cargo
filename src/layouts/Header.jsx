import React from 'react'
import styled from 'styled-components'
import { BsFillTelephoneFill } from "react-icons/bs"
import { GiHamburgerMenu } from "react-icons/gi" 
import logo from '../assets/images/Group.png'


const HeaderStyled = styled.header`
  width: 100%;
  padding: 10px 0px;
  display: flex;
  justify-content: space-around; 
  align-items: center;
  background: #fff;
  flex-wrap: nowrap;
  @media (max-width: 660px) {
    width: 95%;
    margin: 0 auto;
    justify-content: space-between;
  }
`
  

const LoginContener = styled.div`
    width: 200px;
    

  img {
    max-width: 100px;
    height: auto;
  }
`

const NavigateContainer = styled.nav`
  width: 650px;
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > p {
    margin: 0 5px;
    font-size: 16px;
    white-space: nowrap;

    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }

  @media (max-width: 660px) {
    display: none;
  }
`


const IconTelefon = styled(BsFillTelephoneFill)`
  margin-right: 5px;
`


const BurgerMenu = styled(GiHamburgerMenu)`
  font-size: 28px;
  cursor: pointer;
  display: none;

  @media (max-width: 660px) {
    display: block;
  }
`



const Header = () => {
  return (
    <HeaderStyled>
      <LoginContener>
        <img src={logo} alt="Логотип" />
      </LoginContener>

      <NavigateContainer>
        <p>Главная</p>
        <p>О компании</p>
        <p>Услуги</p>
        <p>FAQ</p>
        <p>Контакты</p>
        <p><IconTelefon /> +996 500 625 585</p>
      </NavigateContainer>

      <BurgerMenu />
    </HeaderStyled>
  )
}


export default Header
