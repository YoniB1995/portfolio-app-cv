import React from "react";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import { Paper } from "@material-ui/core";

const paperstyle = {
  padding: "6px 1px 3px 4px",
  textAlign: "left",
  width: "10rem",
};

const styleDot = {};

export default function Stages() {
  return (
    <Timeline align="alternate">
      <TimelineItem className="timeLine">
        <TimelineSeparator>
          <TimelineDot color="primary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} style={paperstyle}>
            <b>2007-2013</b>
            <br /> High School Matriculation Certificate - Geography and Oral
            Law
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem className="timeLine">
        <TimelineSeparator>
          <TimelineDot color="primary" style={styleDot} />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} style={paperstyle}>
            <b>2014-2020</b> <br /> Officer at Combat Regiment "Kfir" and
            "Bardelas".
            <br></br> Earned Brigadier General Honor at 2018.
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem className="timeLine">
        <TimelineSeparator>
          <TimelineDot color="primary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} style={paperstyle}>
            <b>Today. </b>
            <br /> Student at Tech-Career Academy center . Learning Full-Stack
            Web-Development includes Frontend & Backend Platforms.
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem className="timeLine">
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} style={paperstyle}>
            <b>2021 - ?</b>
            <br /> Looking for a job at the Industry , Highly motivated
            Full-Stack Web Developer.
          </Paper>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
