import "./homemenu.css"
import LynccLogo from "../lyncc-logo/LynccLogo"

import Link from "next/link"


export default function HomeMenu() {
    return (
        <>
            <div className="home-menu-outer">

                <div className="home-menu-inner">
                    <div className="logo-lyncc">

                        <LynccLogo />

                    </div>
                    <div className="menu-section">
                        <div className="main-menu-btns">
                            <div>
                                <Link href="/" >
                                   <span className="menu-item">Home</span> 
                                </Link>
                            </div>
                            <div>
                            <Link href="/Pricing">
                                   <span className="menu-item">Solution</span> 
                                </Link></div>
                            <div>
                            <Link href="/Pricing">
                                   <span className="menu-item">Integration</span> 
                                </Link>
                            </div>
                            <div><Link href="/Pricing">
                                   <span className="menu-item">Benefits</span> 
                                </Link></div>
                            <div><Link href="/Pricing">
                                   <span className="menu-item">Resources</span> 
                                </Link></div>
                            <div>
                                <Link href="/Pricing">
                                   <span className="menu-item">Pricing</span> 
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="language-dropdown">
                        <span>En</span>
                        <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1.5L5.64672 9.10372C6.03665 9.74179 6.96335 9.74179 7.35328 9.10372L12 1.5" stroke="white" stroke-width="2" stroke-linecap="round" />
                        </svg>

                    </div>
                </div>
            </div>
        </>
    );
}
