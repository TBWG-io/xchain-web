import {
  TextDarkStyle,
  TextGray1Style,
  TextLinkStyle,
} from "@components/IStyleComponent";
import LayoutMain from "@components/layout/Layout";
import {
  ABOUT_X_CHAIN_ICON_01,
  ABOUT_X_CHAIN_ICON_02,
  DAPP_01,
  DAPP_02,
  DAPP_03,
  DAPP_04,
  NODE_DOME,
  NODE_IAM,
  NODE_JVC,
  NODE_SATANG,
  NODE_TBWG,
  PARTNER_CAMT,
  PARTNER_ICF,
  PARTNER_KMITL,
  PARTNER_SYMP,
  PARTNER_TERA,
  PARTNER_UP,
  WHY_X_CHAIN_ICON_01,
  WHY_X_CHAIN_ICON_02,
  WHY_X_CHAIN_ICON_03,
  WHY_X_CHAIN_ICON_04,
  XTH_TOKEN_ICON,
  X_CHAIN_LANDING_01,
  X_CHAIN_LANDING_02,
} from "@constants/asset";
import { Col, Row } from "antd";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { PAGE } from "@constants/constants";

function English() {
  const aboutRef = useRef(null as any);
  const dappRef = useRef(null as any);
  const validatorRef = useRef(null as any);

  return (
    <>
      <LayoutMain currentTab={PAGE.ENGLISH}>
        <MainPanelStyle>
          <Row>
            <Col xs={24}>
              <Row justify="center">
                <Col xs={23} sm={21} md={20} lg={18} xl={16} xxl={14}>
                  <br />
                  <Row gutter={[20, 0]}>
                    <Col>
                      <CustomTextLinkStyle
                        onClick={() => {
                          if (aboutRef && aboutRef.current) {
                            aboutRef.current.scrollIntoView({
                              behavior: "smooth",
                              block: "start",
                            });
                          }
                        }}
                      >
                        About
                      </CustomTextLinkStyle>
                    </Col>
                    <Col>
                      <CustomTextLinkStyle
                        onClick={() => {
                          if (dappRef && dappRef.current) {
                            dappRef.current.scrollIntoView({
                              behavior: "smooth",
                              block: "start",
                            });
                          }
                        }}
                      >
                        Dapps
                      </CustomTextLinkStyle>
                    </Col>
                    <Col>
                      <CustomTextLinkStyle
                        onClick={() => {
                          if (validatorRef && validatorRef.current) {
                            validatorRef.current.scrollIntoView({
                              behavior: "smooth",
                              block: "start",
                            });
                          }
                        }}
                      >
                        Validator Nodes
                      </CustomTextLinkStyle>
                    </Col>
                    <Col>
                      <CustomTextLinkStyle
                        href="https://exp.xchain.asia/"
                        target="_blank"
                      >
                        XTH Mainnet
                      </CustomTextLinkStyle>
                    </Col>
                  </Row>
                  <br />

                  <Row gutter={[0, 30]}>
                    <Col
                      xs={0}
                      sm={0}
                      md={0}
                      lg={24}
                      style={{ position: "relative", textAlign: "right" }}
                    >
                      <LandingImgStyle src={X_CHAIN_LANDING_01} />
                      <AbsoluteTextStyle size={"50px"} weight={600}>
                        <div>Start your</div>
                        <div>blockchain era</div>
                      </AbsoluteTextStyle>
                    </Col>

                    <Col xs={24} sm={24} md={24} lg={0}>
                      <Row justify="center">
                        <Col xs={22}>
                          <TextGray1Style size={"50px"} weight={600}>
                            <div>Start your</div>
                            <div>blockchain era</div>
                          </TextGray1Style>
                        </Col>
                        <Col xs={22}>
                          <LandingImgStyle src={X_CHAIN_LANDING_01} />
                        </Col>
                      </Row>
                    </Col>

                    <Col xs={24} style={{ textAlign: "center" }}>
                      <TextGray1Style size={"50px"} weight={600}>
                        Why xCHAIN
                      </TextGray1Style>
                    </Col>

                    <Col xs={24}>
                      <br />
                      <Row justify="center" gutter={[40, 20]}>
                        <Col xs={22} sm={22} md={8}>
                          <Section1PanelStyle>
                            <Section1IconStyle>
                              <Section1ImgStyle src={WHY_X_CHAIN_ICON_01} />
                            </Section1IconStyle>
                            <AbsoluteTextLeftStyle size="80px" weight={600}>
                              01
                            </AbsoluteTextLeftStyle>
                          </Section1PanelStyle>
                        </Col>
                        <Col xs={22} sm={22} md={11}>
                          <TextGray1Style size="25px" weight={500}>
                            Thailand Blockchain ecosystem
                          </TextGray1Style>
                          <br />
                          <br />
                          <TextGray1Style size="16px" weight={400}>
                            xChain builds, fosters and develops an ecosystem of
                            blockchain with the aim of driving Thailand business
                            and economy.
                          </TextGray1Style>
                        </Col>
                      </Row>
                    </Col>
                    <Col xs={24}>
                      <br />
                      <br />
                      <Row justify="center" gutter={[40, 20]}>
                        <Col xs={22} sm={22} md={{ span: 8, push: 11 }}>
                          <Section1PanelStyle>
                            <Section1IconStyle>
                              <Section1ImgStyle src={WHY_X_CHAIN_ICON_02} />
                            </Section1IconStyle>
                            <AbsoluteTextRightStyle size="80px" weight={600}>
                              02
                            </AbsoluteTextRightStyle>
                          </Section1PanelStyle>
                        </Col>
                        <Col xs={22} sm={22} md={{ span: 11, pull: 8 }}>
                          <TextGray1Style size="25px" weight={500}>
                            Collaboration with well-known national validator
                            nodes
                          </TextGray1Style>
                          <br />
                          <br />
                          <TextGray1Style size="16px" weight={400}>
                            As diversity will enhance growth of blockchain
                            ecosystem, xCHAIN has engaged various types of
                            validator node, such as, academic institutions,
                            enterprises, software developers and start-ups.
                          </TextGray1Style>
                        </Col>
                      </Row>
                    </Col>
                    <Col xs={24}>
                      <br />
                      <br />
                      <Row justify="center" gutter={[40, 20]}>
                        <Col xs={22} sm={22} md={8}>
                          <Section1PanelStyle>
                            <Section1IconStyle>
                              <Section1ImgStyle src={WHY_X_CHAIN_ICON_03} />
                            </Section1IconStyle>
                            <AbsoluteTextLeftStyle size="80px" weight={600}>
                              03
                            </AbsoluteTextLeftStyle>
                          </Section1PanelStyle>
                        </Col>
                        <Col xs={22} sm={22} md={11}>
                          <TextGray1Style size="25px" weight={500}>
                            Low cost with high performance
                          </TextGray1Style>
                          <br />
                          <br />
                          <TextGray1Style size="16px" weight={400}>
                            xCHAIN offers lower gas fee as well as faster block
                            time which will increase chain capability.
                          </TextGray1Style>
                        </Col>
                      </Row>
                    </Col>
                    <Col xs={24}>
                      <br />
                      <br />
                      <Row justify="center" gutter={[40, 20]}>
                        <Col xs={22} sm={22} md={{ span: 8, push: 11 }}>
                          <Section1PanelStyle>
                            <Section1IconStyle>
                              <Section1ImgStyle src={WHY_X_CHAIN_ICON_04} />
                            </Section1IconStyle>
                            <AbsoluteTextRightStyle size="80px" weight={600}>
                              04
                            </AbsoluteTextRightStyle>
                          </Section1PanelStyle>
                        </Col>
                        <Col xs={22} sm={22} md={{ span: 11, pull: 8 }}>
                          <TextGray1Style size="25px" weight={500}>
                            Low inflation
                          </TextGray1Style>
                          <br />
                          <br />
                          <TextGray1Style size="16px" weight={400}>
                            Gas price will be less inflated as xCHAIN has
                            developed its own utility token known as XTH. This
                            XTH is created specifically for utilization in
                            xCHAIN.
                          </TextGray1Style>
                        </Col>
                      </Row>
                    </Col>

                    <Col xs={24}>
                      <Row justify="center">
                        <Col xs={22} sm={22} md={22} lg={19}>
                          <TextGray1Style
                            size={"50px"}
                            weight={600}
                            ref={aboutRef}
                          >
                            About xCHAIN
                          </TextGray1Style>
                        </Col>
                      </Row>
                    </Col>

                    <Col xs={24}>
                      <br />
                      <br />
                      <Row justify="center" gutter={[40, 20]}>
                        <Col xs={22} sm={22} md={11}>
                          <SectionAboutImgStyle src={ABOUT_X_CHAIN_ICON_01} />
                        </Col>
                        <Col xs={22} sm={22} md={11}>
                          <TextGray1Style size="16px" weight={400}>
                            <TextGray1Style size="16px" weight={600}>
                              xCHAIN
                            </TextGray1Style>{" "}
                            is a blockchain technology built up from a
                            collaboration of{" "}
                            <TextLinkStyle
                              size="16px"
                              weight={400}
                              href="https://www.tbwg.io/"
                              target="_blank"
                            >
                              Thailand Blockchain Working Group (TBWG)
                            </TextLinkStyle>{" "}
                            which comprises main partners who have expertise in
                            technology and organizational system development as
                            follows:
                            <ol>
                              <li>
                                <TextLinkStyle
                                  size="16px"
                                  weight={400}
                                  href="https://www.jventures.co.th/"
                                  target="_blank"
                                >
                                  J Ventures
                                </TextLinkStyle>
                                {": "}
                                Investment expert who encourages an
                                implementation of innovation in business
                                ecosystem.
                              </li>
                              <li>
                                <TextLinkStyle
                                  size="16px"
                                  weight={400}
                                  href="https://www.iamconsulting.co.th/"
                                  target="_blank"
                                >
                                  I AM Consulting
                                </TextLinkStyle>
                                {": "}
                                Consulting firm who provides advice on
                                development of IT systems for enterprises in
                                various industries.
                              </li>
                              <li>
                                <TextLinkStyle
                                  size="16px"
                                  weight={400}
                                  href="https://dome.cloud/"
                                  target="_blank"
                                >
                                  Dome Cloud
                                </TextLinkStyle>
                                {": "}
                                Comprehensive IT and blockchain solutions
                                provider.
                              </li>
                              <li>
                                <TextLinkStyle
                                  size="16px"
                                  weight={400}
                                  href="https://www.satang.com/"
                                  target="_blank"
                                >
                                  Satang Corp
                                </TextLinkStyle>
                                {": "}
                                Operator of cryptocurrency trading website who
                                is expert in blockchain technology and creates
                                the company’s own crypto coin.
                              </li>
                            </ol>
                            <br />
                            xCHAIN is a ready-to-use blockchain ecosystem which
                            operates in cross-sector collaboration with
                            partners, such as, academic institutions,
                            enterprises, software developers, and start-ups.
                            Having these partners joining as validator node,
                            this collaboration will hence strengthen xCHAIN
                            ecosystem.
                            <br />
                            <br />
                            With transparent, reliable and verifiable nature of
                            blockchain technology, xCHAIN supports DApps
                            (Decentralized Applications) development for
                            partners who wish to build own DApps on blockchain
                            system.
                          </TextGray1Style>
                        </Col>
                      </Row>
                    </Col>

                    <Col xs={24}>
                      <br />
                      <br />
                      <Row justify="center" gutter={[40, 20]}>
                        <Col xs={22} sm={22} md={{ span: 11, push: 11 }}>
                          <SectionAboutImgStyle
                            width="480px"
                            src={ABOUT_X_CHAIN_ICON_02}
                          />
                        </Col>
                        <Col xs={22} sm={22} md={{ span: 11, pull: 11 }}>
                          <TextGray1Style size="25px" weight={500}>
                            PoA (Proof of Authority)
                          </TextGray1Style>
                          <br />
                          <br />
                          <TextGray1Style size="16px" weight={400}>
                            xCHAIN uses PoA (Proof of Authority) or consensus
                            that is based on “reputation” of validator node.
                            Identify disclosure is required for the validator
                            node who is accountable for verifying validity of
                            transactions on this blockchain. xCHAIN will,
                            therefore, apply PoA (Proof of Authority) as
                            consensus algorithm in the first phase.
                          </TextGray1Style>
                        </Col>
                      </Row>
                    </Col>

                    <Col xs={24}>
                      <br />
                      <br />
                      <Row justify="center" gutter={[40, 20]}>
                        <Col xs={22} sm={22} md={11}>
                          <SectionAboutImgStyle
                            width="305px"
                            src={XTH_TOKEN_ICON}
                          />
                        </Col>
                        <Col
                          xs={22}
                          sm={22}
                          md={11}
                          style={{ textAlign: "right" }}
                        >
                          <TextGray1Style size="50px" weight={500}>
                            XTH Token
                          </TextGray1Style>
                          <br />
                          <TextGray1Style size="16px" weight={400}>
                            XTH token is xCHAIN’s utility token made for paying
                            gas fee as well as verifying any transaction on the
                            application operated on xCHAIN. Moreover, the XTH
                            token can be used as medium token in payment for the
                            use of application(s) developed thereon. Users are
                            able to buy XTH token using Thai Baht or{" "}
                            <TextLinkStyle
                              size="16px"
                              weight={400}
                              href="https://www.jfincoin.io/"
                              target="_blank"
                            >
                              JFIN Token
                            </TextLinkStyle>
                            {"."}
                            <br />
                            <br />
                            <br />
                            <TextGray1Style size="31px" weight={500}>
                              Economic Perspective
                            </TextGray1Style>
                            <br />
                            Token Name : XTH
                            <br />
                            Total Token Amount : 1,000,000,000 XTH
                          </TextGray1Style>
                        </Col>
                      </Row>
                    </Col>

                    <Col xs={24}>
                      <br />
                      <br />
                      <Row justify="center" gutter={[40, 20]}>
                        <Col xs={22} sm={22} md={{ span: 11, push: 11 }}>
                          <SectionAboutImgStyle
                            width="407px"
                            src={X_CHAIN_LANDING_02}
                          />
                        </Col>
                        <Col xs={22} sm={22} md={{ span: 11, pull: 11 }}>
                          <TextGray1Style size="25px" weight={500}>
                            xCHAIN Testnet
                          </TextGray1Style>
                          <br />
                          <br />
                          <TextGray1Style size="16px" weight={400}>
                            Chain Id: 36
                            <br />
                            RPC:{" "}
                            <TextLinkStyle
                              size="16px"
                              weight={400}
                              href="https://rpc-testnet.xchain.asia/"
                              target="_blank"
                            >
                              https://rpc-testnet.xchain.asia
                            </TextLinkStyle>
                            <br />
                            WS: ws://ws-testnet.xchain.asia
                            <br />
                            Explore Url:{" "}
                            <TextLinkStyle
                              size="16px"
                              weight={400}
                              href="https://exp-testnet.xchain.asia/"
                              target="_blank"
                            >
                              https://exp-testnet.xchain.asia
                            </TextLinkStyle>
                            <br />
                            Coin : XTH
                            <br />
                            Token Request :{" "}
                            <TextLinkStyle
                              size="16px"
                              weight={400}
                              href="https://faucet.xchain.asia/"
                              target="_blank"
                            >
                              https://faucet.xchain.asia
                            </TextLinkStyle>
                          </TextGray1Style>
                        </Col>
                      </Row>
                    </Col>

                    <Col xs={24}>
                      <Row justify="center">
                        <Col
                          xs={22}
                          sm={22}
                          md={22}
                          lg={19}
                          style={{ textAlign: "right" }}
                        >
                          <TextGray1Style
                            size={"47px"}
                            weight={600}
                            ref={dappRef}
                          >
                            xCHAIN's DApps
                          </TextGray1Style>
                        </Col>
                      </Row>
                    </Col>

                    <Col xs={24}>
                      <br />
                      <br />
                      <Row justify="center" align="middle" gutter={[40, 20]}>
                        <Col xs={22} sm={22} md={11}>
                          <SectionAboutImgStyle width="400px" src={DAPP_01} />
                        </Col>
                        <Col xs={22} sm={22} md={9}>
                          <TextGray1Style size="16px" weight={400}>
                            A wallet app that allows cryptocurrency users to
                            store and retrieve their digital token. XWallet
                            stores the public and/or private keys for token
                            transactions.
                          </TextGray1Style>
                        </Col>
                      </Row>
                    </Col>

                    <Col xs={24}>
                      <Row justify="center" align="middle" gutter={[40, 20]}>
                        <Col xs={22} sm={22} md={{ span: 11, push: 11 }}>
                          <SectionAboutImgStyle width="400px" src={DAPP_02} />
                        </Col>
                        <Col xs={22} sm={22} md={{ span: 10, pull: 12 }}>
                          <TextGray1Style size="16px" weight={400}>
                            A platform that allows the transfer of tokens and/or
                            cryptocurrency from one chain to another. Both
                            chains can have different protocols, but the bridge
                            provides a compatible way to interoperate securely
                            on both sides.
                          </TextGray1Style>
                        </Col>
                      </Row>
                    </Col>

                    <Col xs={24}>
                      <Row justify="center" align="middle" gutter={[40, 20]}>
                        <Col xs={22} sm={22} md={11}>
                          <SectionAboutImgStyle width="400px" src={DAPP_03} />
                        </Col>
                        <Col xs={22} sm={22} md={10}>
                          <TextGray1Style size="16px" weight={400}>
                            A platform provides smart contracts with information
                            from the outside world. It is the layer that
                            queries, verifies, and authenticates external data
                            sources, usually via trusted APIs and then relays
                            that information.
                          </TextGray1Style>
                        </Col>
                      </Row>
                    </Col>

                    <Col xs={24}>
                      {/* <br />
                      <br /> */}
                      <Row justify="center" align="middle" gutter={[40, 20]}>
                        <Col xs={22} sm={22} md={{ span: 11, push: 11 }}>
                          <SectionAboutImgStyle width="380px" src={DAPP_04} />
                        </Col>
                        <Col xs={22} sm={22} md={{ span: 10, pull: 12 }}>
                          <TextGray1Style size="16px" weight={400}>
                            A Special Token Launch Platforms created by XChain
                            that focused only on Token  that ready to utilized.
                            XLaunch provide platform to allow investors to buy
                            new token project from Corporate that is required to
                            raise funds via an IXO process.
                          </TextGray1Style>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <br />
              <br />
              <br />
            </Col>

            <Col xs={24}>
              <SectionPartnerPanelStyle ref={validatorRef}>
                <Row>
                  <Col xs={24} style={{ textAlign: "center" }}>
                    <TextDarkStyle size="35px" weight={500}>
                      Validator Nodes
                    </TextDarkStyle>
                  </Col>
                </Row>
                <br />
                <br />
                <Row justify="center">
                  <Col>
                    <BaseImgStyle width="292px" src={NODE_TBWG} />
                  </Col>
                </Row>
                <br />
                <br />
                <Row
                  justify="center"
                  align="middle"
                  gutter={[80, 30]}
                  style={{ margin: 0 }}
                >
                  <Col>
                    <BaseImgStyle width="225px" src={NODE_IAM} />
                  </Col>
                  <Col>
                    <BaseImgStyle width="90px" src={NODE_JVC} />
                  </Col>
                  <Col>
                    <BaseImgStyle width="120px" src={NODE_DOME} />
                  </Col>
                  <Col>
                    <BaseImgStyle width="147px" src={NODE_SATANG} />
                  </Col>
                </Row>
                <br />
                <br />
              </SectionPartnerPanelStyle>
            </Col>

            <Col xs={24}>
              <SectionPartnerPanelStyle>
                <Row>
                  <Col xs={24} style={{ textAlign: "center" }}>
                    <TextDarkStyle size="35px" weight={500}>
                      Partners
                    </TextDarkStyle>
                  </Col>
                </Row>
                <br />
                <br />
                <Row
                  justify="center"
                  align="middle"
                  gutter={[80, 30]}
                  style={{ margin: 0 }}
                >
                  <Col>
                    <BaseImgStyle width="128px" src={PARTNER_KMITL} />
                  </Col>
                  <Col>
                    <BaseImgStyle width="82px" src={PARTNER_CAMT} />
                  </Col>
                  <Col>
                    <BaseImgStyle width="74px" src={PARTNER_UP} />
                  </Col>
                </Row>
                <br />
                <br />
                <Row
                  justify="center"
                  align="middle"
                  gutter={[80, 30]}
                  style={{ margin: 0 }}
                >
                  <Col>
                    <BaseImgStyle width="203px" src={PARTNER_SYMP} />
                  </Col>
                  <Col>
                    <BaseImgStyle width="105px" src={PARTNER_ICF} />
                  </Col>
                  <Col>
                    <BaseImgStyle width="203px" src={PARTNER_TERA} />
                  </Col>
                </Row>
                <br />
                <br />
              </SectionPartnerPanelStyle>
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

const LandingImgStyle = styled.img`
  width: 100%;
  max-width: 706px;
`;

const AbsoluteTextStyle = styled.span<{ size?: string; weight?: number }>`
  font-size: ${(props) => (props.size ? props.size : "var(--base-font-size)")};
  font-weight: ${(props) => (props.weight ? props.weight : 400)};
  position: absolute;
  text-align: left;
  top: 0;
  left: 0;
`;

const AbsoluteTextLeftStyle = styled.span<{ size?: string; weight?: number }>`
  font-size: ${(props) => (props.size ? props.size : "var(--base-font-size)")};
  font-weight: ${(props) => (props.weight ? props.weight : 400)};
  position: absolute;
  top: -30px;
  left: -20px;
  text-shadow: rgb(10 189 240 / 30%) 3px 3px 0px,
    rgb(254 1 1 / 30%) -3px -3px 0px;
  color: rgba(46, 5, 233, 1);
`;

const AbsoluteTextRightStyle = styled.span<{ size?: string; weight?: number }>`
  font-size: ${(props) => (props.size ? props.size : "var(--base-font-size)")};
  font-weight: ${(props) => (props.weight ? props.weight : 400)};
  position: absolute;
  top: -30px;
  right: -70px;
  text-shadow: rgb(10 189 240 / 30%) 3px 3px 0px,
    rgb(254 1 1 / 30%) -3px -3px 0px;
  color: rgba(46, 5, 233, 1);
`;

const Section1PanelStyle = styled.div`
  position: relative;
  padding-left: 20px;
  width: 234px;
  height: 234px;
`;

const Section1IconStyle = styled.div`
  background-color: white;
  width: 234px;
  height: 234px;
  line-height: 234px;
  text-align: center;
  border-radius: 5px;
`;

const Section1ImgStyle = styled.img`
  width: 100%;
  max-width: 110px;
`;

const SectionAboutImgStyle = styled.img<{ width?: string }>`
  width: 100%;
  max-width: ${(props) => (props.width ? props.width : "430px")};
`;

const BaseImgStyle = styled.img<{ width?: string }>`
  width: 100%;
  max-width: ${(props) => (props.width ? props.width : "430px")};
`;

const SectionPartnerPanelStyle = styled.div`
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.9);
`;

const CustomTextLinkStyle = styled.a`
  color: var(--grey-color-1) !important;
  font-size: 12px;

  :hover {
    color: #8130b8 !important;
  }
`;

export default English;
