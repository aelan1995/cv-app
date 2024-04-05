import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";

function Content() {
    const data = [
      {
        label: "HTML",
        value: "html",
        desc: `It really matters and then like it really doesn't matter.
        What matters is the people who are sparked by it. And the people
        who are like offended by it, it doesn't matter.`,
      },
      {
        label: "React",
        value: "react",
        desc: `Because it's about motivating the doers. Because I'm here
        to follow my dreams and inspire other people to follow their dreams, too.`,
      },
      {
        label: "Vue",
        value: "vue",
        desc: `We're not always in the position that we want to be at.
        We're constantly growing. We're constantly making mistakes. We're
        constantly trying to express ourselves and actualize our dreams.`,
      },
      {
        label: "Angular",
        value: "angular",
        desc: `Because it's about motivating the doers. Because I'm here
        to follow my dreams and inspire other people to follow their dreams, too.`,
      },
      {
        label: "Svelte",
        value: "svelte",
        desc: `We're not always in the position that we want to be at.
        We're constantly growing. We're constantly making mistakes. We're
        constantly trying to express ourselves and actualize our dreams.`,
      },
    ];

    return (
      <section className="bg-transparent">
        <div>
            <Tabs value="html">
                <TabsHeader className="p-2">
                {data.map(({ label, value }) => (
                    <Tab className="p-2" key={value} value={value}>
                    {label}
                    </Tab>
                ))}
                </TabsHeader>
                <TabsBody>
                {data.map(({ value, desc }) => (
                    <TabPanel key={value} value={value} className="flex gap-2 bg-transparent">
                        <Card className="bg-transparent">
                            <CardBody>
                                <Typography variant="h5" color="white" className="mb-2">
                                {value}
                                </Typography>
                                <Typography color="white">
                                  {desc}
                                </Typography>
                            </CardBody>
                        </Card>
                        <Card className="bg-transparent">
                            <CardBody>
                                <Typography variant="h5" color="white" className="mb-2">
                                {value}
                                </Typography>
                                <Typography color="white">
                                  {desc}
                                </Typography>
                            </CardBody>
                        </Card>
                        <Card className="bg-transparent">
                            <CardBody>
                                <Typography variant="h5" color="white" className="mb-2">
                                {value}
                                </Typography>
                                <Typography color="white">
                                  {desc}
                                </Typography>
                            </CardBody>
                        </Card>
                    </TabPanel>
                ))}
                </TabsBody>
            </Tabs>
        </div>
      </section>

    );
  }

export default Content