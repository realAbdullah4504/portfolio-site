import React from "react";

const Team = () => {
    
    return (
        <section className="main-section team" id="team">
            <div className="container">
                <h2>team</h2>
                <h6>Take a closer look into our amazing team. We won’t bite.</h6>
                <div className="team-leader-block clearfix">
                    <div className="team-leader-box">
                        <div className="team-leader wow fadeInDown delay-03s">
                            <div className="team-leader-shadow"><a href="#"></a></div>
                            <img src="abaidullah.png" alt="" />
                            <ul>
                                <li><a href="#" className="fa-twitter"></a></li>
                                <li><a href="#" className="fa-facebook"></a></li>
                                <li><a href="#" className="fa-pinterest"></a></li>
                                <li><a href="#" className="fa-google-plus"></a></li>
                            </ul>
                        </div>
                        <h3 className="wow fadeInDown delay-03s">Abaidullah Zahid</h3>
                        <span className="wow fadeInDown delay-03s">Chief Executive Officer</span>
                    </div>
                    <div className="team-leader-box">
                        <div className="team-leader  wow fadeInDown delay-06s">
                            <div className="team-leader-shadow"><a href="#"></a></div>
                            <img src="shahid.jpg" alt="" />
                            <ul>
                                <li><a href="#" className="fa-twitter"></a></li>
                                <li><a href="#" className="fa-facebook"></a></li>
                                <li><a href="#" className="fa-pinterest"></a></li>
                                <li><a href="#" className="fa-google-plus"></a></li>
                            </ul>
                        </div>
                        <h3 className="wow fadeInDown delay-06s">Shahid</h3>
                        <span className="wow fadeInDown delay-06s">Product Manager</span>
                    </div>
                    <div className="team-leader-box">
                        <div className="team-leader wow fadeInDown delay-09s">
                            <div className="team-leader-shadow"><a href="#"></a></div>
                            <img src="abdullah.jpg" alt="" />
                            <ul>
                                <li><a href="#" className="fa-twitter"></a></li>
                                <li><a href="#" className="fa-facebook"></a></li>
                                <li><a href="#" className="fa-pinterest"></a></li>
                                <li><a href="#" className="fa-google-plus"></a></li>
                            </ul>
                        </div>
                        <h3 className="wow fadeInDown delay-09s">Abdullah</h3>
                        <span className="wow fadeInDown delay-09s">Accountant</span>
                    </div>
                </div>
            </div>
        </section>

    )
}
export default Team;