import { Select, SelectItem } from "@nextui-org/select";
import React from "react";
import { platforms, order_by } from "../../data/client_data";

const DashboardContent = () => {
  return (
    // TODO: CODE OPTIMIZATION
    <div className="w-full">
      <p className="flex flex-col text-4xl font-extrabold">
        Top Picks{" "}
        <span className="text-base font-normal">Based on ratings</span>
      </p>
      <div className="flex w-full flex-wrap md:flex-nowrap gap-4 mt-4">
        <Select label="Order by:" className="max-w-xs" size="sm" radius="md">
          {order_by.map((order) => (
            <SelectItem key={order.key}>{order.label}</SelectItem>
          ))}
        </Select>
        <Select label="Platform" className="max-w-xs" size="sm" radius="md">
          {platforms.map((platform) => (
            <SelectItem key={platform.id}>{platform.label}</SelectItem>
          ))}
        </Select>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default DashboardContent;
