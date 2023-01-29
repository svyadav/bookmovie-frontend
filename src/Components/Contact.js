import React from "react"
import { Form,FormGroup,Label,Input,Button} from "reactstrap"
import { FaInstagram,FaLinkedinIn,FaGithub,FaFacebook} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const Contact=()=>{
  const navigate=useNavigate()
    return (
        <>
        <div className="contactform">
        <h1>Contact BookmyShow for details</h1>
        <Form>
  <FormGroup>
    <Label for="Name">
    Name
    </Label>
    <Input
      id="Name"
      name="name"
      placeholder="Enter Name"
      type="text"
    />
  </FormGroup>
  <FormGroup>
    <Label for="Email">
      Email
    </Label>
    <Input
      id="Email"
      name="email"
      placeholder="Enter Email"
      type="email"
    />
    <div id="Email">
                We'll never share your email with anyone else.
              </div>
  </FormGroup>
  <FormGroup>
    <Label for="Phone">
    Phone
    </Label>
    <Input
      id="Phone"
      name="phone"
      placeholder="Enter Phone"
      type="number"
    />
  </FormGroup>
  <FormGroup>
    <Label for="Enquiry">
    Enquiry
    </Label>
    <Input
      id="Enquiry"
      name="enquiry"
      placeholder="Enter Enquiry"
      type="text"
    />
  </FormGroup>
  <FormGroup check>
    <Input type="checkbox" />
    {' '}
    <Label check>
      Check me out
    </Label>
  </FormGroup>
  <Button color='primary' onClick={()=>navigate('/login')}>
    Submit
  </Button>
  </Form>
  <div className="socialContainer">
            <div className="insta"><FaInstagram/></div>
            <div className="linkdln"><FaLinkedinIn/></div>
            <div className="git"><FaGithub/></div>
            <div className="facebook"><FaFacebook/></div>
          </div>

        </div>
        </>
    )
    }

export default Contact