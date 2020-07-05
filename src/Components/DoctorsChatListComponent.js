import React from "react";
import DoctorFooter from "./DoctorsFooterComponent";
import { Link } from "react-router-dom";
const DoctorsChatList = (props) => {
  return (
    <>
      <div className="container mt-2">
        <div className="list-group list-group-co">
          <Link className="list-group-item chat-list-item">
            <div className="row">
              <img
                src={require("../assets/images/user.png")}
                alt="user"
                className="chat-list-user-image"
              />
              <div className="mr-1 chat-text-container">
                <h5 className="chat-list-title">User 1</h5>

                <p className="chat-list-text">99/02/26</p>
              </div>
              <div className="mr-auto text-center ml-3">
                <div className="unread-alert">5</div>
                <div className="mt-2 chat-list-text">22:50</div>
              </div>
            </div>
          </Link>
          <Link className="list-group-item chat-list-item">
            <div className="row">
              <img
                src={require("../assets/images/user.png")}
                alt="user"
                className="chat-list-user-image"
              />
              <div className="mr-1 chat-text-container">
                <h5 className="chat-list-title">User 2</h5>

                <p className="chat-list-text">99/02/26</p>
              </div>
              <div className="mr-auto text-center ml-3">
                <div className="unread-alert">3</div>
                <div className="mt-2 chat-list-text">22:50</div>
              </div>
            </div>
          </Link>
          <Link className="list-group-item chat-list-item">
            <div className="row">
              <img
                src={require("../assets/images/user.png")}
                alt="user"
                className="chat-list-user-image"
              />
              <div className="mr-1 chat-text-container">
                <h5 className="chat-list-title">User 3</h5>

                <p className="chat-list-text">99/02/26</p>
              </div>
              <div className="mr-auto text-center ml-3">
                <div className="unread-alert">1</div>
                <div className="mt-2 chat-list-text">22:50</div>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <DoctorFooter />
    </>
  );
};

export default DoctorsChatList;
