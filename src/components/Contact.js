import React from "react";
import "./Contact.css";

const Contact = props => (
  <div class="Contact">
    <img class="avatar" src={props.avatar} alt={props.name} />
    <div>
      <h1 class="name">{props.name}</h1>
      <div>
        <p class="status">
          {props.online ? (
            <div>
              <p class="status-online"></p>
              <p class="status-text">Online</p>
            </div>
          ) : (
            <div>
              <p class="status-offline"></p>
              <p class="status-text">Offline</p>
            </div>
          )}
        </p>
      </div>
    </div>
  </div>
);

export default Contact;
