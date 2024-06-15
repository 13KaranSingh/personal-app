import { Container,Row,Col} from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"

export const Banner = () =>{
    return(
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">
                            Welcome to my Portfolio
                        </span>
                        <h1>{'Hi I am Karanvir Singh'} <span className="wrap"> Software Engineer</span></h1>
                        <p>Dummy text</p>
                        <button onClick={()=>console.log('connect')}>Let's connect <ArrowRightCircle/></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={""} alt="Header Img"/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}