import { useState } from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    IconButton,
    Carousel,
    Button,
    Timeline,
    TimelineItem,
    TimelineConnector,
    TimelineHeader,
    TimelineIcon,
    TimelineBody,
    Avatar,
} from "@material-tailwind/react";


import { experiences, experiencesLength } from "/components/DataDictionary.js"

function ResumeExperiences() {

    return (
      <section className="bg-transparent  pt-40 px-4 xsm:pt-20">
        <div >
          <h1 className="text-6xl font-extrabold tracking-tight leading-none text-white mb-12 xsm:text-2xl xsm:mx-12" >My Experiences</h1>
            {experiences.map((items, index) => {
                return (
                  <Timeline key={index}>
                  <TimelineItem key={index}>
                        <TimelineConnector />
                        <TimelineHeader>
                          <TimelineIcon className="p-0">
                            <Avatar size="xl" src={items.experiences_details.image} alt="user 1 xsm:2xl" withBorder />
                          </TimelineIcon>
                          <Typography className="text-2xl xsm:text-lg text-white">
                          {items.experiences_details.company_name}
                          </Typography>
                          <Typography  className="text-2xl xsm:text-lg text-gray-400">
                          ({items.experiences_details.started} - {items.experiences_details.left})
                          </Typography>
                        </TimelineHeader>
                        <TimelineBody className="pb-8">
                          <Typography color="gray" className="text-2xl xsm:text-lg text-gray-400">
                            {items.experiences_details.job_description}
                          </Typography>
                        </TimelineBody>
                      </TimelineItem>
                  {/* {Object.keys(items).map((key) => {

                      return (
                        <TimelineItem>
                        <TimelineConnector />
                        <TimelineHeader>
                          <TimelineIcon className="p-0">
                            <Avatar size="sm" src={items[key].image} alt="user 1" withBorder />
                          </TimelineIcon>
                          <Typography variant="h5" color="blue">
                          {items.experiences_details.company_name}
                          </Typography>
                        </TimelineHeader>
                        <TimelineBody className="pb-8">
                          <Typography color="gray" className="font-normal text-gray-600">
                            The key to more success is to have a lot of pillows. Put it this way, it took me
                            twenty five years to get these plants, twenty five years of blood sweat and tears, and
                            I&apos;m never giving up, I&apos;m just getting started. I&apos;m up to something. Fan
                            luv.
                          </Typography>
                        </TimelineBody>
                      </TimelineItem>
                      )

                    })} */}
                  </Timeline>
                )

             })}

        </div>


      </section>


    );
}

export default ResumeExperiences