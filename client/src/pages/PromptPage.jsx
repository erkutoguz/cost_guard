import React, { useState } from "react";
import "../App.css";
import GPT from "../components/GPT";
import Answer from "../components/Answer";
import logo from "../images/logo.png";
import archevolveLogo from "../images/archevolveLogo.png";

function PromptPage() {
  const [answer, setAnswer] = useState(null);
  const [isLoading, setLoading] = useState(false);
  return (
    <div className="container">
      <div className="logo-container">
        <img className="logo" src={logo} alt="sahil-güvenlik-logo" />
        <h3
          style={{
            fontSize: "35px",
            marginTop: 0,
          }}
        >
          <b>
            Adaptive Learning Environment
            <span
              style={{
                fontSize: "20px",
                top: "-20px",
                position: "relative",
              }}
            >
              ®
            </span>
          </b>
        </h3>
      </div>

      <GPT setAnswer={setAnswer} setLoading={setLoading} />
      {answer && <Answer answer={answer} />}
      {isLoading && <div class="loader"></div>}
      {/* <Answer answer={answer} /> */}
      <div className="powered">
        <p
          style={{
            fontSize: "22px",
            marginTop: "6rem",
            fontWeight: 300,
          }}
        >
          Powered by
        </p>
        {/* <p
          style={{
            fontSize: "52px",
            fontWeight: 300,
            margin: 0,
          }}
        >
          <b>ArchEvolve®</b>
        </p>
        <hr
          style={{
            width: "300px",
          }}
        />
        <p
          style={{
            fontSize: "22px",
            fontWeight: 300,
          }}
        >
          Virtue
        </p> */}
        <img
          src={archevolveLogo}
          alt="archevolveLogo"
          className="archevolve-logo"
        />
        <p
          style={{
            fontSize: "20px",
            fontWeight: 300,
          }}
        >
          by Ali Cem Başarır
        </p>
      </div>
    </div>
  );
}

export default PromptPage;
