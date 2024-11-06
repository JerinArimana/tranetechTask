import Image from "next/image";
import n1 from "../../../public/images/n-1.png";
import n2 from "../../../public/images/n-2.png";
import n3 from "../../../public/images/n-3.png";
import n4 from "../../../public/images/n-4.png";
import n5 from "../../../public/images/n-5.png";
import { Col, Row } from "react-bootstrap";
const Neighborhood = () => {
  return (
    <>
      <div className="neighborhood__wrapper">
        <div className="sec-header text-center mb-10">
          <label className="page_label mb-3">AREAS ACROSS THE TOWN</label>
          <h2 className="page_title">Neighborhood Properties</h2>
        </div>

        <Row>
          <Col xs={6} sm={12} md={3} lg={3}>
            <div className="neighborhood__article relative overflow-hidden rounded-lg shadow-lg mb-5 mr-3">
              <Image
                src={n1}
                width={500}
                height={320}
                alt=""
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-4xl font-bold">216</p>
                <p className="text-lg font-semibold">New York City</p>
              </div>
            </div>
          </Col>
          <Col xs={6} sm={6} md={3} lg={3}>
            <div className="neighborhood__article relative overflow-hidden rounded-lg shadow-lg mb-5 mr-3">
              <Image
                src={n2}
                width={500}
                height={320}
                alt=""
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-4xl font-bold">216</p>
                <p className="text-lg font-semibold">New York City</p>
              </div>
            </div>
          </Col>
          <Col xs={6} sm={6} md={6} lg={6}>
            <div className="neighborhood__article relative overflow-hidden rounded-lg shadow-lg mb-5">
              <Image
                src={n3}
                width={500}
                height={320}
                alt=""
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-4xl font-bold">216</p>
                <p className="text-lg font-semibold">New York City</p>
              </div>
            </div>
          </Col>
          <Col xs={6} sm={6} md={4} lg={4}>
            <div className="neighborhood__article relative overflow-hidden rounded-lg shadow-lg mb-5 mr-3">
              <Image
                src={n4}
                width={500}
                height={320}
                alt=""
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-4xl font-bold">216</p>
                <p className="text-lg font-semibold">New York City</p>
              </div>
            </div>
          </Col>
          <Col xs={6} sm={6} md={8} lg={8}>
            <div className="neighborhood__article relative overflow-hidden rounded-lg shadow-lg mb-5">
              <Image
                src={n5}
                width={500}
                height={320}
                alt=""
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-4xl font-bold">216</p>
                <p className="text-lg font-semibold">New York City</p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Neighborhood;
