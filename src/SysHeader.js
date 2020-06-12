import React from 'react'
import { Nav, Navbar } from "react-bootstrap";

export default function SysHeader() {
  return (
    // <div>
      // <Nav
      <Navbar
        // activeKey="/home"
        sticky  = {"top"}
        // style   = {{background: "red"}}
        bg      = "info"
        // style={{position: "sticky", top: "0px", width: "100%", zIndex: 999}}

        onSelect={selectedKey => alert(`selected ${selectedKey}`)}
      >
        <Nav.Item>
          <Nav.Link href="/home">Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            Disabled
          </Nav.Link>
        </Nav.Item>
      {/* </Nav> */}
      </Navbar>
    // </div>
  )
}
