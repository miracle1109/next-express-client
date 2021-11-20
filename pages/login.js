import React from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import Login from "../components/Login/Login2";

const login = (props) => {
  return (
    <>
      <Layout />
      <div className="page" id="top">
        <Login />
      </div>
    </>
  );
};

export default login;
