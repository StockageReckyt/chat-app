import React from "react";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <div class="App">
      <Contact
        name="React"
        avatar="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
        online={true}
      />
      <Contact
        name="Angular"
        avatar="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png"
        online={false}
      />
      <Contact
        name="PHP"
        avatar="http://pngimg.com/uploads/php/php_PNG7.png"
        online={false}
      />
    </div>
  );
}

export default App;
