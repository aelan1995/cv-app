'use client'

import { useState } from 'react';
import {
  Card,
  CardHeader,
  Button,
  CardFooter,
  Typography
} from "@material-tailwind/react";
import ResumeProfile from "./resume-details/resume-profile"
import ResumeExperiences from "../main/experiences"
import ResumeProjects from "./resume-details/resume-projects"

function Resume() {
  const [index, setIndex] = useState(0);


  function handleClick(num) {
    if(num === 1) {

      return setIndex(<ResumeExperiences/>)
    } else if (num === 2) {

      return setIndex(<ResumeProjects/>)
    }else {

      return setIndex(<ResumeProfile/>)
    }
  }


  return (
        <Card className="w-auto">
          <CardHeader
            color="transparent"
            floated={true}
            shadow={false}
            className="mx-auto"
          >
            <div className="flex items-center gap-3">
              <Button onClick={() => handleClick(0)} className="ml-4 transition rounded-full hover:-translate-x-3" size="lg">Profile</Button>
              <Button onClick={() => handleClick(1)} className="transition rounded-full hover:-translate-x-3" size="lg">Experiences</Button>
              <Button onClick={() => handleClick(2)} className="transition rounded-full hover:-translate-x-3" size="lg">Projects</Button>
              <Button className="rounded-full hover:-translate-x-3" size="lg">Hobbies</Button>
              <Button className="rounded-full hover:-translate-x-3" size="lg">Skills</Button>
              <Button className="rounded-full hover:-translate-x-3" size="lg">Contacts</Button>
            </div>
          </CardHeader>

          {index || <ResumeProfile />}
          <CardFooter className="pt-0 pb-0 mx-auto">

          <div className="-mb-80 mt-4 p-2">
              <p className="text-3xl font-extrabold font-sans copyright-box">© Allan.IO</p>
          </div>


          </CardFooter>
        </Card>
  )
}

export default Resume