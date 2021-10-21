import React, { useState, useEffect } from "react";
import "../layout/Question.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

const Question = () => {
  const [que, setQue] = useState("");
  const [ans, setAns] = useState("");
  async function getDetails() {
    document.querySelector("#ans").value = "";
    document.querySelector("#error").style.display="none";
    await axios
      .get("https://jservice.io/api/random")
      .then((data) => {
        console.log(data.data[0].answer);
        setQue(data.data[0].question);
        setAns(data.data[0].answer);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function checkAns() {
    const answer = document.querySelector("#ans").value;
    if(answer===""){
       document.querySelector("#error").style.display="block";
    }
    else if (ans.toUpperCase() === answer.toUpperCase()) {
      window.alert("Correct Answer");
    } else {
      window.alert("Wrong Answer");
    }
  }
  useEffect(() => {
    if (que === "") {
      getDetails();
    }
  });
  return (
    <div className="App">
      <div className="container mt-sm-5 my-1">
        <div className="question ml-sm-5 pl-sm-5 pt-2">
          <div className="py-2 h5">
            <b>Q. {que}</b>
          </div>
          <div className="ml-md-3 ml-sm-3 pl-md-5 pt-sm-0 pt-3" id="options">
            <input
              type="text"
              placeholder="Enter your answer here.."
              className="ans"
              id="ans"
              onChange={()=>{
                  document.querySelector("#error").style.display="none";
              }}
            ></input>
          </div>
          <div className="ml-md-3 ml-sm-3 pl-md-5 pt-sm-0 pt-3" id="options">
            <h6 className="error" id="error">
              Please enter your answer before submit..
            </h6>
          </div>
        </div>
        <div className="d-flex align-items-center pt-3">
          <div id="prev">
            {" "}
            <button
              className="btn btn-primary"
              onClick={() => {
                checkAns();
              }}
            >
              Submit
            </button>{" "}
          </div>
          <div className="ml-auto mr-sm-5 ">
            {" "}
            <button
              className="btn btn-success "
              onClick={() => {
                getDetails();
              }}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
