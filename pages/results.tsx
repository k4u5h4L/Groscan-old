import Sidebar from "@/components/Common/Sidebar/Sidebar";
import ResultsHeader from "@/components/Results/ResultsHeader/ResultsHeader";
import ResultsMain from "@/components/Results/ResultsMain";

export default function Results() {
    return (
        <>
            <ResultsHeader />
            <ResultsMain />
            <Sidebar />
        </>
    );
}
