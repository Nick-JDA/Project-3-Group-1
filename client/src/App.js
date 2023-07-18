import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";


import Home from "./pages/Home";
import Details from "./pages/Detail";
import Login from "./pages/Login";
import NoMatch from "./pages/NoMatch";
import OrderHisotry from "./pages/OrderHistory";
import Signup from "./pages/Signup";
import Success from "./pages/Success";
//import Login from "./pages/Login";
//import Signup from "./components/Signup";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
        <Router>
          <div className=" bg-[#1b2838]">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login/>}/>
              <Route path="/signup" element={<Signup/>}/> 
              {/* <Route path="/products/:id" element={Details}/> */}

            </Routes>
          </div>
        </Router>
    </ApolloProvider>

  );
}

export default App;