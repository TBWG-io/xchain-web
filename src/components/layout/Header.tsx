import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { Menu, Row, Col } from "antd";
import { useHistory } from "react-router-dom";
import SubMenu from "antd/lib/menu/SubMenu";
import { X_CHAIN_LOGO_02 } from "@constants/asset";
import { ROUTE } from "@constants/routes";
import { PAGE } from "@constants/constants";

type Props = {
  currentTab?: string;
};

function HeaderMain(props: Props) {
  const { currentTab } = props;

  const history = useHistory();

  const [tab, setTab] = useState("");

  useEffect(() => {
    handleMenu();
  }, [currentTab]);

  function handleMenu() {
    if (currentTab) {
      setMenuTab(currentTab);
    }
  }

  function setMenuTab(value: string) {
    if (tab !== value) {
      setTab(value ?? "");
    }
  }

  function handleMenuClick(e: any) {
    switch (e.key) {
      case PAGE.HOME: {
        history.push(ROUTE.HOME);
        break;
      }
      case PAGE.CONNECT_X_CHAIN: {
        history.push(ROUTE.CONNECT_X_CHAIN);
        break;
      }
      case PAGE.ENGLISH: {
        history.push(ROUTE.ENGLISH);
        break;
      }

      default:
        break;
    }
  }

  return (
    <>
      <Row justify="center">
        <Col xs={22} sm={21} md={20} lg={18} xl={16} xxl={14}>
          <Row
            justify="space-between"
            style={{ marginTop: "10px", marginBottom: "10px" }}
          >
            <Col xs={21} md={12}>
              <LogoStyle src={X_CHAIN_LOGO_02} />
            </Col>
            <Col xs={3} md={12} style={{ paddingTop: "10px" }}>
              <MenuStyle
                onClick={handleMenuClick}
                selectedKeys={[tab]}
                mode="horizontal"
                direction="rtl"
                triggerSubMenuAction="click"
              >
                <Menu.Item key={PAGE.HOME}>xCHAIN</Menu.Item>
                {/* <SubMenu key="2" title="About">
                  <Menu.ItemGroup>
                    <Menu.Item key="21">About</Menu.Item>
                    <Menu.Item key="22">Dapps</Menu.Item>
                    <Menu.Item key="23">Validator Nodes</Menu.Item>
                    <Menu.Item key="24">XTH Mainnet</Menu.Item>
                  </Menu.ItemGroup>
                </SubMenu> */}
                <Menu.Item key={PAGE.CONNECT_X_CHAIN}>Connect xCHAIN</Menu.Item>
                <Menu.Item key={PAGE.ENGLISH}>English</Menu.Item>
              </MenuStyle>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}

const LogoStyle = styled.img`
  width: 100%;
  max-width: 152px;

  image-rendering: crisp-edges;
  image-rendering: -moz-crisp-edges; /* Firefox */
  image-rendering: -o-crisp-edges; /* Opera */
  image-rendering: -webkit-optimize-contrast; /* Webkit (non-standard naming)*/
  -ms-interpolation-mode: nearest-neighbor; /* IE (non-standard property) */
`;

const MenuStyle = styled(Menu)`
  .ant-menu-submenu {
    &-selected {
      color: #ffffff !important;
    }
  }
`;

export default HeaderMain;
