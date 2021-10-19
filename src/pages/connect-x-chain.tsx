import React from "react";
import { TextGray1Style } from "@components/IStyleComponent";
import LayoutMain from "@components/layout/Layout";
import {
  BACKGROUND_3,
  CONNECT_STEP_1,
  CONNECT_STEP_2,
  CONNECT_STEP_3,
  CONNECT_STEP_4,
  CONNECT_STEP_5,
} from "@constants/asset";
import { Col, Row } from "antd";
import styled from "styled-components";
import { PAGE } from "@constants/constants";

function ConnectXChain() {
  return (
    <>
      <LayoutMain currentTab={PAGE.CONNECT_X_CHAIN} bgImg={BACKGROUND_3}>
        <MainPanelStyle>
          <Row>
            <Col xs={24}>
              <Row justify="center">
                <Col xs={22} sm={21} md={20} lg={18} xl={16} xxl={14}>
                  <br />
                  <br />

                  <Row gutter={[0, 30]}>
                    <Col xs={24}>
                      <TextGray1Style size={"40px"} weight={600}>
                        How to Connect xCHAIN
                      </TextGray1Style>
                    </Col>

                    <Col xs={24}>
                      <TextGray1Style size={"21px"} weight={400}>
                        1. Open MetaMask wallet on your web browsers.
                      </TextGray1Style>
                    </Col>

                    <Col xs={24}>
                      <Row justify="center" align="bottom" gutter={[40, 20]}>
                        <Col xs={22} sm={22} md={{ span: 11, push: 11 }}>
                          <SectionAboutImgStyle
                            width="377px"
                            src={CONNECT_STEP_1}
                          />
                        </Col>
                        <Col xs={22} sm={22} md={{ span: 11, pull: 11 }}>
                          <TextGray1Style size="12px" weight={300}>
                            Note : MetaMask is a software cryptocurrency wallet
                            used to interact with any blockchain. It allows
                            users to store and manage account keys, broadcast
                            transactions, send and receive cryptocurrencies and
                            tokens, and securely connect to decentralized
                            applications through a compatible web browser or the
                            mobile app's built-in browser.
                          </TextGray1Style>
                        </Col>
                      </Row>
                    </Col>

                    <Col xs={24}>
                      <TextGray1Style size={"21px"} weight={400}>
                        2. Click Network and select Custom RPC
                      </TextGray1Style>
                    </Col>

                    <Col xs={24}>
                      <Row justify="center" align="bottom" gutter={[40, 20]}>
                        <Col xs={22} sm={22} md={{ span: 11, push: 11 }}>
                          <SectionAboutImgStyle
                            width="377px"
                            src={CONNECT_STEP_2}
                          />
                        </Col>
                        <Col xs={22} sm={22} md={{ span: 11, pull: 11 }}></Col>
                      </Row>
                    </Col>

                    <Col xs={24}>
                      <TextGray1Style size={"21px"} weight={400}>
                        3. Enter xCHAIN information as follows in the input
                        fields and then click Save.
                      </TextGray1Style>
                    </Col>

                    <Col xs={24}>
                      <Row justify="center" align="bottom" gutter={[40, 20]}>
                        <Col xs={22} sm={22} md={{ span: 11, push: 11 }}>
                          <SectionAboutImgStyle
                            width="377px"
                            src={CONNECT_STEP_3}
                          />
                        </Col>
                        <Col xs={22} sm={22} md={{ span: 11, pull: 11 }}></Col>
                      </Row>
                    </Col>

                    <Col xs={24}>
                      <Row justify="center" align="bottom" gutter={[40, 20]}>
                        <Col xs={22} sm={22} md={{ span: 11, push: 11 }}>
                          <SectionAboutImgStyle
                            width="377px"
                            src={CONNECT_STEP_4}
                          />
                        </Col>
                        <Col xs={22} sm={22} md={{ span: 11, pull: 11 }}>
                          <TextGray1Style size="16px" weight={400}>
                            Network Name : xCHAIN
                            <br />
                            New RPC URL :{" "}
                            <CustomTextLinkStyle
                              href="https://rpc.xchain.asia/"
                              target="_blank"
                            >
                              https://rpc.xchain.asia
                            </CustomTextLinkStyle>
                            <br />
                            Chain ID : 35
                            <br />
                            Currency Symbol : XTH
                            <br />
                            Block Explorer URL :{" "}
                            <CustomTextLinkStyle
                              href="https://exp.xchain.asia/"
                              target="_blank"
                            >
                              https://exp.xchain.asia
                            </CustomTextLinkStyle>
                          </TextGray1Style>
                        </Col>
                      </Row>
                    </Col>

                    <Col xs={24}>
                      <TextGray1Style size={"21px"} weight={400}>
                        4. Congratulations! You have now successfully connected
                        to xCHAIN.
                      </TextGray1Style>
                    </Col>

                    <Col xs={24}>
                      <Row justify="center" align="bottom" gutter={[40, 20]}>
                        <Col xs={22} sm={22} md={{ span: 11, push: 11 }}>
                          <SectionAboutImgStyle
                            width="377px"
                            src={CONNECT_STEP_5}
                          />
                        </Col>
                        <Col xs={22} sm={22} md={{ span: 11, pull: 11 }}></Col>
                      </Row>
                    </Col>

                    <br />
                    <br />
                    <br />
                    <br />
                  </Row>
                </Col>
              </Row>
              <br />
              <br />
              <br />
            </Col>
          </Row>
        </MainPanelStyle>
      </LayoutMain>
    </>
  );
}

const MainPanelStyle = styled.div`
  color: var(--gray-color-1);
`;

const SectionAboutImgStyle = styled.img<{ width?: string }>`
  width: 100%;
  max-width: ${(props) => (props.width ? props.width : "430px")};
`;

const CustomTextLinkStyle = styled.a`
  color: var(--grey-color-1) !important;
  /* font-size: 12px; */
`;

export default ConnectXChain;
