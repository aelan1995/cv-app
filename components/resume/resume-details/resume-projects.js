import { useState } from 'react';

import {
    CardHeader,
    CardBody,
    Typography,
    IconButton,
} from "@material-tailwind/react";

import { projects, tech, projectsLength } from "/components/DataDictionary.js"

function ResumeProjects() {
    let getLength = projectsLength.page_totalLength;
    let getVisibility = getLength !== 0 ?  "visible": "invisible";

    const [doanimateleft, setAnimateLeft] = useState(0);
    const [dofadein, setFadeIn] = useState(0);
    const [active, setActive] = useState(projectsLength.page_numberStart);
    const getProjects = projects[active].projects_details
    const projectTech = getProjects.projects_tech
       
    const next = () => {
      setAnimateLeft(1)
      setFadeIn(1)    
      setActive(active + 1);
    };

  
    const prev = () => {
      setAnimateLeft(1)
      setFadeIn(1)    
      setActive(active - 1);
    };

    return (
      <div 
         className="grid grid-flow-col auto-cols-auto p-12 zoomTransition">
        <IconButton
          variant="text"
          color="gray"
          size="lg"
          onClick={prev}    
          className={`!absolute top-2/4 left-4 -translate-y-2/4 ${getVisibility}`}
          disabled={active === projectsLength.page_numberStart} 
        ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
         </svg>
        </IconButton>  
          <CardHeader
                floated={false}
                shadow={false}>
                <img src={getProjects.image} 
                  alt="profile-picture" 
                  className="slideInLeft px-2 h-80"
                  onAnimationEnd={()=> setAnimateLeft(0)}
                  doanimateleft={doanimateleft}/>
          </CardHeader>
         <CardBody 
              className=""
              onAnimationEnd={()=> setFadeIn(0)}
              dofadein={dofadein}>              
              <Typography variant="h4" className="font-bold mb-2">
                {getProjects.projects_name} for {getProjects.company}
              </Typography>
              <Typography variant="h5"className="font-medium mb-2">
                {getProjects.projects_description}
              </Typography>
              <Typography variant="h6"className="font-medium mb-2">
                Tech Stacks
              </Typography>   
              <ul class="list-disc ml-16 text-lg font-semibold">
                {tech[projectTech].tech_details.map((item) => (
                      <li>{item.tech_name} - {item.tech_lib}</li>
                ))}
              </ul>
         </CardBody>        

        <IconButton
          variant="text"
          color="gray"
          size="lg"
          className={`!absolute top-2/4 !right-4 -translate-y-2/4  ${getVisibility}`}
          onClick={next}
          disabled={active === projectsLength.page_numberEnd}
        ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
           <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
         </svg>
        </IconButton>
    </div>
    );
}

export default ResumeProjects