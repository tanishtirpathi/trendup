import React from "react";
import "./home.css";

const App = () => {
  return (
    <div className="container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="logo-placeholder" />
        <nav className="nav-list">
          <p>Home</p>
          <p>compoentst</p>
          <p>takhsja</p>
          <p>sdfdsds</p>
          <p>adsfasdfad</p>
          <p>sdafdsafads</p>
          <p>asdfadsfads</p>
          <p>fasdfasdfasd</p>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        {/* Top Circles */}
        <div className="circle-row">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="circle" />
          ))}
        </div>
        {/* Content could go here */}
      </main>

      {/* Right Sidebar */}
      <aside className="right-sidebar" />
    </div>
  );
};

export default App;
