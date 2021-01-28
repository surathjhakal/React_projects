import React from "react";
import { Navbar, Button } from "react-bootstrap";

const navbar = ({ totalLength }) => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand>
          Navbar{" "}
          <Button className="rounded-circle" variant="secondary">
            {totalLength}
          </Button>
        </Navbar.Brand>
      </Navbar>
    </div>
  );
};

export default navbar;
