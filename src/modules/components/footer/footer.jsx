import { Link } from "react-router-dom";
import {
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";

import "./footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="footer-left">
          <h1 className="title">Movie List App</h1>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit Accusamus
            ipsum autem, recusandae nesciunt laboriosam blanditiis, repellendus
            aliquam rerum doloribus, deserunt voluptates suscipit amet sunt
            reprehenderit similique aperiam
          </p>
        </div>

        <div className="footer-middle">
          <ul className="list">
            <li>
              <Link to="/" style={{ color: "#f2dfd0" }}>
                About Us
              </Link>
            </li>
            <li>
              <Link to="/" style={{ color: "#f2dfd0" }}>
                Blog
              </Link>
            </li>
            <li>
              <Link to="/" style={{ color: "#f2dfd0" }}>
                Service
              </Link>
            </li>
          </ul>
        </div>

        <div className="footer-right">
          <h5 className="title"> Social Media </h5>
          <div className="sosmed-list">
            <FacebookOutlined className="sosmed" />
            <InstagramOutlined className="sosmed" />
            <LinkedinOutlined className="sosmed" />
          </div>
        </div>
      </div>

      <div>
        <p className="copyright"> Copyright 2021 All Rights Reserved </p>
      </div>
    </footer>
  );
};

export default Footer;
