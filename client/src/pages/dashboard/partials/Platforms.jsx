import { Card, CardBody } from "@nextui-org/card";
import { Tab, Tabs } from "@nextui-org/tabs";
import React from "react";

import { platforms } from "../../../data/client_data";

const Platforms = () => {
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
