import Schedule from "./Schedule";

const MainscheduleThree = (props) => {
    return (
        <div className="schedule-container">
                <div className="type">
                    <div className="shape-container">
                        <div className="shape"></div>
                        <p className="type-tag medium-16">{props.category}</p>
                    </div>
                    <i class="ph-bold ph-dots-three-outline-vertical pointer icon-grey icon-20"></i>
                </div>
                <Schedule activity="Meeting with an Investor" dynamic="Video" name="Richard" time="8am-9am" hours="2hrs" app="Google Meet" />
                <div className="shape-container align-center">
                        <i class="ph ph-plus-circle icon-grey icon-20"></i>
                        <p className="type-tag medium-16 pointer">New Task</p>
                    </div>
        </div>
    )
}

export default MainscheduleThree;