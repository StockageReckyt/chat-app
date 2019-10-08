import React from "react";
//import Contact from "./components/Contact";
import "./App.css";
import ContactList from "./components/ContactList";
import "./components/Contact.css";

const App = () => {
  return (
    <div className="App">
      {ContactList.map(item => (
        <ul className="contact">
          <li>{item.name}</li>
          <img className="avatar" src={item.avatar} alt="toto" />
        </ul>
      ))}
    </div>
  );
};

export default App;
