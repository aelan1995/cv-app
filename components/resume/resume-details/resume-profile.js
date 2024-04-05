import {
    CardHeader,
    CardBody,
    Typography,
} from "@material-tailwind/react";
   
function ResumeProfile() {

    return (
      <div className="grid grid-flow-row-dense grid-cols-3 p-12 zoomTransition">
          <CardHeader floated={true} className=" h-[22rem] w-[22rem] px-2 rounded-full shadow-2xl">
            <img src="mypicture.jpg" alt="profile-picture" />
          </CardHeader>
          <CardBody className="col-span-2 pb-6">
            <Typography variant="h3" color="blue-gray" className="mb-2">
              Allan Boi E. Punzalan
            </Typography>
            <Typography variant="h4" color="blue-gray" className="font-medium mb-2" textGradient>
              Developer
            </Typography>
            <Typography color="blue-gray" className="font-medium">
              5+ years experience in Software Development. Focusing in innovation and challenges to achieve greater success in my path. I have solid background in Python, and JavaScript Languages and Frameworks. Frameworks such as Django for Python and ReactJS for JavaScript. With an experience, In deployment using Nginx, and Gunicorn in a Linux Platform. And as well in IIS Web Service of Microsoft.For the past years my experiences allowed me to grow more in order for me to achieve my goal which is to be an effective and innovative software developer.
            </Typography>
          </CardBody>
      </div>
    );
}

export default ResumeProfile