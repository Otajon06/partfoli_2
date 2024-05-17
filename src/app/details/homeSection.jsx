import { TopSinglePictures } from "./pictures/topSinglePicture"
import { TopFourPictures } from "./pictures/topFourPictures"
import { Sponsors } from "./sectionDetails/sponsors"
import { CaruselPicture } from "./pictures/caruselPictures"
import { Infos } from "./sectionDetails/infos"
import { MediumSinglePictures } from "./pictures/mediumSinglePicture"
import { MediumThreePictures } from "./pictures/mediumThreePictures"
import { BottomCaruselPicture } from "./pictures/bottomCaruselPictures"
import { BuildInfos } from "./sectionDetails/buildInfos"


export const HomeSection = () => {
    return (
        <>
            <TopSinglePictures/>
            <div className="bruce_container">
                <h2>Design that inspires a better way to work.</h2>
                <p>We've developed a series of purpose-built rooms that offer companies looking for change an affordable, sustainable, and flexible alternative to fixed construction and traditional office design.</p>
            </div>
            <TopFourPictures/>
            <Sponsors/>
            <CaruselPicture/>
            <Infos/>
            <MediumSinglePictures/>
            <div className="stive_container">
                <h1>We take a human approach to a business-to-business industry, breaking the boundaries between corporate and personal, and rethinking every step of the user experience along the way.</h1>
                <h2>We make work, work for you.</h2>
            </div>
            <MediumThreePictures/>
            <div className="thor_container">
                <h1>Check out ROOM in the news.</h1>
                <h2>Read all <a href=""> press.</a></h2>
            </div>
            <BottomCaruselPicture/>
            <div className="stark_container">
                <img src="https://cdn.shopify.com/s/files/1/0312/2737/9849/files/feat-press-inc2.webp" alt="" />
            </div>
            <BuildInfos/>
        </>
    )
}