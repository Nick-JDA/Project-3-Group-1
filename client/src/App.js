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
import Signup from "./pages/Signup";
import ActionAdventure from "./pages/ActionAdventure";
import ShooterPuzzle from "./pages/ShooterPuzzle";
import ActionShooter from "./pages/ActionShooter";
import AdventurePuzzle from "./pages/AdventurePuzzle";
import ActionRPG from "./pages/ActionRPG";
import Adventure from "./pages/Adventure";
import AdventureIndie from "./pages/AdventureIndie";
import GTA5 from "./pages/GTA5";
import Witcher3 from "./pages/Witcher3";
import Portal2 from "./pages/Portal2";
import Portal from "./pages/Portal";
import TombRaider from "./pages/TombRaider";
import CSGO from "./pages/CSGO";

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
              <Route path="/ActionAdventure" element={<ActionAdventure/>}/>
              <Route path="/ShooterPuzzle" element={<ShooterPuzzle/>}/>
              <Route path="/ActionShooter" element={<ActionShooter/>}/>
              <Route path="/AdventurePuzzle" element={<AdventurePuzzle/>}/>
              <Route path="/ActionRPG" element={<ActionRPG/>}/>
              <Route path="/Adventure" element={<Adventure/>}/>
              <Route path="/AdventureIndie" element={<AdventureIndie/>}/>
              <Route path="/GrandTheftAutoV" element={<GTA5/>}/>
              <Route path="/TheWitcher3:WildHunt" element={<Witcher3/>}/>
              <Route path="/Portal2" element={<Portal2/>}/>
              <Route path="/TombRaider" element={<TombRaider/>}/>
              <Route path="/Counter-Strike:GlobalOffensive" element={<CSGO/>}/>
              <Route path="/Portal" element={<Portal/>}/>

            </Routes>
          </div>
        </Router>
    </ApolloProvider>

  );
}

export default App;