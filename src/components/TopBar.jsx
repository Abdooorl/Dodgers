const TopBar = () => {

    return (
        <div className="top-bar">
            <div className="text">
                <h1 className="h1-bold">Dashboard </h1>
                <p className="medium-16 icon-grey">Detailed Overview</p>
            </div>
            <button type="button" className="black-button btn-style medium-14"> <i class="ph-fill  vertical-align ph-lightning icon-18"></i> Upgrade to Pro</button>
        </div>
    )
}

export default TopBar;