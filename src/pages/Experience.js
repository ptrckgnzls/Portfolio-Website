import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#53703ae1">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2012 - 2018"
          iconStyle={{ background: "#000000", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Congressional Integrated High School, Dasmariñas, Cavite
          </h3>
          <p> High School Diploma</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2018 - Present"
          iconStyle={{ background: "#000000", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Lyceum of the Philippines University-Cavite, General Trias, Cavite
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Bachelor of Science in Computer Engineering
          </h4>

          <p> Computer Engineering Student</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2022 - Present"
          iconStyle={{ background: "#000000", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Intern - Hacktiv Colab Inc.
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Makati, Philippines
          </h4>
          <p>On-the-Job Trainee on a Development Team</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
