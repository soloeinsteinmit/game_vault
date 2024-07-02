import { Card, CardBody } from "@nextui-org/card";
import { Tab, Tabs } from "@nextui-org/tabs";
import React from "react";

// import { platforms } from "../../../data/client_data";

import { FaWindows, FaPlaystation, FaXbox } from "react-icons/fa6";
import { IoLogoAndroid, IoIosPhonePortrait } from "react-icons/io";
import { SiNintendo3Ds } from "react-icons/si";

const Platforms = () => {
  const platforms = [
    {
      id: "pc",
      label: "PC",
      icon: <FaWindows />,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: "playstation",
      label: "PlayStation 4",
      icon: <FaPlaystation />,
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      id: "xbox",
      label: "Xbox One",
      icon: <FaXbox />,
      content:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: "nintendo",
      label: "Nintendo Switch",
      icon: <SiNintendo3Ds />,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto modi labore aliquid sequi beatae similique consectetur sit unde repellendus necessitatibus? Dicta nam necessitatibus quae fugiat alias sapiente soluta reprehenderit totam.",
    },
    {
      id: "ios",
      label: "iOS",
      icon: <IoIosPhonePortrait />,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, fugiat repudiandae laborum, eos vel rerum nostrum corporis tenetur facilis neque, aperiam totam. Voluptas consectetur odit vel inventore suscipit illum animi?",
    },
    {
      id: "android",
      label: "Android",
      icon: <IoLogoAndroid />,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum earum cumque enim odio rem. Earum aspernatur a iste exercitationem modi, numquam autem in cum nobis asperiores nam laudantium vel quisquam.",
    },
  ];

  return (
    <div className="flex w-full flex-col">
      <p className="text-4xl font-extrabold mb-1">Platforms</p>
      <Tabs
        aria-label="Platform tabs"
        items={platforms}
        variant="light"
        color="primary"
      >
        {(item) => (
          <Tab
            key={item.id}
            title={
              <div className="flex items-center space-x-2">
                {item.icon}
                <span>{item.label}</span>
              </div>
            }
          >
            <Card>
              <CardBody>{item.content}</CardBody>
            </Card>
          </Tab>
        )}
      </Tabs>
    </div>
  );
};

export default Platforms;
