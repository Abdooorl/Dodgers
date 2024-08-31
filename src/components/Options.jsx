const Options = () => {
    const timeState = [
        {
            state : "Active"
        },
        {
            state : "Pending"
        },
        {
            state : "Due"
        },
        {
            state : "Cancelled"
        }  
    ]

    const stateView = [
        {
            icon: "ph-fill ph-squares-four icon-24 pointer active-state"
        },
        {
            icon: "ph ph-list-bullets pointer icon-24 state-tag"
        },
        {
            icon: "ph ph-rows icon-24 pointer state-tag"
        },
    ]

    return (

        <div className="options-container">
            <div className="left-element">
                <div className="time-state">
                    {
                        timeState.map((item, idx) => {
                            return (
                                <p className={idx === 0 ? "active-state state-tag semibold-16" : "state-tag pointer medium-16"} key={idx}>{item.state}</p>
                            )
                        })
                    }
                </div>

                <div className="state-view time-state">
                    {
                        stateView.map((item, idx) => {
                            return (
                                <i className={item.icon} key={idx}></i>
                            )
                        })
                    }
                </div>
            </div>

            <div className="btn-section">
                    <button type="button" className="button-inverted  pointer btn-style medium-14"><i class="ph vertical-align ph-download-simple icon-18"></i>Import</button>
                    <button type="button" className="button btn-style pointer black-button medium-14">New Todo</button>
                </div>
        </div>
    )
}

export default Options