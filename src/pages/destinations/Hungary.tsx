import DestinationPageTemplate from "@/components/DestinationPageTemplate";
import { getDestination } from "@/lib/destination-content";

const Hungary = () => <DestinationPageTemplate data={getDestination("hungary")} />;
export default Hungary;
