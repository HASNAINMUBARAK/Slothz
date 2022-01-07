import React from "react";
import "./style.css";
import Grid from "@material-ui/core/Grid";
const Team = () => {
  return (
    <>
      <div className="outter">
        <div className="level">
          <h2 style={{ padding: "35px 0px 10px 0px" }}>
            Join our Discord Community
          </h2>
          <p style={{ padding: "10px" }}>
            The best community in this space with +2,000 members, with games,
            contests, giveaways, scholarships and more to some!
          </p>
          <button className="join">Join Now!</button>
        </div>
        <div className="level1">
          <h1 className="teamheading">TEAM</h1>
          <p className="teampara">
            This is the group of crazy nerds that made SLOTHz a reality! Each of
            us is a key component in order to give you guys the NFT art you
            deserve. Each of us is here for the long run, we are aiming to bring
            SLOTHz to the next level.
          </p>
        </div>
        <div className="level2">
          <Grid Container className="twitter">
            <Grid item md={4} sm={4} xs={4}>
              <button className="twt">
                <i
                  class="fab fa-twitter"
                  style={{ color: "#3d8ceb", fontSize: "30px" }}
                ></i>
              </button>
            </Grid>
            <Grid item md={4} sm={4} xs={4}>
              <button className="twt">
                <i
                  class="fab fa-facebook-f"
                  style={{ color: "#4e54f2", fontSize: "30px" }}
                ></i>
              </button>
            </Grid>
            <Grid item md={4} sm={4} xs={4}>
              <button className="twt">
                <i
                  class="fab fa-instagram"
                  style={{ color: "#e651ff", fontSize: "30px" }}
                ></i>
              </button>
            </Grid>
            <Grid item md={4} sm={4} xs={4}>
              <button className="twt">
                <i
                  class="fab fa-facebook-messenger"
                  style={{ color: "#4e54f2", fontSize: "30px" }}
                ></i>
              </button>
            </Grid>
            <Grid item md={4} sm={4} xs={4}>
              <button className="twt">
                <i
                  class="fab fa-whatsapp"
                  style={{ color: "#40ee5c", fontSize: "30px" }}
                ></i>
              </button>
            </Grid>
          </Grid>
        </div>
        <div className="level3">
          <Grid Container className="carddd">
            <Grid item md={3} sm={3} xs={12} className="cardd">
              <div className="card">
                <img
                  className="imge"
                  src="http://nigeria.alshumaal.com/static/media/hero1.a13e15c7.gif"
                  alt=" "
                />
                <h4>@Mike Dene</h4>
              </div>
            </Grid>
            <Grid item md={3} sm={3} xs={12}>
              <div className="card">
                <img
                  className="imge"
                  src="http://nigeria.alshumaal.com/static/media/hero4.dc80de94.gif"
                  alt=" "
                />
                <h4>@Mike Dene</h4>
              </div>
            </Grid>
            <Grid item md={3} sm={3} xs={12}>
              <div className="card">
                <img
                  className="imge"
                  src="http://nigeria.alshumaal.com/static/media/hero2.dd351f01.gif"
                  alt=" "
                />
                <h4>@Mike Dene</h4>
              </div>
            </Grid>
            <Grid item md={3} sm={3} xs={12}>
              <div className="card">
                <img
                  className="imge"
                  src="http://nigeria.alshumaal.com/static/media/hero1.a13e15c7.gif"
                  alt=" "
                />
                <h4>@Mike Dene</h4>
              </div>
            </Grid>
          </Grid>
        </div>
        <div className="level4">
          <p className="teampara">
            We need you! If you feel you can bring something to the table please
            send us a DM
          </p>
        </div>
      </div>
    </>
  );
};

export default Team;
