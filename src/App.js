import React from "react";
import Table from "./components/table";
import Footer from '../src/components/footer';
import Header from '../src/components/header';
import NavBar from "../src/components/navbar";

function App() {
  return (
  <>
    <Header/>
    <NavBar/>
    <Table/>
    <Footer/>
  </>
  )
}

export default App;