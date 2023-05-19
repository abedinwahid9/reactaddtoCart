import React, { useContext, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Item from "./Item";
import { itemContext } from "../context/ContextData";

export default function Items() {
  const item = useContext(itemContext);

  return (
    <Container className="pt-3">
      <Row>
        {item.map((curitem) => {
          return <Item key={curitem.id} value={curitem} />;
        })}
      </Row>
    </Container>
  );
}
