import DestinationPageTemplate from "@/components/DestinationPageTemplate";
import { getDestination } from "@/lib/destination-content";

const Turkey = () => <DestinationPageTemplate data={getDestination("turkey")} />;
export default Turkey;
