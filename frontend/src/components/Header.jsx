import React from 'react';

import { Link } from 'react-router-dom';
import { Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap';

export default class Header extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div
          className="d-flex justify-content-end"
          style={{ backgroundColor: '#959456' }}
        />
        <Navbar style={{ backgroundColor: '#325856' }} variant="dark">
          <Navbar.Brand style={{ fontSize: 45 }} className="mr-auto">
            <Link style={{ color: '#fff', textDecoration: 'none' }} to="/">
              FORTE LIBRARY
            </Link>
          </Navbar.Brand>
        </Navbar>
      </React.Fragment>
    );
  }
}
