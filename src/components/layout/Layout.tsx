import React, { ReactNode } from "react";
import styled, { css } from "styled-components";
import { Layout, Affix, Row, Col, BackTop } from "antd";
import HeaderMain from "./Header";
import FooterMain from "./Footer";

const { Content } = Layout;

type Props = {
  children?: ReactNode;
  currentTab?: string;
  bgImg?: string;
};

function LayoutMain(props: Props) {
  const { children, currentTab, bgImg } = props;

  return (
    <LayoutStyle className="layout" style={{ overflow: "hidden" }}>
      <LayoutStyle>
        {/* <AffixStyle>
          <HeaderMain currentTab={currentTab} />
        </AffixStyle> */}
        <BackTop />
        <MainPanelStyle bgImg={bgImg}>
          <HeaderMain currentTab={currentTab} />
          <Row>
            <Col xs={24}>
              <Content>{children}</Content>
            </Col>
          </Row>
          <FooterMain />
        </MainPanelStyle>
      </LayoutStyle>
    </LayoutStyle>
  );
}

const AffixStyle = styled(Affix)`
  z-index: 10;
`;

const MainPanelStyle = styled.div<{ bgImg?: string }>`
  ${(props) =>
    props.bgImg
      ? css`
          background-image: url(${props.bgImg});
          background-repeat: no-repeat;
          background-origin: border-box;
          background-attachment: fixed;
          background-position: center;
          background-size: cover;

          image-rendering: crisp-edges;
          image-rendering: -moz-crisp-edges; /* Firefox */
          image-rendering: -o-crisp-edges; /* Opera */
          image-rendering: -webkit-optimize-contrast; /* Webkit (non-standard naming)*/
          -ms-interpolation-mode: nearest-neighbor;
        `
      : css`
          background: none;
        `}
`;

const LayoutStyle = styled(Layout)`
  background: transparent;
`;

export default LayoutMain;
