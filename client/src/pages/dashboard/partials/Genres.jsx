import { Card, CardBody } from "@nextui-org/card";
import { Tab, Tabs } from "@nextui-org/tabs";
import React from "react";
import { genres } from "../../../data/client_data";

function Genres() {
  return (
    <div className="flex w-full flex-col">
      <p className="text-4xl font-extrabold mb-1">Genres</p>
      <Tabs
        aria-label="Genre tabs"
        items={genres}
        variant="light"
        color="primary"
      >
        {(item) => (
          <Tab key={item.id} title={item.label}>
            <Card>
              <CardBody>{item.content}</CardBody>
            </Card>
          </Tab>
        )}
      </Tabs>
    </div>
  );
}

export default Genres;
