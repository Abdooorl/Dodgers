function Sidebar({data}) {

    const bottomNav = [
        {
            icon: "ph ph-user-circle-dashed icon-24 title",
            tag: "User Management"
        },
        {
            icon: "ph ph-floppy-disk-back icon-24 title",
            tag: "Backlog"
        },
        {
            icon: "ph ph-gear-six icon-24 title",
            tag: "Settings"
        }
    ]
    
    return (
        <div className="sidebar">
            <div className="side-bar-top">
                <div className="logo-icon">
                    <img src={require('../media/logo.png')} alt="logo" className="logo pointer" />
                    <i class="ph icon-20 icon-grey pointer ph-caret-up-down"></i>
                </div>
                <div className="search">
                    <i class="ph icon-20 icon-grey ph-magnifying-glass"></i>
                    <input type="search" name="search" id="search-bar" className='medium-16 search-input' placeholder='Search'/>
                    <i class="ph-fill icon-grey ph-microphone icon-20"></i>
                </div>
                <div className="nav-bar">
                    <p className="tag medium-14 ico-grey">MENU</p>
                    <div className="navigations">
                    {
                        data.map((item, idx) => 
                            (
                                <div className={idx === 0 ? "nav-tag active" : "nav-tag"} key={idx}>
                                <i class={item.icon}></i> 
                                <p className={idx === 0 ? "pointer medium-16 black" : " pointer title medium-16"}>{item.tag}</p>
                                </div>
                            )
                        )
                    }
                    </div>

                    <div className="navigations">
                    {
                        bottomNav.map((item, idx) => 
                            (
                                <div className="nav-tag" key={idx}>
                                <i class={item.icon}></i> 
                                <p className="pointer title medium-16">{item.tag}</p>
                                </div>
                            )
                        )
                    }
                    </div>
                </div>
                

                
            </div>
            <div className="profile-down">
                <div className="profile">
                        <div className="image-name">
                            <img src={require('../media/ProfileImage.png')} alt="profile-image" className='profile-image' />
                                <div className="name">
                                    <p className="full-name medium-14">Badamosi Abdullahi</p>
                                    <p className="email medium-12">badamosi@gmail.com</p>
                                </div>
                        </div>
                        <button id='btn' className='button pointer medium-12'>Sign-Out</button>
                    </div>
                </div>

                

        </div>
    )
}

export default Sidebar;