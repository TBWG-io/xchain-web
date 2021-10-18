import {
  TextDarkStyle,
  TextGray1Style,
  TextLinkStyle,
  TextUnderlineStyle,
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
import { useParams } from "react-router";
import styled from "styled-components";
import { PAGE } from "@constants/constants";

type Params = {
  section: string;
};

function Home() {
  const { section }: Params = useParams();

  const aboutRef = useRef(null as any);
  const dappRef = useRef(null as any);
  const validatorRef = useRef(null as any);

  useEffect(() => {
    console.log("section", section);

    switch (section) {
      case "about": {
        if (aboutRef && aboutRef.current) {
          aboutRef.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
        break;
      }
      case "dapp": {
        if (dappRef && dappRef.current) {
          dappRef.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
        break;
      }
      case "validator": {
        if (validatorRef && validatorRef.current) {
          validatorRef.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
        break;
      }
      default:
        break;
    }
  }, [section]);

  return (
    <>
      <LayoutMain currentTab={PAGE.HOME}>
        <MainPanelStyle>
          <Row>
            <Col xs={24}>
              <Row justify="center">
                <Col xs={23} sm={21} md={20} lg={18} xl={16} xxl={14}>
                  <br />
                  <Row gutter={[20, 0]}>
                    <Col>
                      <CustomTextLinkStyle
                        onClick={(e) => {
                          e.preventDefault();
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
                            สร้างระบบนิเวศของเทคโนโลยีบล็อกเชนให้พัฒนาและเติบโต
                            สามารถนำไปใช้งานเพื่อขับเคลื่อนธุรกิจ
                            และเศรษฐกิจของประเทศไทยได้
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
                            เพราะความหลากหลายจะช่วยขับเคลื่อนระบบนิเวศบล็อกเชนให้เติบโต
                            ผู้ตรวจสอบธุรกรรม หรือ Validator Node ของ xCHAIN
                            จึงประกอบไปด้วยสถาบันการศึกษา
                            องค์กรธุรกิจระดับเอนเทอร์ไพรส์ ผู้พัฒนาซอฟท์แวร์
                            และสตาร์ทอัพ
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
                            xCHAIN ตอบโจทย์ราคา Gas Fee ด้วย ค่าใช้จ่ายที่น้อยลง
                            และเพิ่มประสิทธิภาพของ Chain ด้วย Block Time
                            ที่เร็วขึ้น
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
                            ลดความผันผวนของราคา Gas ด้วยการพัฒนา Utililty Token
                            ของตัวเองในชื่อ <b>XTH</b>{" "}
                            ซึ่งมีวัตถุประสงค์สำหรับใช้ใน xCHAIN โดยเฉพาะ
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
                            เป็น Blockchain ที่เกิดจากความร่วมมือของ{" "}
                            <TextLinkStyle
                              size="16px"
                              weight={400}
                              href="https://www.tbwg.io/"
                              target="_blank"
                            >
                              Thailand Blockchain Working Group (TBWG)
                            </TextLinkStyle>{" "}
                            ที่ประกอบไปด้วยพันธมิตรหลักที่มีความเชี่ยวชาญด้านเทคโนโลยี
                            และการพัฒนาระบบองค์กร ได้แก่
                            <ol>
                              <li>
                                <TextLinkStyle
                                  size="16px"
                                  weight={400}
                                  href="https://www.jventures.co.th/"
                                  target="_blank"
                                >
                                  J Ventures
                                </TextLinkStyle>{" "}
                                ผู้เชี่ยวชาญด้านการลงทุน และส่งเสริมการ
                                Innovation เพื่อนำไปใช้จริงในระบบนิเวศธุรกิจ
                              </li>
                              <li>
                                <TextLinkStyle
                                  size="16px"
                                  weight={400}
                                  href="https://www.iamconsulting.co.th/"
                                  target="_blank"
                                >
                                  I AM Consulting
                                </TextLinkStyle>{" "}
                                บริษัทที่ปรึกษา
                                และพัฒนาระบบไอทีสำหรับองค์กรเอนเทอร์ไพรส์ในหลากหลายอุตสาหกรรม
                              </li>
                              <li>
                                <TextLinkStyle
                                  size="16px"
                                  weight={400}
                                  href="https://dome.cloud/"
                                  target="_blank"
                                >
                                  Dome Cloud
                                </TextLinkStyle>{" "}
                                ผู้ให้บริการโซลูชันด้านไอทีและบล็อกเชนครบวงจร
                              </li>
                              <li>
                                <TextLinkStyle
                                  size="16px"
                                  weight={400}
                                  href="https://www.satang.com/"
                                  target="_blank"
                                >
                                  Satang Corp
                                </TextLinkStyle>{" "}
                                เว็บเทรดคริปโตเคอร์เรนซี
                                ผู้เชี่ยวชาญด้านเทคโนโลยีบล็อกเชน
                                และพัฒนาเหรียญคริปโตของคนไทย
                              </li>
                            </ol>
                            <br />
                            xCHAIN เป็นระบบนิเวศบล็อกเชนที่พร้อมใช้งานจริง
                            โดยได้รับความร่วมมือจากพันธมิตรหลายภาคส่วนไม่ว่าจะเป็น
                            สถาบันการศึกษา องค์กรธุรกิจระดับเอนเทอร์ไพรส์
                            ผู้พัฒนาซอฟท์แวร์ และสตาร์ทอัพ เข้าร่วมเป็น
                            Validator Node เพื่อสร้าง Ecosystem
                            ของบล็อกเชนที่แข็งแกร่ง
                            <br />
                            <br />
                            ด้วยคุณสมบัติของเทคโนโลยีบล็อกเชนที่มีความปลอดภัยโปร่งใส
                            น่าเชื่อ และตรวจสอบได้ xCHAIN รองรับการพัฒนา DApps
                            (Decentralized applications)
                            สำหรับพาร์ทเนอร์ที่ต้องการสร้าง DApps
                            ของตัวเองบนระบบบล็อกเชน
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
                            xCHAIN ใช้ระบบ PoA (Proof of Authority) หรือ
                            ฉันทามติที่อ้างอิง “ชื่อเสียง” ของผู้ตรวจสอบธุรกรรม
                            (Validator Node) โดย Node
                            ที่ทำหน้าที่ตรวจสอบความถูกต้องของธุรกรรมบนบล็อกเชนประเภทนี้จำเป็นต้องเปิดเผยตัวตน
                            ทั้งนี้ในเฟสแรกของ xCHAIN จะใช้ Consensus Algorithm
                            แบบ Proof of Authority (PoA)
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
                          md={10}
                          style={{ textAlign: "right" }}
                        >
                          <TextGray1Style size="50px" weight={500}>
                            XTH Token
                          </TextGray1Style>
                          <br />

                          <TextGray1Style size="16px" weight={400}>
                            <TextGray1Style size="16px" weight={600}>
                              XTH Token คือ เหรียญอรรถประโยชน์ (Utility Token)
                            </TextGray1Style>{" "}
                            ของ xCHAIN เพื่อใช้ชําระค่า Gas fee
                            (เพื่อการยืนยันตรวจสอบธุรกรรม แอปพลิเคชันที่ใช้งานบน
                            xCHAIN) และสามารถนำ XTH
                            มาใช้เป็นตัวกลางในการรับชำระค่าใช้งานแอปพลิเคชันที่พัฒนาขึ้นทั้งนี้สามารถซื้อโทเคน
                            XTH ได้โดยใช้เงินบาท หรือ{" "}
                            <TextUnderlineStyle>JFIN Token</TextUnderlineStyle>{" "}
                            ก็ได้
                            <br />
                            <br />
                            <b>ภาพรวมเชิงเศรษฐศาสตร์</b>
                            <br />
                            <br />
                            ชื่อเหรียญ : XTH
                            <br />
                            จํานวนเหรียญทั้งหมด:
                            <br />
                            1,000,000,000 XTH
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
                        <Col xs={22} sm={22} md={10}>
                          <TextGray1Style size="16px" weight={400}>
                            บริการ Crypto Wallet สำหรับลูกค้า
                            และผู้ใช้บริการที่พัฒนา DApps ของตนเอง
                            หรือสร้างเหรียญของตนเองขึ้นมาบน xCHAIN
                            จะทำให้ผู้ใช้งานสามารถเข้าถึงและจัดการ Asset
                            ของตนเองได้ โดยไม่ต้องจดจำ Seed Pharse แต่ใช้การจำ
                            PIN และ Email ที่ใช้สมัครแทน
                            สอดคล้องกับประสบการณ์ของผู้ใช้งานที่เหมือนกับการใช้งานระบบอื่นๆที่มีอยู่เดิม
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
                            ตัวช่วยโอนเหรียญข้ามไปยังบล็อกเชน (Blockchain) อื่น
                            โดยเสียค่าธรรมเนียมในการทำธุรกรรมเป็นเหรียญ “XTH”
                            ซึ่งเป็นค่าธรรมเนียมในการทำธุรกรรมที่ราคาถูกเมื่อเทียบกับบล็อกเชนอื่นๆ
                            ในระบบ
                            จึงสะดวกสำหรับผู้ที่ต้องการจะโอนย้ายเหรียญไปมาในบล็อกเชนอื่น
                            โดยปัจจุบัน xBRIDGE รองรับการโอนข้ามบล็อกเชนทั้งหมด
                            3 บล็อกเชน ได้แก่ BITKUB Chain, BSC และ xCHAIN
                            โดยจะมีการพัฒนาไปสู่บล็อกเชนอย่างต่อเนื่องในอนาคต
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
                            เครื่องมือสำหรับนำเข้าข้อมูลจากระบบฐานข้อมูลที่ไม่ได้อยู่บนบล็อกเชนเข้ามาไว้บนเชน
                            เพื่อให้บริการแก่ผู้ใช้งาน เช่น ผู้พัฒนา DApps
                            ในระบบที่มีความจำเป็นต้องใช้งาน
                            สามารถแสดงผลข้อมูลจาก Off chain ได้อย่างถูกต้อง
                            ซึ่งใน Phase แรก
                            ปัจจุบันยังไม่มีค่าใช้จ่ายในการใช้งาน
                          </TextGray1Style>
                        </Col>
                      </Row>
                    </Col>

                    <Col xs={24}>
                      <Row justify="center" align="middle" gutter={[40, 20]}>
                        <Col xs={22} sm={22} md={{ span: 11, push: 11 }}>
                          <SectionAboutImgStyle width="380px" src={DAPP_04} />
                        </Col>
                        <Col xs={22} sm={22} md={{ span: 10, pull: 12 }}>
                          <TextGray1Style size="16px" weight={400}>
                            DApps สำหรับการเสนอขายเหรียญครั้งแรก
                            สำหรับผู้ที่ทำการ Issue เหรียญเรียบร้อย
                            และใช้ช่องทางนี้สำหรับขายเหรียญของตนเอง
                            สามารถชำระค่าขายเหรียญเป็นสกุลเงินดิจิทัลต่างๆ หรือ
                            เงินบาทได้
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

export default Home;
