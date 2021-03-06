import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "./style.css";
const useStyles = makeStyles((theme) => ({
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const SimpleAccordion = () => {
  const classes = useStyles();

  return (
    <div className="acc">
      <div className="ask">
        <h1 className="asked">FREQUENTLY ASKED QUESTIONS</h1>
        <p className="question">You have questions, and we have answers. Couldn't find an anwser? Hop in our Discord Community!</p>
      </div>
      <div className="accord">
        {/* 1 */}
        <Accordion className="accordion">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className="heading">Treasure hunt?</Typography>
          </AccordionSummary>
          <AccordionDetails className="detail">
            <Typography className="typo">
              The challenge is not active (YET) but we recommend following us on
              twitter, it's a special challenge for our community members,
              remember you need to have at least 1 SLOTH on your wallet to claim
              the treasure.
            </Typography>
          </AccordionDetails>
        </Accordion>
        {/* 2 */}
        <Accordion className="accordion">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className="heading">Why Slothz?</Typography>
          </AccordionSummary>
          <AccordionDetails className="detail">
            <Typography className="typo">
              Cute, soft and slow VERY slow, sloths are very cool animals but
              sadly they are endangered by humans, from illegal trade to
              deforestation, and we want to raise awareness on them.
            </Typography>
          </AccordionDetails>
        </Accordion>
        {/* 3 */}
        <Accordion className="accordion">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className="heading">What is Minting Process</Typography>
          </AccordionSummary>
          <AccordionDetails className="detail">
            <Typography className="typo">
              Tokens will be minted through a blind and random mint using our
              in-house script (open source and proof of hashes). No FOMO ramp &
              flat pricing. Minters can get up to 20 at a time.
            </Typography>
          </AccordionDetails>
        </Accordion>
        {/* 4 */}
        <Accordion className="accordion">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className="heading">
              Tell us more about the SLOTHz !
            </Typography>
          </AccordionSummary>
          <AccordionDetails className="detail">
            <Typography className="typo">
              Every Sloth is randomly generated with a different amount of
              traits specifically designed to look as good as possible with well
              designed accessories and meeting high standards of quality and
              randomness.
            </Typography>
          </AccordionDetails>
        </Accordion>
        {/* 5 */}
        <Accordion className="accordion">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className="heading">
              What about the real slothz?
            </Typography>
          </AccordionSummary>
          <AccordionDetails className="detail">
            <Typography className="typo">
              A portion of minting proceeds will go to supporting the Sloth
              Conservation Foundation that protects sloths in the wild through
              research and conservation initiatives. Each donation will be
              publicly available and unlocked after every milestone we hit on
              our roadmap.
            </Typography>
          </AccordionDetails>
        </Accordion>
        {/* 6 */}
        <Accordion className="accordion">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className="heading">Sir wen SLOTHz?</Typography>
          </AccordionSummary>
          <AccordionDetails className="detail">
            <Typography className="typo">
              We're finishing some things up but watch for updates and keep your
              wallets loaded, SLOTHz are launching very soon at just 0.045 ETH
              each.
            </Typography>
          </AccordionDetails>
        </Accordion>
        {/* 7 */}
        <Accordion className="accordion">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className="heading">Sir wen SLOTHz?</Typography>
          </AccordionSummary>
          <AccordionDetails className="detail">
            <Typography className="typo">
              We're finishing some things up but watch for updates and keep your
              wallets loaded, SLOTHz are launching very soon at just 0.045 ETH
              each.
            </Typography>
          </AccordionDetails>
        </Accordion>
        {/* 8 */}
        <Accordion className="accordion">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className="heading">
              How many Slothz are being kept?
            </Typography>
          </AccordionSummary>
          <AccordionDetails className="detail">
            <Typography className="typo">
              We're keeping 200 SLOTHz for random giveaways, partnerships and we
              would love to keep some. Every holding, partnership and giveaway
              will be publicly disclosed.
            </Typography>
          </AccordionDetails>
        </Accordion>
        {/* 9 */}
        <Accordion className="accordion">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className="heading">
              Is your contract public ?
            </Typography>
          </AccordionSummary>
          <AccordionDetails className="detail">
            <Typography className="typo">
              Yes, of course! You can inspect our contract here.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};
export default SimpleAccordion;
