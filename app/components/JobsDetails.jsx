"use client";
import { TiLocationOutline } from "react-icons/ti";
import { SiIndeed } from "react-icons/si";
import { CgWorkAlt } from "react-icons/cg";
import { IoTimerOutline } from "react-icons/io5";
import { MdArrowBack, MdOutlineWorkOutline } from "react-icons/md";
import Link from "next/link";
import { Button } from "@nextui-org/react";
import { BsPatchCheck } from "react-icons/bs";
export default function JobsDetails() {
    const skills=[
        {
            title:'Proficient in Figma, Adobe Illustrator, and Adobe Photoshop.'
        },
        {
            title:'Basic understanding of wireframes and prototypes.'
        },
        {
            title:'Basic understanding of cross-browser compatibility issues.'
        },
        {
            title:'Basic understanding about CMS such as Wordpress and designing websites using wordpress themes.'
        },
        {
            title:'Basic understanding of HTML and CSS.'
        },
        {
            title:'Basic understanding of responsive layouts.'
        },
        {
            title:'Proficient understanding of the importance of user-centered design.'
        },
        {
            title:'Basic understanding of web design principles.'
        },
        {
            title:'Comply with brand guidelines. '
        },
        {
            title:'Basic understanding about email newsletters/campaigns.'
        },
        {
            title:'Basic understanding about iconography.'
        },
        {
            title:'Time management skills to work on multiple projects at once and with various deadlines.'
        },
        {
            title:'Excellent communication skills.'
        },
        {
            title:'Positive attitude and willingness to learn new tools.'
        },
        
    ]
  return (
    <div className="container mx-auto md:h-screen  w-full">
      <div className="bg-white/80 z-50 dark:bg-slate-900/80 backdrop-blur-xl py-3 w-full sticky top-0 ">
        <Link href="currentopening" className="flex gap-3 my-5 items-center">
          <MdArrowBack />
          <p>Back</p>
        </Link>
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div>
            <h2 className="text-lg lg:text-3xl font-medium">
              Associate System Administrator
            </h2>
            <div className="flex flex-col lg:flex-row items-center gap-2">
              <div className="flex items-center gap-2">
                <TiLocationOutline className="text-lg" />
                <p className="text-sm ">Dhaka, Dhaka Division, Bangladesh</p>
              </div>
              <div className="flex items-center gap-2">
                <CgWorkAlt className="text-lg" />
                <p className="text-sm ">Cloud Operations</p>
              </div>
              <div className="flex items-center gap-2">
                <IoTimerOutline className="text-lg" />
                <p className="text-sm ">Full-time</p>
              </div>
            </div>
          </div>
          <div className="hidden lg:flex items-center gap-3">
            <Link href="https://secure.indeed.com/auth?continue=https%3A%2F%2Fm5.apply.indeed.com%2Fbeta%2Findeedapply%2Fresumeapply%3FdraftId%3Da40c32c1-989b-44a1-a0a4-805f82c3ef71-bnJ0cHJvZDE%26postUrl%3Dhttps%253A%252F%252Ftherap.recruiterbox.com%252Fintegrations%252Fv1%252Fapply_with_indeed%252Ffk0x4lb%26hl%3Den%26isGql%3Dfalse%26jobTitle%3DAssociate%2BSystem%2BAdministrator%26questions%3Dhttps%253A%252F%252Ftherap.recruiterbox.com%252Fintegrations%252Fv1%252Findeed_questions%252Ffk0x4lb%26preload%3D1%26iip%3Dfalse%26jobUrl%3Dhttps%253A%252F%252Ftherap.recruiterbox.com%252Fjobs%252Ffk0x4lb%252F%26href%3Dhttps%253A%252F%252Ftherap.hire.trakstar.com%252Fjobs%252Ffk0x4lb%252F%253Fapply_with_indeed%253Dtrue%26jobMeta%3Duw0j1zie%26src%3D%26ms%3D1698836965428%26jobCompany%3DTherap%2B%2528BD%2529%2BLtd.%26co%3DBD%26isApi%3Dfalse%26noButtonUI%3Dtrue%26iaUid%3D1he595pj4jql7800%26newTab%3Dfalse%26spn%3Dfalse%26jobId%3Dfk0x4lb%26referrer%3Dhttps%253A%252F%252Ftherap.hire.trakstar.com%252Fjobs%252Ffk0x4lb%252F%26apiToken%3Dd743016d9ec2da46e3a52c68c67645cb9e494a3f3c0015a97cfdf851c32d5a91%26jobLocation%3DDhaka%2B%252C%2BDhaka%2BDivision%2B%252C%2BBangladesh%26phone%3Drequired%26name%3Dfullname&cfb=2&obo=http%3A%2F%2Fwww.indeed.com%2F&hl=en&from=indapply-login-SmartApply&branding=indeed-apply">
              <Button variant="shadow" className="bg-blue-700 text-white">
                <SiIndeed />
                Apply with Indeed
              </Button>
            </Link>
            <Button color="primary" variant="shadow">
              Apply
            </Button>
          </div>
        </div>
      </div>
      <div className="bg-slate-50 shadow-xl shadow-slate-50 dark:shadow-slate-800 border border-slate-200 dark:border-slate-600 dark:bg-slate-800 rounded-xl px-4 md:px-10 py-10 mt-10">
        <h3 className="">
          Therap BD Ltd is seeking talented individuals with experience in
          Oracle Cloud Infrastructure OCI, AWS, GCP or Azure to join our team.
          Candidates with OCI experience and certifications will be given
          preference.
        </h3>
        <div className="flex flex-col lg:flex-row items-center gap-3 my-6">
          <CgWorkAlt className="text-lg" />
          <span className="text-lg font-semibold">Experience :</span>
          2+ years of experience motivated freshers are encouraged to apply
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-3 my-6">
          <MdOutlineWorkOutline className="text-lg" />
          <span className="text-lg font-semibold">Job Title :</span>
          Associate System Administrator
        </div>
        <div className="flex flex-col items-start gap-2 my-6">
          <div className="flex items-center gap-3">
            <MdOutlineWorkOutline className="text-lg" />
            <p className="text-lg font-semibold ">Job Description:</p>
          </div>

          <div className=" w-full">
            
            We are looking for skilled Linux System Administrators who are
            passionate about cloud technologies and have hands-on experience
            with OCI and AWS. Candidates will be responsible for designing,
            implementing, and maintaining cloud infrastructure solutions for
            Theraps in house development and production environments.
          </div>
        </div>
        <div className="flex flex-col  items-start gap-2 my-6">
          <div className="flex items-center gap-3">
            <MdOutlineWorkOutline className="text-lg" />
            <p className="text-lg font-semibold">
              Skills and Personal Qualities:
            </p>
          </div>
{skills.map((skill,i)=>(
    <div key={i} className="flex items-center gap-3">
            <BsPatchCheck className="w-5 h-5 flex flex-shrink-0"/>
           {skill.title}
          </div>
))}
        
        
        </div>
        <div className="flex flex-col  items-start gap-2 my-6">
          <div className="flex items-start md:items-center gap-3">
            <MdOutlineWorkOutline className="text-lg" />
            <p className="text-lg font-semibold">
            Educational and Portfolio Requirements:
            </p>
          </div>

    <div  className="flex  items-start gap-3">
            <BsPatchCheck className="w-5 h-5 flex flex-shrink-0" />
            <p> This position requires a bachelors degree in Computer Science or related field. The candidate must be proficient in the tools mentioned above. The candidate must have at least 2 years of experience in web design.</p>
           
          </div>
          <div  className="flex items-center gap-3">
            <BsPatchCheck />
            A strong portfolio that displays creativity.
          </div>

        
        
        </div>
      </div>
    </div>
  );
}
