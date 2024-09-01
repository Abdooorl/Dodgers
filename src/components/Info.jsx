/**
 * Info component.
 * 
 * This component renders information with date, circles, and timeline.
 * 
 * @returns {JSX.Element} The rendered Info component.
 */
const Info = () => {
    

    return (

        <div className="info">

                <div className="info-container">

                    <div className="top-container">
                        <div className="info-style info-one">
                            <div className="date">
                                <p className="day semibold-16">Tue</p>
                                <p className="time medium-16 icon-grey">Apr</p>
                            </div>
                            <div className="date-number semibold-72">
                                19
                            </div>
                        </div>
                        
                        <div className="info-style info-two ">
                            <div className="timeline semibold-16">Timeline</div>
                            <div className="circles-container">
                                <div className="circles row">
                                    {Array(7).fill().map((_, idx) => {
                                        return (
                                            <div className={idx <= 3 ? "circle circle-active": "circle" } key={idx}></div>
                                        )
                                    }) }
                                </div>
                                <div className="circles row">
                                    {Array(7).fill().map((_, idx) => {
                                        return (
                                            <div className="circle" key={idx}></div>
                                        )
                                    }) }
                                </div>
                                <div className="circles row">
                                    {Array(7).fill().map((_, idx) => {
                                        return (
                                            <div className="circle" key={idx}></div>
                                        )
                                    }) }
                                </div>
                                <div className="circles row">
                                    {Array(4).fill().map((_, idx) => {
                                        return (
                                            <div className="circle" key={idx}></div>
                                        )
                                    }) }
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bottom-container">
                        <div className="info-style info-one">
                            <div className="date">
                                <p className="day semibold-16">Sun</p>
                                <p className="time medium-16 icon-grey">38°C</p>
                            </div>
                            <i class="ph-fill icon-72px ph-sun"></i>
                            
                        </div>
                        
                        <div className="info-style info-two info-three">
                            <div className="timeline icon-grey medium-16">30mins</div>
                            <div className="align-center-text">
                            <i class="ph-fill icon-24 green ph-apple-podcasts-logo"> </i>
                            <p className="day semibold-16">Podcast is <span className="icon-grey">in</span> 20 mins</p>
                            </div>
                        </div>
                    </div>
                </div>

               


                <div className="map-container">
                    <div className="map">
                        <div className="map-tag">
                            <i class="ph-fill icon-18 ph-map-pin vertical-align"></i>
                            <p className="map-icon medium-14">Map</p>
                        </div>
                    </div>
                </div>
            </div>
        )
}

export default Info;