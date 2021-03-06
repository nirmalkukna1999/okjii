import React from "react";
import { MDBInputGroup } from "mdbreact";

const GetAppLink = () => {
  return (
    <div className="getapp-link ">
      <MDBInputGroup
        style={{ height: '100%', padding: 'none'}}
        container
        ClassName="mb-3"
        prepend="+91 "
        append="GET APP LINK"
        hint="Mobile Number"
        type="number"
        size="lg"
      />
    </div>
  );
};

export default GetAppLink;
