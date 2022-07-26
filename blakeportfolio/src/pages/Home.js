import { useState,useEffect } from "react";
import CardContainerColumn from "../components/ui/CardContainerColumn";
import CardContainerRow from "../components/ui/CardContainerRow";
import Header from "../components/ui/Header";
import Card from "../components/ui/Card";
import headshot from "../images/BlakeHead.jpg";



function Home(){

    return(
<div>
        

<body>






<img class="FaceImage" src={headshot} alt="Blake Slegls head" />

<div class="titleD">About Me</div>

<div class="titleD">I Graduated From Metropolitan Community College in 2022 I am amateur and aspiring profesional Web Developer.
I've started learning about programming in High School, Java was my first language, and I've learned about JavaScript, SQL, and Python through my Full Stack Web Development major at
 Metropolitan Community College. I have created dynamic webpages using PHP and React.js. And I have knowledge and education
 in SQL servers and UI/UX design.
<br/>
<br/>
My desire is to master new skills, and to reinforce old ones. I have the capacity and willingness to learn. Im a good team player and problem solver, with a good work ethic and a positive mindset.
<br/>
<br/>
</div>



</body>
</div>
    );

}

export default Home;