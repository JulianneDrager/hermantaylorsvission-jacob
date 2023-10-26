import React from "react";
import useMediaQuery from "../UseMediaQuery";
import DesktopInterview from "./DesktopInterview";
import { Image, Button } from "react-bootstrap";
import InterviewStyle from "./css/Interview.module.css";
// Image imports
// import BackgroundImage from "../../../images/";

const Interview = () => {

    //media queries
    const matchedSm = useMediaQuery("(max-width: 600px)");

    // styles
    const interviewCon = InterviewStyle.interviewCon;
    const imgBackground = InterviewStyle.imgBackground;
    const imgTopper = InterviewStyle.imgTopper;
    const contentCon = InterviewStyle.contentCon;
    const h1Style = InterviewStyle.h1Style;
    const videoCon = InterviewStyle.videoCon;

    return (
        <>
            {/* mobile view */}
            {matchedSm &&
                <main className={interviewCon}>
                    <img className={imgBackground}/>
                    <img className={imgTopper}/>
                    <div className={contentCon}>
                        <h1 className={h1Style}></h1>
                        <h1 className={h1Style}></h1>
                        <div className={videoCon}>
                            <iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FDrSuccessMan%2Fvideos%2F5855939064510164%2F&show_text=false&width=560&t=0" width="560" height="314" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>
                        </div>
                    </div>
                </main>
            }

            {/* desktop view  */}
            {!matchedSm && <DesktopInterview />}
        </>
    )
}

export default Interview;