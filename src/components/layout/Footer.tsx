import React from "react";
import styled from "styled-components";
import { Row, Col } from "antd";
import { TBWG_LOGO_02, X_CHAIN_LOGO_02 } from "@constants/asset";

function FooterMain() {
  return (
    <>
      <Row>
        <Col xs={24}>
          <BottomPanelStyle>
            <br />
            <br />
            <br />
            <Row
              justify="space-around"
              align="middle"
              gutter={[0, 40]}
              style={{ margin: 0 }}
            >
              <Col>
                <BaseImgStyle width="170px" src={X_CHAIN_LOGO_02} />
              </Col>
              <Col>
                <a rel="noreferrer" href="http://www.tbwg.io/" target="_blank">
                  <BaseImgStyle width="230px" src={TBWG_LOGO_02} />
                </a>
              </Col>
            </Row>
            <br />
          </BottomPanelStyle>
        </Col>
      </Row>
    </>
  );
}

const BottomPanelStyle = styled.div`
  padding: 20px;
  height: 100%;
  max-height: 200px;
`;

const BaseImgStyle = styled.img<{ width?: string }>`
  width: 100%;
  max-width: ${(props) => (props.width ? props.width : "430px")};
`;

export default FooterMain;
