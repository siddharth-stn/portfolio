import "../static/main.scss";

function Main () {
    return (
        <div className="main">
            <h2 className="titleMain">My work</h2>
            <div className="workContainer">
                <div className="workOne">
                    <div className="projectScreenShot">
                    </div>
                    <div className="projectDetail">
                        <div className="projectHeader">
                            <h3 className="projectName">Project Name</h3>
                            <div className="projectLinks">
                                {/* Link One */}
                                {/* Link Two */}
                            </div>
                        </div>
                        <div className="projectDescription">
                            Short description of the project. Just a couple sentences will do. 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;