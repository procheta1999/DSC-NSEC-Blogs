import React, { Component } from "react";
import TextField from "@material-ui/core/TextField"
import MenuItem from "@material-ui/core/MenuItem"
import Paper from "@material-ui/core/Paper"
import Button from "@material-ui/core/Button"
import Snackbar from "@material-ui/core/Snackbar"
import MuiAlert from "@material-ui/lab/Alert"
import { Typography } from "@material-ui/core"
import Head from "next/head"
import Link from 'next/link'
export default function SecondPost() {
  return (
    <>
       <Head>
        <title>New Account</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
      <h1 className="title">
        <img src="/dsc.png" alt="dsc Logo" className="logo"/>
          <b>DSC NSEC BLOGS-<i id="s">Write Your Own Story!</i></b>
        </h1>
        <Typography variant="h2" gutterBottom style={{ textAlign: "center" }}>
        Sign Up To Start Your Journey Today!
        </Typography>
      <Paper elevation={0}>
      <form>
      <div className="grid">
      <div className="card">
        Name:<TextField><input type="text"  name="e"></input></TextField><br></br><br></br>
          Email Address:<TextField><input type="email" name="p"></input></TextField><br></br><br></br>
          Password:<TextField><input type="password"  name="e"></input></TextField><br></br><br></br>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            style={{ marginTop: "20px", width: "100px" }}
            
          >
            Submit
          </Button>
          </div>
          </div>
          <p id="new"><Link href="/"><a>Back to HomePage</a></Link></p>
          <p id="new"><Link href="/posts/first-post"><a>Already have an account?Log In</a></Link></p>
      </form>
      
      </Paper>
      <script defer src="https://www.gstatic.com/firebasejs/7.15.5/firebase-app.js"></script>

<script defer src="https://www.gstatic.com/firebasejs/7.15.5/firebase-auth.js"></script>
<script defer src="https://www.gstatic.com/firebasejs/7.15.5/firebase-firestore.js"></script>

// ...

<script defer src="./firebase.js"></script>
      </main>
      <footer>
        <a
          href="https://dscnsec.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/dsc.png" alt="dsc Logo" className="logo" />
        </a>
      </footer>
      <style jsx>{`
      footer {
        width: 100%;
        height: 100px;
        border-top: 1px solid #eaeaea;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      footer img {
        margin-left: 0.5rem;
      }

      footer a {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .grid {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;

        max-width: 2000px;
        margin-top: 5rem;
      }

      .card {
        margin: 2rem;
        flex-basis: 45%;
        padding: 2rem;
        text-align: left;
        color: inherit;
        text-decoration: none;
        border: 1px solid black;
        border-radius: 20px;
         -moz-box-shadow:    inset 0 0 10px #000000;
   -webkit-box-shadow: inset 0 0 10px #000000;
   box-shadow:         inset 0 0 10px #000000;
        transition: color 0.15s ease, border-color 0.15s ease;
      }

      .card:hover,
      .card:focus,
      .card:active {
        color: #0070f3;
        border-color: #0070f3;
      }

      .card h3 {
        margin: 0 0 1rem 0;
        font-size: 1.5rem;
      }

      .card p {
        margin: 0;
        font-size: 1.25rem;
        line-height: 1.5;
      }
      #l{
          text-align:center;
      }
      .logo {
        height: 1em;
      }
      .title {
        margin: 0;
        line-height: 1.15;
        font-size: 4rem;
        padding: 5rem 0;
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
      #pro{
        color:blue;
      }
      form{
        font-size:30px;
    padding:0.00010rem 5em 5em 5em;         
    margin: 100px 100px 100px 100px;
      }
      Button{
        align-items:center;
      }
      #new{
        text-align:center;
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
    </>
  )
}