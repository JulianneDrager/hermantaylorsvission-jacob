import React from "react";
import PurchaseStyle from "./css/PurchaseStyle.module.css";
import { Col } from "react-bootstrap";
import BtnCs from "../ui/BtnCs";
import useMediaQuery  from "../UseMediaQuery";

const PcDesktop = () => {
  const h1Style = PurchaseStyle.h1Style;
  const PurchaseCol = PurchaseStyle.PurchaseCol;
  const divBtn = PurchaseStyle.divBtn;
  const matchesMW800 = useMediaQuery("(min-width:600px)");

  return (
    <>
      <Col className={PurchaseCol}>
        <div className={divBtn}>
          <BtnCs>
            <h1 className={h1Style}>
              Purchase {!matchesMW800 && <br />} Your Copy
            </h1>
            from amazon
          </BtnCs>
        </div>
      </Col>
    </>
  );
};

export default PcDesktop;
