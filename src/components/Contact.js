import React from "react";
import "./Contact.css";
import "./ContactList";

const Contact = props => (
  <div className="Contact">
    <img className="avatar" src={props.avatar} alt={props.name} />
    <div>
      <h1 className="name">{props.name}</h1>
      <div>
        <p className="status">
          {props.online ? (
            <div>
              <p className="status-online"></p>
              <p className="status-text">Online</p>
            </div>
          ) : (
            <div>
              <p className="status-offline"></p>
              <p className="status-text">Offline</p>
            </div>
          )}
        </p>
      </div>
    </div>
  </div>
);

export default Contact;
