import React from "react";
import Grid from "@material-ui/core/Grid";
import "./style.css";
import g1 from "../../Assets/Images/g1.gif"
import g2 from "../../Assets/Images/g2.gif"
import g3 from "../../Assets/Images/g3.gif"
import g4 from "../../Assets/Images/g4.gif"
const Slothz = () => {
  return (
    <>
      <div className="outter">
        <div className="first">
          <h1 className="name">Who let the SLOTHz</h1>
          <h1 className="name"> out!?</h1>
          <h3>Join the SLOTHz Gang!</h3>
        </div>

        <div className="second">
          <Grid container  >
            <Grid item md={3} sm={3} xs={12} >
              <img
                className="imge"
                src= {g1}
                alt=" "
              />
            </Grid>
            <Grid item md={3} sm={3} xs={12}>
              <img
                className="imge"
                src={g2}
                alt=" "
              />
            </Grid>
            <Grid item md={3} sm={3} xs={12}>
              <img
                className="imge"
                src={g3}
                alt=" "
              />
            </Grid>
            <Grid item md={3} sm={3} xs={12}>
              <img
                className="imge"
                src={g4}
                alt=" "
              />
            </Grid>
          </Grid>
        </div>
        <div className="third">
          <button className="btn">MINT NOW</button>
        </div>
        <div className="forth">
          <Grid container>
            <Grid item md={3} sm={6} xs={6}>
              <h1 className="yell">9999</h1>
              <h3 className="yel">SLOTHz</h3>
            </Grid>
            <Grid item md={3} sm={6} xs={6}>
              <h1 className="yell">156</h1>
              <h3 className="yel">TRAITS</h3>
            </Grid>
            <Grid item md={3} sm={6} xs={6}>
              <h1 className="yell">10</h1>
              <h3 className="yel">COMMUNITY PRIZES</h3>
            </Grid>
            <Grid item md={3} sm={6} xs={6}>
              <h1 className="yell">20</h1>
              <h3 className="yel">EXCLUSIVE SLOTHz</h3>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
};
export default Slothz;
