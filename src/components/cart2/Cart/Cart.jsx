import React from "react";
import Items from "../items/Items";
import Container from "../Container";
import CartItem from "./CartItem";
import { Routes, Route } from "react-router-dom";

export default function Cart() {
  return (
    <>
      <Container>
        <Routes>
          <Route path="/" element={<Items />} />
          <Route path="cart" element={<CartItem />} />
        </Routes>
      </Container>
    </>
  );
}
