import Nav from "./navbar/Navbar";

export default function Container({ children }) {
  return (
    <>
      <Nav className="" />
      <div className="pt-5">{children}</div>
    </>
  );
}
