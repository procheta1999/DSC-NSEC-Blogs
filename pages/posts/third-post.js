import React from 'react';
import PropTypes from 'prop-types';
import {createMuiTheme} from '@material-ui/core/styles'
import ThemeProvider from '@material-ui/styles/ThemeProvider'
import TextField from "@material-ui/core/TextField"
import Card from '@material-ui/core/Card';
import { makeStyles, responsiveFontSizes } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Input from '@material-ui/core/Input';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Box from '@material-ui/core/Box';
import Button from "@material-ui/core/Button"
import Head from "next/head"
import Link from 'next/link'
import { blue } from '@material-ui/core/colors';
const theme = createMuiTheme({
  form:{
    InputBase: {
    fontSize: 100,
  },
  resize:{
    fontSize:50
  },
},
});
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <>
    <Head>
    <meta charset="UTF-8"></meta>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
     <title>DSC NSEC BLogs!</title>
     <link rel="icon" href="/favicon.ico" />
   </Head>
   
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
    </>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
fontSize:50,
  },
}));

export default function ScrollableTabsButtonAuto() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
            <img src="/dsc.png" alt="dsc Logo" className="logo" />
          <Tab label="My feed📃" {...a11yProps(1)} />
          <Tab label="Publish🖋" {...a11yProps(2)} />
          <Tab label="Starred items⭐" {...a11yProps(3)} />
          <Tab label="My account🙋‍♀️🙋‍♂️" {...a11yProps(4)} />
          <Tab label="Notifications🔔" {...a11yProps(5)} />
          <Tab label="Settings⚙" {...a11yProps(6)} />
          <Tab label="Log out📤" {...a11yProps(7)} />
         
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} id="new"><br></br>
      <Typography variant="h2" gutterBottom style={{ textAlign: "center" }}>
        Welcome to DSC NSEC Blogs! We are happy to have you on board :)
        </Typography><br></br>
        <Typography variant="h5" gutterBottom style={{textAlign: "left" }}>
<h1>Code of conduct</h1>
<br></br>
<b>AntiHarassment Policy</b><br></br><br></br>
<section><b>Why do we have an official Anti-Harassment policy for Developer Student Clubs NSEC events?</b>
<p>It sets expectations for behavior at the event. Simply having an anti-harassment policy can prevent harassment.
It encourages people to attend who have had bad experiences at other events
It gives event staff/volunteers instructions on how to handle harassment quickly, with minimum amount of disruption for the event.</p></section>

<section><b>Developer Student Clubs NSEC is dedicated to providing a harassment-free event experience for everyone, regardless of:</b><ul>
<li>Gender</li>
<li>Sexual Orientation</li>
<li>Disability</li>
<li>Gender Identity</li>
<li>Age</li>
<li>Race</li>
<li>Religion</li>
<li>Nationality</li></ul>
<p>The above is not an exhaustive list -- we do not tolerate harassment of event spanarticipants in any form.</p></section>
<p>
Sexual language and imagery is not appropriate for any event venue, including talks. Event participants violating these rules may be expelled from the event, and event banned from future events at the discretion of the event organizers/management.
</p>
Harassment includes (but is not limited to):<ul>
<li>Offensive verbal comments related to gender,sexual orientation, disability, gender identity, age, race, religion</li>
<li>The use or display of sexual images in public spaces</li>
<li>Deliberate intimidation</li>
<li>Stalking</li>
<li>Harassing photography or recording</li>
<li>Sustained disruption of talks or other events</li>
<li>Inappropriate physical contact</li>
<li>Unwelcome sexual attention</li></ul>

<p>Participants asked to stop any harassing behavior are expected to comply immediately.</p>
<p>
Exhibiting partners and guests are also subject to the anti-harassment policy. In particular, exhibitors and speakers should not use sexualized images, activities, or other material, or otherwise create a sexualized environment in their slide decks, exhibit material, exhibit staffing, promotional items or demo material.
</p>
<p>
If you are being harassed, notice that someone else is being harassed, or have any other concerns, please contact an organizer or event volunteer immediately. Organizers and event volunteers may be identified by t-shirts or special badges/lanyards. Organizers will investigate the issue and take appropriate action. This may include helping participants contact venue security or local law enforcement, provide escorts, or otherwise assist these experiencing harassment to fell safe for the duration of the event.
</p>
Though we hope that we never have to invoke this policy, we believe that having this document helps everyone think a little more about how their actions and words affect the whole community, as well as individuals in the community.
        </Typography>
      </TabPanel>
      <TabPanel value={value} index={1}>
        
      <h1 className="title">
      DSC NSEC BLOGS-<i id="s">Write Your Own Story!</i>
      </h1>
      <Typography variant="h4" gutterBottom style={{ textAlign: "center" }}>
        Start blogging today! ✒📝Share your stories📚, your experiences! 🙋‍♀️Did you get success at one throw 🤔or was it hard? Tell us your stories.✨We would love to hear them. 📖 
        </Typography>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <br></br>
        <ThemeProvider theme={theme}>
        <form>
        <Button
            variant="contained"
            color="primary"
            type="submit"
            style={{ marginTop: "20px", width: "100px",padding:"1px 1px 1px 1px", }}
          >
            <a>PUBLISH</a>
          </Button>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            style={{ float:"right",marginTop: "20px", width: "100px",padding:"1px 1px 1px 1px" }}
          >
            <a>Save Draft</a>
          </Button>
          <br></br>
          <Divider></Divider>
          <br></br>
        <InputBase
        className={classes.margin}
        placeholder="Title"
        fullWidth
        inputProps={{ style: {fontSize: 50},'aria-label': 'naked' }}
      />
        <br></br>
        <br></br>
        <br></br>
        <TextField
        height="60"
          id="filled-textarea"
          placeholder="Write Your Story here....."
          multiline
          fullWidth
          inputProps={{style: {fontSize: 30,height:10000,lineHeight:1}}}
        />
        
        </form>
        </ThemeProvider>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <div id="e">
         Starred Stories ⭐
        </div>
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={7}>
      <Typography variant="h4" gutterBottom style={{ textAlign: "center" }}>
        Do you wish to log out?
        </Typography>
        <center><Link href="/posts/first-post"><Button
            variant="contained"
            color="primary"
            type="submit"
            style={{ marginTop: "20px", width: "100px" }}
          >
            <a>Log Out</a>
          </Button></Link></center>
      </TabPanel>
      <style jsx>{`
      .title {
        text-align:center;
        margin: 0;
        line-height: 1.15;
        font-size: 4rem;
        padding: 3rem 3rem 3rem 3rem;
      }
      #s{
        animation: pulse 5s infinite;
      }
      @keyframes pulse {
        20% {
          color: red;
        }
        30%{
            color:blue; 
        }
        40%{
            color:green;
        }
        100% {
          color: yellow;
        }
      }
      #e{
        font-size:40px;
      }
      #pro{
        color:blue;
      }
      
      
      #b InputBase{
        font-size:100px;
      }
      textField: {
        width: 400;
        margin: 100;
      } 
      #but{
          align-items:center;
      }
      `}</style>
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}