const Schedule = (props) => {
    return (
        <div className="Schedule">
            <div className="schedule-title">
                <h2 className="activity h2-semibold" >{props.activity}</h2>
                <p className="dynamic-tag -tag all-tag medium-14">{props.dynamic}</p>
            </div>
            <div className="schedule-tag">
                <p className="name-tag all-tag medium-14"><span className="circle"></span>{props.name}</p>
                <p className="app-tag all-tag medium-14">{props.app}</p>
                <p className="time-tag all-tag medium-14">{props.hours}</p>
            </div>
            <div className="remainder">
                <p className="remainder-tag medium-14">{props.time}</p>
                <p className="remainder-tag medium-14">Remainder</p>
            </div>
        </div>
    )
}

export default Schedule;