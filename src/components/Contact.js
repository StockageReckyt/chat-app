import React, { Component } from "react";
import "./Contact.css";
// import ContactList from "./ContactList";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = { online: false };
  }
  render() {
    return (
      <div className="Contact">
        <img className="avatar" src={this.props.avatar} alt={this.props.name} />
        <div>
          <h1 className="name">{this.props.name}</h1>
          <div>
            <p className="status">
              <div
                onClick={event => {
                  const newStatus = !this.state.online;
                  this.setState({ online: newStatus });
                }}
              >
                <span
                  className={
                    this.state.online ? "status-online" : "status-offline"
                  }
                ></span>
                <span className="status-text">
                  {this.state.online ? "online" : "offline"}
                </span>
              </div>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;

/* <p className="status">
{this.props.online ? (
  <div>
    <span className="status-online"></span>
    <span className="status-text">Online</span>
  </div>
) : (
  <div>
    <span className="status-offline"></span>
    <span className="status-text">Offline</span>
  </div>
)}
</p> */
