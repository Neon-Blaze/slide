import { Button } from "@/components/ui/button";
import Loader from "../loader";
import { ActiveAutomation } from "@/icons/active-automation";

const ActivateAutomationButton = () => {
  //WIP: Setup optimistic ui
  //WIP: Getch same automation data
  return (
    <Button className="lg:px-10 bg-gradient-to-br hover:opacity-80 text-white rounded-full from-[#3352CC] font-medium to-[#1C2D70] ml-4">
      {/* Set the Loading state */}
      <Loader state={false}>
        <ActiveAutomation />
        <p className="lg:inline hidden">Active</p>
      </Loader>
    </Button>
  );
};

export default ActivateAutomationButton;
