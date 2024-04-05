'use client'
import { useState } from 'react';
import { useRouter } from "next/navigation";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Checkbox,
    Button,
  } from "@material-tailwind/react";

export default function Page() {
    
    const [formData, setFormData] = useState({
        username:'',
        password:'',
    });

    const router = useRouter();

     const handleSubmit = async (event) => {
        event.preventDefault();  
        const response = await fetch('http://localhost:8000/api/login/', {
          method: 'POST',
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData),
        });
        if (!response.ok) {
          // This will activate the closest `error.js` Error Boundary
          throw new Error('Failed to fetch data')
        }
        const data = await response.json();
        localStorage.clear();
        localStorage.setItem('access_token', data.access_token);
        localStorage.setItem('refresh_token', data.refresh_token);
        router.push('/cms')
    };  

    const handleInputChange = (event) => {
        setFormData({
          ...formData,
          [event.target.name]: event.target.value,
        });
    };
    return (
      <div className="p-36">
        <Card className="mx-auto w-96">  
          <CardHeader
              variant="gradient"
              color="gray"
              className="mb-4 grid h-28 place-items-center"
              >
              <Typography variant="h4" color="white">
                  Logo Here
              </Typography>
          </CardHeader>
          <form onSubmit={handleSubmit}>
              <CardBody className="flex flex-col gap-4">
                  <Input 
                    label="Username" 
                    name="username"
                    size="lg" 
                    type="text"
                    value={formData.username}
                    onChange={handleInputChange}/>
                  <Input 
                    label="Password" 
                    name="password"
                    size="lg" 
                    type="password"
                    value={formData.password}
                    onChange={handleInputChange}/>
                  <div className="-ml-2.5">
                      <Checkbox label="Remember Me" />
                  </div>
                  <Button size="lg" type="submit">Login</Button>
              </CardBody> 
          </form>     
          <CardFooter className="pt-0">
            <hr className="h-px my-2 bg-gray-500 border-0 dark:bg-gray-700"></hr>  
            <Typography variant="small" className="mt-6 flex justify-center">
              <Typography
                as="a"
                href="#signup"
                variant="small"
                color="blue-gray"
                className="ml-1 font-bold"
              >
                © Allan.IO
              </Typography>
            </Typography>
          </CardFooter>
        </Card>
      </div>
    );
  }