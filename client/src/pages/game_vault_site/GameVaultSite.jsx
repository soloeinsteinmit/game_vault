import { Button } from "@nextui-org/button";
import GameTrailersView from "../auth/partials/GameTrailersView";
import GameTrailersViewSite from "./partials/GameTrailerViewSite";
import TopBar from "./partials/TopBar";
import FeaturesCard from "./partials/FeaturesCard";
import f1 from "../../assets/f1.png";
import f2 from "../../assets/f2.png";
import f3 from "../../assets/f3.png";
import img from "../../assets/1.jpg";
import Attributions from "./partials/Attibutions";
import Footer from "./partials/Footer";
import { Divider } from "@nextui-org/divider";
import { Avatar } from "@nextui-org/avatar";
import { Image } from "@nextui-org/image";

function GameVaultSite() {
  const features = [
    {
      src: f1,
      title: "Find your next game",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae suscipit delectus nulla nisi corporis at mollitia",
    },
    {
      src: f2,
      title: "Track you progess",
      description:
        "Nobis ducimus a neque est consectetur natus laboriosam eveniet similique, inventore, laudantium ab cum",
    },
    {
      src: f3,
      title: "Share your achivement",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas hic nam suscipit unde qui repellat impedit ",
    },
  ];

  const projectCards = [
    {
      img: img,
      projectName: "AssistU AI",
      description:
        "Developed AssistU AI, a comprehensive chatbot designed to streamline university services for students, faculty, and staff. It leverages advanced natural language processing and machine learning techniques to provide timely, accurate, and helpful responses to a wide array of university-related inquiries.",
    },
    {
      img: f1,
      projectName: "Norah Consult",
      description:
        "Developed a professional website for Norah Consult, a consultancy agency. Focused on frontend and UI design using Figma, and implemented the frontend using React and TypeScript. Successfully delivered a sleek and functional online presence. The site is currently live.",
    },
    {
      img: f2,
      projectName: "iManage Production",
      description:
        "Crafted a robust website for iManage Production, a software production company. Focused on frontend and UI, implemented using React and TypeScript. The site is currently live.",
    },
  ];

  return (
    <div className="flex flex-col items-center">
      <TopBar />

      <div className="flex flex-col gap-10 max-w-[1000px] w-full mx-auto mt-10 mb-12 lg-tab:px-10">
        <GameTrailersViewSite />

        {/* ==================================================================== */}
        <div
          className="flex flex-col gap-5 justify-start items-start"
          id="features"
        >
          <p className="text-4xl font-bold">Key features</p>
          <span>
            Discover the best game of all time, or find the perfect game to play
            next
          </span>
          <Button color="primary">Start using GameVault</Button>
          <div className="flex gap-5 items-start justify-between w-full xs-tab:flex-wrap">
            {features.map((feature, index) => (
              <FeaturesCard
                key={index}
                src={feature.src}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
        {/* ==================================================================== */}

        <div className="flex flex-col gap-5">
          <p className="text-3xl font-bold">Attributions</p>
          <div className="flex gap-3 justify-between mobile:flex-col">
            <Attributions
              logoText="Data provided by RAWG"
              text="RAWG is the largest video game database and game discovery service. And we are gladly sharing our 500,000+ games, search, and machine learning recommendations with the world."
            />
            <Attributions
              logoText="Voice and text interactions by Alan AI"
              text="The Platform enables your users to interact with AI Agents using voice for hands-free environments on mobile or web applications in addition to text interactions."
            />
          </div>
        </div>

        {/* ==================================================================== */}
        <div className="flex flex-col gap-5">
          <p className="text-3xl font-bold">About the Creator</p>
          <div className="flex gap-5 xs-tab:flex-col xs-tab:gap-2">
            <div className="flex gap-3">
              <div className="flex flex-col gap-2">
                <Avatar
                  src="https://i.pravatar.cc/150?u=a04258114e29026708c"
                  className="min-w-32 h-32 text-large xs-tab:min-w-20 xs-tab:h-20 mobile:min-w-16 mobile:h-16"
                />
                <Button
                  color="warning"
                  variant="flat"
                  size="sm"
                  className="hidden mobile:block"
                >
                  Follow
                </Button>
              </div>
              <div className="justify-between gap-3 hidden xs-tab:flex">
                <div className="flex flex-col gap-1">
                  <p className="text-xl font-bold">Solomon Eshun</p>
                  <span className="text-default-500 text-sm">
                    Creator of GameVault, Full-Stack Developer, Machine Learning
                    & AI Engineer
                  </span>
                </div>
                <Button
                  color="warning"
                  variant="flat"
                  className="mobile:hidden"
                >
                  Follow
                </Button>
              </div>
            </div>
            <div className="flex flex-col gap-2 w-full">
              <div className="flex justify-between gap-5 xs-tab:hidden">
                <div className="flex flex-col gap-1">
                  <p className="text-xl font-bold">Solomon Eshun</p>
                  <span className="text-default-500 text-sm">
                    Creator of GameVault, Full-Stack Developer, Machine Learning
                    & AI Engineer
                  </span>
                </div>
                <Button color="warning" variant="flat">
                  Follow
                </Button>
              </div>
              <p className="text-default-500 text-sm w-full max-w-[700px]">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam
                hic reiciendis qui eligendi a dolore aspernatur dignissimos
                beatae! Dignissimos doloremque tempora vero aspernatur ipsam
                explicabo officia obcaecati voluptatem doloribus quam.
              </p>
            </div>
          </div>
        </div>

        {/* ==================================================================== */}
        <div className="flex flex-col gap-5">
          <p className="text-3xl font-bold">Tools Used</p>
          <div className="flex  gap-5 flex-col">
            <Divider />

            <ToolsUsed
              tool="React"
              description="Frontend framework for building the user interface"
            />
            <Divider />

            <ToolsUsed
              tool="Redux"
              description="Stage management library for managing the application's state"
            />

            <Divider />
            <ToolsUsed
              tool="Node.js/Express"
              description="Backend runtime environments for running server-side code"
            />

            <Divider />
            <ToolsUsed
              tool="MySQL"
              description="For storing database information"
            />
          </div>
        </div>
        {/* ==================================================================== */}
        <div className="flex flex-col gap-5">
          <p className="text-3xl font-bold">Previous Projects</p>
          {/* <div className="flex  gap-3"> */}
          <div className="flex gap-3 flex-wrap sm-tab:justify-evenly sm-tab:gap-4">
            {projectCards.map((projectCard, index) => (
              <PreviousProject
                key={`${projectCard}-${index}`}
                img={projectCard.img}
                projectName={projectCard.projectName}
                description={projectCard.description}
              />
            ))}
            {/* </div> */}
          </div>
        </div>
        {/* ==================================================================== */}
        <Footer />
      </div>
    </div>
  );
}

export default GameVaultSite;

function ToolsUsed({ tool = "tool", description = "description" }) {
  return (
    <div className="flex sm-scard-tab:flex-col gap-1">
      <p className="text-default-500 w-48">{tool}</p> <p>{description}</p>
    </div>
  );
}

function PreviousProject({
  img,
  projectName = "Project",
  description = "Description",
}) {
  return (
    <div className="flex flex-col gap-3 max-w-[320px] sm-scard-tab:max-w-[80%] mobile:max-w-full justify-start ">
      <div className="overflow-hidden rounded-large h-fit mobile:h-fit">
        <Image src={img} alt={projectName} isZoomed />
      </div>
      <div className="flex flex-col items-start justify-start">
        <p>{projectName}</p>
        <p className="text-sm text-default-400">{description}</p>
      </div>
    </div>
  );
}
