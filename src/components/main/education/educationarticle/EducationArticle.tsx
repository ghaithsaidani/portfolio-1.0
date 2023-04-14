import Timeline from "@mui/lab/Timeline";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import { Typography } from "@mui/material";
import { CustomTimelineContent } from "../../../../theme/Muicomponents/CustomTimelineContent";
import { Education } from "../../../../interfaces";

export const EducationArticle = () => {
  const educations: Education[] = [
    {
      id: "sesame",
      name: "sesame university",
      diploma: "Engineering's degree - Software Engineering",
      period: "2022 - 2025",
    },
    {
      id: "fsb",
      name: "faculty of sciences of bizerte",
      diploma: "Bachelor's degree - Software Engineering",
      period: "2019 - 2022",
    },
    {
      id: "ljfb",
      name: "Hbib Thamer High School	of Bizerte",
      diploma: "baccalaureate - Mathematics",
      period: "2015 - 2019",
    },
  ];
  return (
    <article className="grid place-items-center h-full">
      <Timeline
        sx={{
          paddingInline: 0,
          [`& .${timelineItemClasses.root}:before`]: {
            flex: 0,
            padding: 0,
          },
        }}
      >
        {educations.map((education, index) => (
          <TimelineItem key={education.id}>
            <TimelineSeparator>
              <TimelineDot />
              {index !== educations.length - 1 && <TimelineConnector />}
            </TimelineSeparator>
            <CustomTimelineContent>
              <Typography variant="h4">{education.name}</Typography>
              <Typography variant="h5">{education.diploma}</Typography>
              <Typography variant="h6">{education.period}</Typography>
            </CustomTimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </article>
  );
};
