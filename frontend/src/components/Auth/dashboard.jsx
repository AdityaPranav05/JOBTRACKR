// Home.js

import React from 'react';
import { Link } from 'react-router-dom';
import './dashboard.css';


const Dashboard = () => {
  return (
    <div className="home-container1234">
          <div className="contentxyz">
              <h1 className='xyzz'>JOBTRACKR</h1>
              <h3 className='abcdd'>Making Hiring Better.</h3>
        <Link to="/login" className="get-started">GET STARTED</Link>
      </div>
    </div>
  );
}

export default Dashboard;
