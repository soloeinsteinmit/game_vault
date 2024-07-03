import { Card } from "@nextui-org/card";
import { Skeleton } from "@nextui-org/skeleton";

export default function CardSkeleton() {
  return (
    <Card
      className="w-[320px] sm-tab:max-w-[500px] xs-tab:max-w-full xs-tab:h-[300px] h-[550px] mobile:h-[400px] space-y-5 p-4"
      radius="lg"
    >
      <Skeleton className="rounded-lg">
        <div className="h-72 rounded-lg bg-default-300"></div>
      </Skeleton>
      <div className="space-y-3">
        <Skeleton className="w-3/5 rounded-lg">
          <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
        </Skeleton>
        <Skeleton className="w-4/5 rounded-lg">
          <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
        </Skeleton>
        <Skeleton className="w-2/5 rounded-lg">
          <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
        </Skeleton>
      </div>
    </Card>
  );
}
