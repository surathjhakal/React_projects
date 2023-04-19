import React from "react";
import "./InfoBox.css";
import { Card, CardContent, Typography } from "@material-ui/core";

const InfoBox = ({ title, cases, total, onClick, color, active }) => {
  return (
    <Card
      className="infoBox"
      onClick={onClick}
      style={{ borderTop: `10px solid ${active ? color : "transparent"}` }}
    >
      <CardContent>
        <Typography className="infoBox_title" color="textSecondary">
          {title}
        </Typography>
        <h2 className="infoBox_cases" style={{ color: color }}>
          Today : {cases}
        </h2>
        <Typography className="infoBox_total" color="textSecondary">
          {total} Total
        </Typography>
      </CardContent>
    </Card>
  );
};

export default InfoBox;
