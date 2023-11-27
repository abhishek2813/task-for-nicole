import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Column({text,type}) {
    let styled = {};
    if(type==="primary"){
       styled = {
        backgroundColor:"#e8cdd2",
        color:"red"
       }
    }else if(type==="danger"){
        styled = {
            backgroundColor:"#ecedca",
            color:"#ccce53"
           }
    }else if(type==="warning"){
        styled = {
            backgroundColor:"#cfd5ea",
            color:"#2047d3"
           }
    }else if(type==="success"){
        styled = {
            backgroundColor:"#cde7ce",
            color:"#1bc122"
           }
    }
  return (
    <div>
      <Row className="my-3">
        <Col>
        <div style={styled} className={`p-3 rounded`}>{text}</div>
        {/* <Button variant={`outline-${type}`}>{text}</Button> */}
        </Col>
      </Row>
    </div>
  );
}

export default Column;
