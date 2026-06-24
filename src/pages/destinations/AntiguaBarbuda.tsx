import DestinationPageTemplate from "@/components/DestinationPageTemplate";
import { getDestination } from "@/lib/destination-content";

const AntiguaBarbuda = () => <DestinationPageTemplate data={getDestination("antigua-barbuda")} />;
export default AntiguaBarbuda;
