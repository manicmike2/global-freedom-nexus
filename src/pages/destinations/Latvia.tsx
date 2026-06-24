import DestinationPageTemplate from "@/components/DestinationPageTemplate";
import { getDestination } from "@/lib/destination-content";

const Latvia = () => <DestinationPageTemplate data={getDestination("latvia")} />;
export default Latvia;
