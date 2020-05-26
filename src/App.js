import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Table from "./components/Table";
import Form from "./components/Form";
import Header from "./components/Header";
import Boot from "./components/Boot";

function App() {
  let st_data = [
    { id: 1, name: "guhan", username: "rrguhan", email: "rrguhan@gmail.com" },
    { id: 2, name: "Ra2m", username: "ram" },
    { id: 3, name: "Alex", username: "alex", bool: "true" },
    { id: 4, name: "Arya", username: "arya" },
    { id: 5, name: "guhan", username: "alex" },
  ];
  let another_data = [
    { id: 1, movie_name: "the secrete life of walter mitty" },
    { id: 2, movie_name: "passenger", genre: "sci-fi" },
    { id: 3, movie_name: "kill bill", director: "Torentino" },
  ];

  return (
    <div className="App">
      {/* <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Boot} />
          <Route exact path="/form" component={Form} />
        </Switch>
      </Router> */}
      <Boot
        st_data={st_data}
        fields={[
          { header_name: "ID", link: "id" },
          { header_name: "Name", link: "name" },
          { header_name: "Email", link: "email" },
          { header_name: "User Name", link: "username" },
          { header_name: "Bool", link: "bool" },
        ]}
      />
      <hr></hr>
      <h1>____________________________________________</h1>
      <hr></hr>
      <Boot
        st_data={another_data}
        fields={[
          { header_name: "ID", link: "id" },
          { header_name: "Movies Name", link: "movie_name" },
          { header_name: "Genre", link: "genre" },
          { header_name: "Directed by", link: "director" },
        ]}
      />
    </div>
  );
}

export default App;
