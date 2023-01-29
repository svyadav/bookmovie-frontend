import { Button, Container } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import Header from "./Header"

const LandingPage=()=>{
  const navigate=useNavigate()
    return <>
    <div className="landingPage">
      <Container>
      <div>
              <h1 className="title">Welcome to BookMovie</h1>
              <h2 className="subtitle">Best place to book your favourite movie</h2>
            </div>
            <div className="buttonContainer">
            
                <Button size="lg" className="landingbutton" onClick={()=>navigate("/login")}>
                  Login
                </Button>
                <Button
                  variant="primary"
                  size="lg"
                  className="landingbutton"
                  onClick={()=>navigate("/signup")}
                >
                  Signup
                </Button>
            </div>

      </Container>
      </div>
    </>
}

export default LandingPage