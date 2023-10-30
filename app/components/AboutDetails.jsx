
import { BsPatchCheck } from "react-icons/bs";
const AboutDetails = () => {
  const perks = [
    {
      parks: "Flexible Work Environment",
    },
    {
      parks: "Competitive Compensation Package",
    },
    {
      parks: "Employee Health Benefit Plans",
    },
    {
      parks: "Work-Life Balance",
    },
    {
      parks: "Collaborative Co-Workers",
    },
    {
      parks: "Work with New Technologies",
    },
    {
      parks: "Training and Career Development",
    },
    {
      parks: "Transportation Facilities",
    },
    {
      parks: "Healthy Breakfast and Lunch",
    },
    {
      parks: "Holiday Feasts and Barbecues",
    },
  ];
  return (
    <>
      <div className=" relative container lg:mx-auto  py-10 lg:py-2 mt-10  px-4 lg:px-10 ">
        <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center lg:h-[80vh] rounded-xl overflow-hidden">
          <iframe
            className="rounded-3xl"
            width="790"
            height="590"
            src="https://www.youtube.com/embed/SjpLPDryZT0"
            title="A brief look at Therap (BD) Ltd."
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <div className="max-w-xl w-full ">
            <p className=" text-sm lg:text-lg  bg-yellow-100 dark:bg-yellow-800 px-4 py-1 my-5 w-fit rounded-xl border-l-8 border-yellow-300 text-yellow-600 dark:text-yellow-200">
              Our Perks Facilities
            </p>
            <h1 className="text-2xl lg:text-4xl mb-4 capitalize font-bold mt-5">
              Perks of being a Therap BD  <br />Ltd. Employee
            </h1>

            {perks.map((park, i) => (
              <div className="flex items-center gap-2 my-4">
                <BsPatchCheck className="text-yellow-500 text-xl" />
                <p className="text-base lg:text-lg font-medium">{park.parks}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutDetails;
