import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import "./style.css";
const Mint = () => {
  const [num, setnum] = useState(0);
  const decNum = () => {
    if (num > 0) {
      setnum(num - 1);
    } else {
      setnum(0);
    }
  };
  const incNum = () => {
    setnum(num + 1);
  };
  return (
    <div>
      <div className="outer">
        <div className="first">
          <h1 className="mint">MINT</h1>
          <p>YOU'RE JUST ONE TRANSACTION AWAY FROM JOINING THE SLOTHZ ARMY!</p>
        </div>
        <div className="second">
          <div className="left">
            <h2 className="heading">Mint your SLOTHz!</h2>
            <p className="p1">
              You can mint up to 20 SLOTHz at once. The price per SLOTHz is
              0.045 ETH.
            </p>
            <p>4289 / 9999 SLOTHz minted</p>
            <div className="count">
              <button className="btn1" onClick={decNum}>
                -
              </button>
              <input className="input" id="out" type="text" value={num}></input>
              <button className="btn2" onClick={incNum}>
                +
              </button>
            </div>
            <button className="wallet">Connect Wallet</button>
            <p className="p3">
              Make sure you are using the Metamask/Coinbase in-app browser or
              have Metamask installed on your browse
            </p>
          </div>
          <div className="right">
            <img
              className="imgee"
              src="http://nigeria.alshumaal.com/static/media/astro.4fbb9c5f.png"
              alt=" "
            />
          </div>
        </div>
        <div className="third">
          <Grid container>
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
      </div>
      <div className="fifth">
        <h1 className="mint" style={{ padding: "40px" }}>
          STATS
        </h1>
        <p className="random">
          Each SLOTHz is randomly generated with a combination of more than 157
          traits, but not only that, there are different types with different
          rarities.
        </p>
      </div>
    </div>
  );
};

export default Mint;
