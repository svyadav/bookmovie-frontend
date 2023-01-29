import { useState } from "react"
import { Button, Container, Form, Nav, Navbar, NavDropdown } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

const Header=()=>{

  const navigate=useNavigate()

  const logout=()=>{
  
      sessionStorage.clear()
      navigate("/login")
  
   
  }
  
    return <>
    <Navbar bg="dark" expand="lg">
      <Container fluid>
       
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1" style={{color:"white"}}>BookMovie</Nav.Link>
           
            
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          
            <Button variant="danger" onClick={logout}>Logout</Button>
        
            
        
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
}

export default Header