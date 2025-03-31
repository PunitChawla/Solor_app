import Bank from "../components/Subsidies/Bank";
import Home from "../components/Subsidies/Home";
import LoanTable from "../components/Subsidies/LoneTable";
import SecondComponent from "../components/Subsidies/Second";
import SubsidyTable from "../components/Subsidies/Table";


export default function Subsidies(){
    return <div>
        <Home/>
        <SecondComponent/>
        <SubsidyTable/>
        <LoanTable/>
        <Bank/>
    </div>
}