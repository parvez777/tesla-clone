import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "./Header.css";
const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div>
      <Navigation>
        <Logo>
          <a href="/">
            <img src="/images/logo.svg" alt="" />
          </a>
        </Logo>
        <Menu>
          <Link to="/models">Model S</Link>
          <Link to="/model3">Model 3</Link>
          <Link to="/modelx">Model X</Link>
          <Link to="/modely">Model Y</Link>
          <Link to="/solarroof">Solar Roof</Link>
          <Link to="/solarpanels">Solar Panels</Link>
        </Menu>
        <RightMenu>
          <a href="/shop">Shop</a>
          <a href="/account">Account</a>
          <CostomMenu onClick={() => setOpenMenu(true)}></CostomMenu>
          <SideMenu showMenu={openMenu}>
            <div className="close">
              <CloseMenu onClick={() => setOpenMenu(false)}> </CloseMenu>
            </div>
            <li>
              <Link to="/models">Model S</Link>
            </li>
            <li>
              <Link to="/model3">Model 3</Link>
            </li>
            <li>
              <Link to="/modelx">Model X</Link>
            </li>
            <li>
              <Link to="/modely">Model Y</Link>
            </li>
            <li>
              <Link to="/solarroof">Solar Roof</Link>
            </li>
            <li>
              <Link to="/solarpanels">Solar Panels</Link>
            </li>
          </SideMenu>
        </RightMenu>
      </Navigation>
    </div>
  );
};

export default Header;

const Navigation = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  min-height: 60px;
  align-items: center;
  padding: 0 25px;
  top: 0;
  left: 0;
  right: 0;
`;
const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  a {
    text-decoration: none;
    color: black;
    padding: 5px 15px;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 15px;
    transition: 0.3s;
  }
  a:hover {
    border-radius: 12px;
    background-color: rgba(223, 223, 223, 0.753);
    padding: 5px 15px;
  }
`;
const RightMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  a {
    text-decoration: none;
    color: black;
    padding: 5px 15px;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 15px;
    transition: 0.5s;
  }
  a:hover {
    border-radius: 12px;
    background-color: rgba(223, 223, 223, 0.753);
    padding: 5px 15px;
  }
`;
const Logo = styled.div`
  a img {
    width: 120px;
  }
`;
const CostomMenu = styled(MenuIcon)`
  cursor: pointer;
`;
const CloseMenu = styled(CloseIcon)`
  padding-top: 15px;
  padding-bottom: 30px;
  display: flex;
  justify-content: right;
  text-align: right;
  cursor: pointer;
  right: 0;
  color: black;
  position: absolute;
`;
const SideMenu = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: 290px;
  background: white;
  z-index: 16;
  list-style: none;
  display: flex;
  flex-direction: column;
  padding: 20px;
  justify-content: flex-start;
  text-align: start;
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }
  a {
    font-weight: 600;
    color: black;
    padding: 20px 0;
  }
  transition: 0.8s;
  transform: ${(props) =>
    props.showMenu ? "translateX(0)" : "translateX(100%)"};
`;
