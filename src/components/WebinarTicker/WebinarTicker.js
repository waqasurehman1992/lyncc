import "./WebinarTicker.css"

export default function WebinarTicker() {
    return (

        <div className="pop-header"> 
            <div className="remaining-time"><span>3 Weeks - 2 Days - 10 hours - 45 Minutes</span></div>
            <div className="attend-webinar"><span>To attend our webinar series Need For Speed</span></div>
            <div>
                <button className="sign-up-btn">Sign Up</button>
            </div>
            <div>
                <button className="cross-btn">X</button>
            </div>
        </div>

    );
}