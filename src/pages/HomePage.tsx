import { Row, Col, Select } from "antd";
import { Link } from "react-router-dom";

import LeftHooks from "./components/Left";
import RightHooks from "./components/Right";
import CenterHooks from "./components/Center";
import DiffResultHooks from "./components/DiffResult";

function HomePage() {
  return (
    <Row>
    <Col span={11}>
      <LeftHooks
        sheetname={leftsheetname}
        sheetlist={leftsheetlist}
        onFileSelectChange={(e) => fileHandler(e, "left")}
        onSheetSelectChange={(e) => onSheetFieldChange(e, "left")}
        hotTableComponentLeft={hotTableComponentLeft}
        sheetdata={leftsheetdata}
        fileRef={leftFileSelectRef}
      />
    </Col>
    <Col span={2}>
      <CenterHooks
        btntext={diffBtnText}
        onDiffBtnClick={(e) => {
          diff(leftsheetdata, rightsheetdata, hotTableComponentDiffResult);
        }}
        onSampleBtnClick={(e) => {
          setLeftSheetData(ExcelHelper.SampleDataLeft);
          setRightSheetData(ExcelHelper.SampleDataRight);
        }}
        onResetBtnClick={(e) => {
          // window.location.reload();
          leftFileSelectRef.current.value = "";
          rightFileSelectRef.current.value = "";
          setLeftSheetlist(null);
          setRightSheetlist(null);
          setLeftSheetname("Sheet1");
          setRightSheetname("Sheet1");
          setLeftSheetData(
            JSON.parse(JSON.stringify(ExcelHelper.BlankData(12, 8)))
          );
          setRightSheetData(
            JSON.parse(JSON.stringify(ExcelHelper.BlankData(12, 8)))
          );
        }}
      />
    </Col>
    <Col span={11}>
      <RightHooks
        sheetname={rightsheetname}
        sheetlist={rightsheetlist}
        onFileSelectChange={(e) => fileHandler(e, "right")}
        onSheetSelectChange={(e) => onSheetFieldChange(e, "right")}
        hotTableComponentRight={hotTableComponentRight}
        sheetdata={rightsheetdata}
        fileRef={rightFileSelectRef}
      />
    </Col>
    <Col span={24} style={{ textAlign: "center" }}>
      <DiffResultHooks
        hotTableComponentDiffResult={hotTableComponentDiffResult}
      />
    </Col>
  </Row>
  );
}

export { HomePage };