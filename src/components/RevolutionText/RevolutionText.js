import "./Revolution.css"
import GetStarted from "../GetStarted/GetStarted";
import Social from "../SocialIcons/social";
import { Container } from "react-bootstrap";

export default function RevolutionText() {
    return (
        <div className="revolution-outer">
            <Container>
                <div className="revolution-inner">
                    <div className="revolution-section">
                        <p className="p1">Revolution your business with smart solutions.</p>
                        <p className="p2">LYNCC <span className="revo-special">Order</span></p>
                        <GetStarted />
                    </div>
                    <div>
                        <Social />
                    </div>
                </div>
            </Container>
        </div>
    );
}