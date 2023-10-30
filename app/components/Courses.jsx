'use client'
import {Tabs, Tab, Card, CardBody, CardHeader} from "@nextui-org/react";
import Chemistry from "./Chemistry";

export default function App() {
  let tabs = [
    {
      id: "chemistry",
      label: "Chemistry",
      content: <Chemistry/>
    },
    {
      id: "physics",
      label: "Physics",
      content:  <Chemistry/>
    },
    {
      id: "math",
      label: "Math",
      content:  <Chemistry/>
    },
    {
        id: "bangla",
        label: "Bangla",
        content:  <Chemistry/>
      }, 
     
  ];

  return (
    <div className="flex w-full flex-col  container mx-auto">
     <h4 className='flex justify-center items-center mx-auto text-md lg:text-lg  bg-sky-100 dark:bg-sky-800 px-4 py-1 my-5 w-fit rounded-lg border-t-4 border-sky-300 text-sky-600 dark:text-sky-200'>Provided Course</h4>
    
    <h2 className='text-3xl lg:text-4xl font-semibold text-center mb-5'>Popular Subjects</h2>
      <Tabs aria-label="Dynamic tabs" items={tabs} radius="full" color="primary" className="flex justify-center items-center mt-5" size="lg">
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
