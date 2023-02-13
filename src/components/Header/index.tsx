import React from "react";
import { NavLink } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import styles from "./Header.module.scss";

Header.propTypes = {};

function Header() {
  return (
    <header className={styles.header}>
      <Container>
        <Row className="justify-content-between">
          <Col xs="auto">
            <a
              className="header__link header__title"
              href="https://youtube.com/easyfrontend"
              target="_blank"
              rel="noopener noreferrer"
            >
              Easy Frontend
            </a>
          </Col>

          <Col xs="auto">
            <NavLink
              //   exact="true"
              className={`header__link ${({ isActive = true }) =>
                isActive ? "header__link--active" : undefined}`}
              to="/photos"
              //   activeclassname="header__link--active"
            >
              Redux Project
            </NavLink>
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
