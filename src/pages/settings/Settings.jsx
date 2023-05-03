import React from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBTypography,
  MDBIcon,
} from "mdb-react-ui-kit";
import "./settings.css";
import { Button } from "@mui/material";

export default function PersonalProfile() {
  return (
    <div className="container">
      <h1>Settings</h1>
      <div className="wrapper-left">
        <img
          src="https://avatars.mds.yandex.net/i?id=a665ee081a03ee8bdfaa8366925a1edd-6946760-images-thumbs&n=13"
          alt=""
        />
      </div>
      <div className="wrapper-right">
        <ul>
          <li>
            <p>Dair</p>
          </li>
          <li>
            <p>Phone Number</p>
          </li>
          <li>
            <p>Nickname</p>
          </li>
        </ul>
      </div>
      <a href="https://react.school" target="_blank" className="styled.button">
        <Button> Link Button </Button>
        
      </a>
    </div>
  );
}
