import React from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";


const Users = () => {

    
  return (
    <div>
      <Sidebar activeMenu="Dashboard" />
      <div style={{ marginLeft: "16rem" }}>
        <Header />
        <div style={{width:'90%', marginLeft:'5%'}}>
          <div className="font-bold text-lg tracking-wide my-2">Users</div>
        </div>
      </div>
    </div>
  );
};

export default Users;
