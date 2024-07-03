import { Card, CardBody } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { Skeleton } from "@nextui-org/skeleton";
import React from "react";

export default function GameSkeleton() {
  return (
    <Card className="w-[320px] space-y-5 p-4 break-inside-avoid" radius="lg">
      <Skeleton className="rounded-lg">
        <div className="h-24 rounded-lg bg-default-300"></div>
      </Skeleton>
      <div className="space-y-3">
        <Skeleton className="w-full rounded-lg">
          <div className="h-3 w-1/2 rounded-lg bg-default-200"></div>
        </Skeleton>

        <Skeleton className="w-4/5 rounded-lg">
          <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
        </Skeleton>
        <Skeleton className="w-2/5 rounded-lg mb-3">
          <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
        </Skeleton>
        <div className="flex flex-col gap-3 ">
          <Divider />
          <Skeleton className="w-full rounded-lg">
            <div className="h-3 w-1/2 rounded-lg bg-default-200"></div>
          </Skeleton>
          <Divider />
          <Skeleton className="w-full rounded-lg">
            <div className="h-3 w-1/2 rounded-lg bg-default-200"></div>
          </Skeleton>
        </div>
      </div>
    </Card>
  );
}
