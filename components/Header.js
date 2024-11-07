import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import Image from "next/image";
import brandLogo from "../public/images/brand-logo.png";
import { Button } from "react-bootstrap";

const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="header">
        <div className="topNav bg-[#3A0CA3] text-[#ffffff] py-2">
          <Container>
            <div className="flex justify-between md:flex-row flex-col">
              <p className="flex gap-1">
                <svg
                  width="14"
                  height="18"
                  viewBox="0 0 14 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13 7.4C13 10.9346 7 17 7 17C7 17 1 10.9346 1 7.4C1 3.86538 3.68629 1 7 1C10.3137 1 13 3.86538 13 7.4Z"
                    stroke="white"
                    strokeWidth="1.2"
                  />
                  <path
                    d="M7 8.2001C7.41422 8.2001 7.75 7.84194 7.75 7.4001C7.75 6.95827 7.41422 6.6001 7 6.6001C6.58578 6.6001 6.25 6.95827 6.25 7.4001C6.25 7.84194 6.58578 8.2001 7 8.2001Z"
                    fill="#2B2B2B"
                    stroke="white"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Rezilla, 18 Grattan St, Brooklyn
              </p>
              <div>
                <ul className="flex justify-between gap-5">
                  <li>+1 206-214-2298</li>
                  <li>support@rezilla.com</li>
                </ul>
              </div>
            </div>
          </Container>
        </div>
        <Container>
          <Navbar expand="md" className="w-full">
            <Navbar.Brand className="md:hidden" href="#home">
              <div>
                <Image
                  src={brandLogo}
                  alt="Picture of the author"
                  width={140}
                  height={50}
                />
              </div>
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              onClick={handleShow}
            />

            <Offcanvas
              show={show}
              onHide={handleClose}
              responsive="md"
              className="custom-nav offCanvar_mobile"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>
                  <div>
                    <Image
                      src={brandLogo}
                      alt="Picture of the author"
                      width={140}
                      height={50}
                    />
                  </div>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Navbar id="basic-navbar-nav " className="w-full">
                <Offcanvas.Body className="custom-body w-full justify-between">
                  <Nav className="">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">About</Nav.Link>
                    <Nav.Link href="#link">Listings </Nav.Link>
                    <Nav.Link href="#link">Services </Nav.Link>
                    <Nav.Link href="#link">Blogs</Nav.Link>
                  </Nav>
                  <div className="brand_logo">
                    <Image
                      src={brandLogo}
                      alt="Picture of the author"
                      width={140}
                      height={50}
                    />
                  </div>

                  <div className="log_item flex items-center gap-2">
                    <div className="flex gap-3 ">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.5 14.5C5.5 12.0147 7.51472 10 10 10C12.4853 10 14.5 12.0147 14.5 14.5"
                          stroke="#2B2B2B"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                        />
                        <path
                          d="M9.99999 10.0001C11.4912 10.0001 12.7 8.79131 12.7 7.3001C12.7 5.80893 11.4912 4.6001 9.99999 4.6001C8.50878 4.6001 7.29999 5.80893 7.29999 7.3001C7.29999 8.79131 8.50878 10.0001 9.99999 10.0001Z"
                          stroke="#2B2B2B"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19Z"
                          stroke="#2B2B2B"
                          strokeWidth="1.6"
                        />
                      </svg>

                      <p>Login/Register</p>
                    </div>

                    <div className="">
                      <button className="flex items-center gap-1.5 bg-[#3A0CA3] text-[#FFFFFF] py-2 px-4 rounded-lg text-xs">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M19.7625 7.6376L10.3875 0.137598C10.2767 0.0488457 10.1389 0.000488281 9.99689 0.000488281C9.85489 0.000488281 9.71712 0.0488457 9.60627 0.137598L0.23127 7.6376C0.130133 7.71874 0.0567341 7.82932 0.0212437 7.95403C-0.0142467 8.07874 -0.0100718 8.2114 0.0331901 8.33364C0.076452 8.45587 0.156659 8.56162 0.262698 8.63624C0.368738 8.71086 0.495359 8.75065 0.62502 8.7501H1.87502V19.3751C1.87502 19.5409 1.94087 19.6998 2.05808 19.817C2.17529 19.9342 2.33426 20.0001 2.50002 20.0001H15V18.7501H12.5V13.1251C12.5 12.9593 12.4342 12.8004 12.317 12.6832C12.1998 12.5659 12.0408 12.5001 11.875 12.5001H8.12502C7.95926 12.5001 7.80029 12.5659 7.68308 12.6832C7.56587 12.8004 7.50002 12.9593 7.50002 13.1251V18.7501H3.12502V8.7501H13.75V7.5001H2.40627L10 1.4251L17.5938 7.5001H17.5C17.3343 7.5001 17.1753 7.56595 17.0581 7.68316C16.9409 7.80037 16.875 7.95934 16.875 8.1251V11.8751H18.125V8.7501H19.375C19.5041 8.74935 19.6299 8.70863 19.7349 8.63353C19.84 8.55843 19.9192 8.45263 19.9616 8.33069C20.0041 8.20875 20.0078 8.07664 19.9721 7.95253C19.9365 7.82842 19.8632 7.7184 19.7625 7.6376ZM8.75002 13.7501H11.25V18.7501H8.75002V13.7501Z"
                            fill="white"
                          />
                          <path
                            d="M15.625 16.6188L14.8187 15.8125L13.9375 16.6937L15.1875 17.9437C15.3046 18.0602 15.463 18.1255 15.6281 18.1255C15.7932 18.1255 15.9516 18.0602 16.0687 17.9437L19.8187 14.1937L18.9375 13.3125L15.625 16.6188Z"
                            fill="white"
                          />
                        </svg>
                        Add Listing
                      </button>
                    </div>
                  </div>
                </Offcanvas.Body>
              </Navbar>
            </Offcanvas>
          </Navbar>
        </Container>
      </div>
    </>
  );
};

export default Header;
