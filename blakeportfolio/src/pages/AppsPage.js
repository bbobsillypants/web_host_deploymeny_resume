import { useState,useEffect } from "react";
import CardContainerColumn from "../components/ui/CardContainerColumn";
import CardContainerRow from "../components/ui/CardContainerRow";
import Header from "../components/ui/Header";
import Card from "../components/ui/Card";
import Calculator from "../components/Calculators";
import React, {Component} from "react";

import dinerA from "../images/CaptureHistory.jpg";
import dinerB from "../images/CaptureSpecials.jpg";

import EarthA from "../images/Destinations.jpg";
import EarthB from "../images/mobileViewDestinationPage.jpg";

import Grade from "../images/CaptureOnlineGradeReportPlusSqlClasses.jpg";



function AppPages(){

    return(
        <div>
            

            
            <div class="titleD"><a href="https://drive.google.com/drive/folders/1OCU_RdLHRDIiMXoqbuZhId1XTnIArXFO?usp=sharing">Portfolio Project Files Link</a></div>

            <div class="titleD">Downtown Diner</div>
                <img class="FaceImage" src={dinerA} alt="Downtown Diner History Page" />
                <img class="FaceImage" src={dinerB} alt="Downtown Diner Specials PAge" />
            <div class="titleD">Mother Earth Tours</div>
                <img class="FaceImage" src={EarthA} alt="mother Earth Tools Destinations Page" />
                <img class="FaceImage" src={EarthB} alt="mother Earth Tools Mobile Destination Page" />
            <div class="titleD">Grading Applications</div>
            <img class="FaceImage" src={Grade} alt="GradeApplication With Sql Interface" />
            <br/>
            <br/>

            
            
            
            
            
            
            
            
        </div>   
    );

}

export default AppPages;