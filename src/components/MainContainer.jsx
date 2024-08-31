import TopBar from "./TopBar";
import Options from './Options'
import MainscheduleOne from "./MainSchedule";
import MainscheduleTwo from "./MainScheduleTwo";
import MainscheduleThree from "./MainScheduleThree";
import Info from "./Info";

const MainContainer = (props) => {

    return (
        <div className="main-container">
            <TopBar />
            <Options />
            <div className="Main">
                <MainscheduleOne category="Urgent" />
                <MainscheduleTwo category="Personal" />
                <MainscheduleThree category="Work" 
                />
            </div>
            <Info/>
        </div>
    )
}

export default MainContainer;