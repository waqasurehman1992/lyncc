import WebinarTicker from "../WebinarTicker/WebinarTicker";
import HomeMenu from "../HomeMenu/homeMenu"
import RevolutionText from "../RevolutionText/RevolutionText";
import GetStarted from "../GetStarted/GetStarted";
import Social from "../SocialIcons/social";
import TrendingLine from "../TrendLine/TrendingLine";
import ScrollDownBtn from "../ScrollDownBtn/scrolldownBtn";
import "./header.css"



export default function Header() {
  return (
    <>
      <div className="header-container">
        <video autoPlay muted loop width={"100%"}  >
          <source src="./vid_1.mp4" />
        </video>
        <div className="vid-overlay">
          <WebinarTicker />
          <HomeMenu />
          <RevolutionText />
          <GetStarted />
          <Social />
          <TrendingLine />
          <div className="scroll-down-pos">
            <ScrollDownBtn />
          </div>
        </div>

      </div>

    </>
  );
}
