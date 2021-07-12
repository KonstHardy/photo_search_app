import React from "react";

import "./pageNotFound.css";

const PageNotFound = () => {
  return (
    <div className="pageNotFound">
      <div className="wrapper">
        <div className="pageNotFound__content">
          <h1 className="pageNotFound__title">
            Error 404
            <br />
            Page Not Found
          </h1>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
