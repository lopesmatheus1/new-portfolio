import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../_components/ui/card";

import { RiReactjsFill } from "react-icons/ri";

const TechCard = () => {
  return (
    <Card className="w-full bg-transparent lg:max-w-[280px]">
      <CardHeader>
        <CardTitle className="font-light text-xl">Front-end Engineer</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-center gap-5 lg:justify-start">
          <div className="rounded-full bg-ring/10 p-0.5">
            <RiReactjsFill size={26} className="text-blue-400" />
          </div>
          <p className="text-lg font-light">React</p>{" "}
        </div>
      </CardContent>
    </Card>
  );
};

export default TechCard;
