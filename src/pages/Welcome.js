import React, { useEffect, useState } from "react";
import { GoogleLogin } from "react-google-login";
import GoogleButton from "react-google-button";

import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../actions/user";
import { useNavigate } from "react-router";
import MonitorIcon from "@mui/icons-material/Monitor";
import GoogleIcon from "@mui/icons-material/Google";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import HomeScreenSVG from "../assets/svg/home_screen.svg";
import GradingIcon from "@mui/icons-material/Grading";
import FolderSharedIcon from "@mui/icons-material/FolderShared";
import SchoolIcon from "@mui/icons-material/School";
import CodeIcon from "@mui/icons-material/Code";
import LanguageIcon from "@mui/icons-material/Language";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import AssignmentIcon from "@mui/icons-material/Assignment";
import EmailIcon from "@mui/icons-material/Email";
import Spinner from "../components/UI/Spinner";
import CodeAnimation from "../assets/animations/code.gif";
import BoltRoundedIcon from '@mui/icons-material/BoltRounded';
import DocAnimation from "../assets/animations/doc.gif";
// import logo from '../../images/logo.png'

console.log(process.env.REACT_APP_GOOGLE_CLIENT_ID);

const Welcome = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userDetails = useSelector((state) => state.userDetails);
  const { isAuthenticated, loading } = userDetails;
  const [background, setBackground] = useState("transparent");

  useEffect(() => {
    if (isAuthenticated) {
      return navigate("/home");
    }
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setBackground("white");
      } else if (window.scrollY === 0) {
        setBackground("transparent");
      }
    });
    return () => {
      window.removeEventListener("scroll", null);
    };
  }, []);
  const onSuccessHandler = (res) => {
    console.log(res);
    dispatch(userLogin(res.tokenId));
  };

  return (
    <>
      <div className="relative w-full mx-auto bg-haikei shadow-xl  rounded p-4 h-screen bg-cover flex flex-row justify-between sm:w-full">
        <header
          className={`h-20 fixed left-0 top-0 bg-${background} shadow-lg flex w-screen md:justify-between lg:justify-between xl:justify-between sm:flex-start items-center sm:h-24`}
          style={{
            transition: "background-color 200ms linear",
          }}
        >
          <div className="ml-8 flex flex-row items-center sm:flex-col sm:ml-4">
            <img
              alt=""
              className="mr-2"
              src="https://imgur.com/PcX7P4N.png"
              height={50}
              width={50}
            // src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/60/000000/external-online-class-online-learning-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png"
            />
            <p
              className={`text-xl font-bold ${background === "white" ? "text-black" : "text-white"
                } `}
              style={{
                fontFamily: ["Montserrat", "sans-serif"],
              }}
            >
              Pathshala
            </p>
          </div>
          <div
            className="px-4 flex justify-between"
            style={{
              fontStyle: ["Sen", "sans-serif"],
            }}
          >
            {loading ? (
              <Spinner />
            ) : (
              <GoogleLogin
                clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                // buttonText="Sign in with Google"
                render={(renderProps) => (
                  <GoogleButton
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                    style={{
                      borderRadius: '20px'
                    }}
                  >
                    Sign in with Google
                  </GoogleButton>
                )}
                onSuccess={onSuccessHandler}
                cookiePolicy={"single_host_origin"}
                style={{
                  color: "red",
                  padding: '10px'
                }}
              />
            )}
          </div>
        </header>

        <div
          className="flex justify-between my-16 w-full items-center sm:flex-col"
          style={{
            fontFamily: ["Poppins", "sans-serif"],
          }}
        >
          <div>
            <div className="font-extrabold text-6xl my-2">
              Discover 🌐{" "}
            </div>
            <div className="font-extrabold text-6xl my-2">the new way of Learning with  </div>
            <div className="text-white font-extrabold text-6xl my-2">
              Pathshala
            </div>
          </div>
          <div className="w-1/2 sm:w-full">
            <img src={HomeScreenSVG} alt="" />
          </div>
        </div>
      </div>

      <div
        className="flex flex-col items-center justify-between mx-auto my-8"
        style={{
          fontFamily: ["Sen", "sans-serif"],
          // width: "1300px",
        }}
      >
        <div className="text-5xl font-extrabold sm:text-center">
          <h1
            className="my-8 "
            style={{
              color: "#4c4c4c",
            }}
          >
            All features in one place
          </h1>
        </div>
        <div>
          <div
            className="flex flex-wrap justify-center w-full space-evenly"
            id="section1"
          >
            <div className="flex mx-4 w-96 m-4 sm:w-11/12 sm:mx-auto my-8 items-center">
              <div className="rounded-full w-16 h-16 bg-yellow-400 text-white text-center text-xl flex items-center">
                <div className="rounded-full w-16 h-16  text-center text-xl flex items-center">
                  <SchoolIcon
                    className="mx-auto text-xl cursor-pointer"
                    style={{
                      fontSize: "2.5rem",
                    }}
                  />
                </div>
              </div>
              <div className="flex flex-col ml-4">
                <h1 className="text-2xl font-extrabold">
                  Create or Join Classroom
                </h1>
                <p className="text-sm break-normal break-words">
                  Depending on who you are, you can create or join as many
                  classrooms as you want
                </p>
              </div>
            </div>
            <div className="flex mx-4 w-96 m-4 sm:w-11/12 sm:mx-auto my-8 items-center">
              <div className="rounded-full w-16 h-16 bg-green-400 text-white text-center text-xl flex items-center">
                <div className="rounded-full w-16 h-16  text-center text-xl flex items-center">
                  <GradingIcon
                    className="mx-auto text-xl cursor-pointer"
                    style={{
                      fontSize: "2.5rem",
                    }}
                  />
                </div>
              </div>
              <div className="flex flex-col ml-4">
                <h1 className="text-2xl font-extrabold">
                  Auto Grading for MCQ Quizzes
                </h1>
                <p className="text-sm break-normal break-words">
                  Create MCQ Quizzes with ease. Our auto-grader runs on each
                  submission and auto-grades them
                </p>
              </div>
            </div>
            { <div className="flex mx-4 w-96 m-4 sm:w-11/12 sm:mx-auto my-8 items-center">
              <div className="rounded-full w-16 h-16 bg-blue-600 text-white text-center text-xl flex items-center justify-center">
                <div className="rounded-full w-16 h-16  text-center text-xl flex items-center">
                  <MonitorIcon
                    className="mx-auto text-xl cursor-pointer"
                    style={{
                      fontSize: "2.5rem",
                    }}
                  />
                </div>
              </div>
              <div className="flex flex-col ml-4 ">
                <h1 className="text-2xl font-extrabold">
                  Peer to Peer Video Call
                </h1>
                <p className="text-sm break-normal break-words">
                  Create and share video meets with your class easily
                </p>
              </div>
            </div> }

            <div className="flex mx-4 w-96 m-4 sm:w-11/12 sm:mx-auto my-8 items-center">
              <div className="rounded-full w-16 h-16 bg-red-600 text-white text-center text-xl flex items-center">
                <div className="rounded-full w-16 h-16  text-center text-xl flex items-center">
                  <GoogleIcon
                    className="mx-auto text-xl cursor-pointer"
                    style={{
                      fontSize: "2.5rem",
                    }}
                  />
                </div>
              </div>
              <div className="flex flex-col ml-4">
                <h1 className="text-2xl font-extrabold">Sign in with Google</h1>
                <p className="text-sm break-normal break-words">
                  No hassles of remembering your passwords. Sign in easily with
                  your Google account
                </p>
              </div>
            </div>

            <div className="flex mx-4 w-96 m-4 sm:w-11/12 sm:mx-auto my-8 items-center">
              <div className="rounded-full w-16 h-16 bg-yellow-600 text-white text-center text-xl flex items-center">
                <div className="rounded-full w-16 h-16  text-center text-xl flex items-center">
                  <PeopleAltIcon
                    className="mx-auto text-xl cursor-pointer"
                    style={{
                      fontSize: "2.5rem",
                    }}
                  />
                </div>
              </div>
              <div className="flex flex-col ml-4">
                <h1 className="text-2xl font-extrabold">View Submissions</h1>
                <p className="text-sm break-normal break-words">
                  As an instructor view all submissions made on your MCQ Quiz or
                  assignment
                </p>
              </div>
            </div>

            <div className="flex mx-4 w-96 m-4 sm:w-11/12 sm:mx-auto my-8 items-center">
              <div className="rounded-full w-16 h-16 bg-pink-400 text-white text-center text-xl flex items-center">
                <div className="rounded-full w-16 h-16  text-center text-xl flex items-center">
                  <FolderSharedIcon
                    className="mx-auto text-xl cursor-pointer"
                    style={{
                      fontSize: "2.5rem",
                    }}
                  />
                </div>
              </div>
              <div className="flex flex-col ml-4">
                <h1 className="text-2xl font-extrabold">
                  Share files and assignments
                </h1>
                <p className="text-sm break-normal break-words">
                  Create and upload file based assignments, also allowing the
                  instructor to view all students' submissions and grade them
                  easily
                </p>
              </div>
            </div>

            <div className="flex mx-4 w-96 m-4 sm:w-11/12 sm:mx-auto my-8 items-center">
              <div className="rounded-full w-16 h-16 bg-purple-700 text-white text-center text-xl flex items-center">
                <div className="rounded-full w-16 h-16  text-center text-xl flex items-center">
                  <AssignmentIcon
                    className="mx-auto text-xl cursor-pointer"
                    style={{
                      fontSize: "2.5rem",
                    }}
                  />
                </div>
              </div>
              <div className="flex flex-col ml-4">
                <h1 className="text-2xl font-extrabold">
                  Submit Assignments & Quizzes with ease
                </h1>
                <p className="text-sm break-normal break-words">
                  Get instant result of your performance after submitting an MCQ
                  Quiz. Easily attach files in your assignment submissions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row-reverse justify-between p-8 rounded-lg sm:flex-col-reverse sm:flex-wrap-reverse sm:text-left sm:p-0 sm:flex-start">
        <div>
          <img src={DocAnimation} alt="" />
        </div>
        <div
          className="flex flex-col items-center justify-center w-11/12 mx-auto sm:flex-start "
          style={{
            fontFamily: ["Sen", "sans-serif"],
          }}
        >
          <div className="w-4/5 sm:w-full">
            <div className="text-5xl font-extrabold">
              <h1
                className="my-8"
                style={{
                  color: "#4c4c4c",
                }}
              >
                Connect, Collaborate, Learn
              </h1>
            </div>

            <div>
              <h1
                className="text-xl font-extrabold"
                style={
                  {
                    // color: "#4c4c4c",
                    // fontSize: "1.5rem",
                  }
                }
              >
                A one stop solution to make online learning fun and more convenient to manage, and easier to use both for teachers and students.<br />
                New features Comming Soon ... 😎🚀
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between p-8 rounded-lg sm:flex-col-reverse sm:flex-wrap-reverse sm:p-0">
        <div>
          <img src={CodeAnimation} alt="" />
        </div>
        <div
          className="flex flex-col items-center justify-center w-11/12 mx-auto sm:w-full "
          style={{
            fontFamily: ["Sen", "sans-serif"],
          }}
        >
          <div className="text-5xl font-extrabold sm:text-center">
            <h1
              className="my-8"
              style={{
                color: "#4c4c4c",
              }}
            >
              Meet the Developers
            </h1>
          </div>

          <div className="flex ">
            <div className="flex flex-col items-center justify-center">

              <div className="text-2xl font-extrabold flex mx-4 sm:mx-0 ">
              Mulayam Singh Yadav
                <span className="">
                  <a href="https://www.linkedin.com/in/mulayam-singh-yadav-a64b9a109/" target="_blank">
                    <BoltRoundedIcon
                      className="mx-4 text-xl cursor-pointer "
                      style={{
                        fontSize: "2rem",
                        color: "#FDD023",
                      }}
                    />
                  </a>
                </span>
              </div>
              <div className="text-2xl font-extrabold flex mx-4 sm:mx-0 ">
                Deepak Yadav
                <span className="">
                  <a href="https://www.linkedin.com/in/nitin-gupta-750b2019b/" target="_blank">
                    <BoltRoundedIcon
                      className="mx-4 text-xl cursor-pointer "
                      style={{
                        fontSize: "2rem",
                        color: "#FDD023",
                      }}
                    />
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {}
    </>
  );
};

export default Welcome;
