'use client'
import {Tabs, Tab, Card, CardBody, CardHeader} from "@nextui-org/react";
import OutDoorGame from "./OutDoorGame";
import InDoorGame from "./InDoorGame";

export default function BesidesWorks() {
  let tabs = [
    {
      id: "outdoor",
      label: "Outdoor Games",
      content: <OutDoorGame/>
    },
    {
      id: "indoor",
      label: "Indoor Games",
      content:  <InDoorGame/>
    },
    {
      id: "bbq",
      label: "BBQ Nights",
      content:  <OutDoorGame/>
    },
    {
        id: "family",
        label: "Family Day",
        content: <InDoorGame/>
      }, 
      {
        id: "gym",
        label: "Gym & yoga",
        content: <OutDoorGame/>
      }, 
      {
        id: "photography",
        label: "Photography Exhibition",
        content:  <InDoorGame/>
      }, 
     
  ];

  return (
    <div className="flex w-full flex-col  container mx-auto">
     <h4 className='flex justify-center items-center mx-auto text-md lg:text-lg  bg-yellow-100 dark:bg-yellow-800 px-4 py-1 mb-5 mt-10 w-fit rounded-lg border-t-4 border-yellow-300 text-yellow-600 dark:text-yellow-200'>Besides Work</h4>
    
    <h2 className='text-3xl lg:text-4xl font-semibold text-center mb-5'>What we do beside work</h2>
      <Tabs aria-label="Dynamic tabs" items={tabs} radius="md" color="primary" variant="bordered" className="flex justify-center items-center my-3 h-16" size="lg">
        {(item) => (
          <Tab key={item.id} title={item.label}>
            <Card  className="bg-slate-50 dark:bg-slate-800" >
              <CardBody>
                {item.content}
              </CardBody>
            </Card>  
          </Tab>
        )}
      </Tabs>
    </div>  
  );
}
