import Schedule from "./Schedule";

const MainscheduleTwo = (props) => {
    return (
        <div className="schedule-container">
                <div className="type">
                    <div className="shape-container">
                        <div className="shape"></div>
                        <p className="type-tag medium-16">{props.category}</p>
                    </div>
                    <i class="ph-bold ph-dots-three-outline-vertical pointer icon-grey icon-20"></i>
                </div>
                <Schedule activity="Take the kids to the pool" dynamic="Physical" name="Family Time" time="8am-10am" hours="3hrs" app="Mungo Park" />
                <Schedule activity="Car service at the garage" dynamic="Physical" name="Only me" time="5pm-9pm" hours="4hrs" app="Car garage" />
                <div className="shape-container align-center">
                        <i class="ph ph-plus-circle icon-grey icon-20"></i>
                        <p className="type-tag medium-16 pointer">New Task</p>
                    </div>
        </div>
    )
}

export default MainscheduleTwo;