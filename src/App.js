import React from "react";
import Contact from "./components/Contact";
import ContactList from "./components/ContactList";
import "./App.css";
import "./components/Contact.css";

const App = () => {
  return (
    <div className="App">
      {ContactList.map(item => (
        <Contact name={item.name} avatar={item.avatar} online={item.online} />
      ))}
    </div>
  );
};

export default App;
