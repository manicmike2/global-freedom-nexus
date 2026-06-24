import DestinationPageTemplate from "@/components/DestinationPageTemplate";
import { getDestination } from "@/lib/destination-content";

const Bulgaria = () => <DestinationPageTemplate data={getDestination("bulgaria")} />;
export default Bulgaria;
