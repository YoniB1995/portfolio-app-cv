import React from 'react';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import { Paper } from '@material-ui/core';

const paperstyle={
	padding: '6px 4px 10px 4px',
	textAlign:'right',
    width:"200px",
	margin:"10px"
}



const styleDot = {
    
}
const timeLineMoveRight ={
    marginLeft:"20px"
}
const timeLineMoveLeft ={
    marginRight:"40px"
}


export default function StagesHebrew() {
	return (
		<Timeline align="alternate">
			<TimelineItem className="timeLine">
				<TimelineSeparator>
					<TimelineDot color="primary" />
					<TimelineConnector />
				</TimelineSeparator>
				<TimelineContent style={timeLineMoveRight}>
				<Paper elevation={3} style={paperstyle}><b>2007-2013</b><br /> בגרות מלאה , מגמות גאוגרפיה ותורה שבעל פה ( תושב''ע)
				</Paper>
				</TimelineContent>
			</TimelineItem>
			<TimelineItem className="timeLine">
				<TimelineSeparator style={timeLineMoveLeft}>
					<TimelineDot color="primary" style={styleDot}  />
					<TimelineConnector />
				</TimelineSeparator>
				<TimelineContent style={timeLineMoveLeft}>
				<Paper elevation={3} style={paperstyle}><b>2014-2020</b> <br /> שירות צבאי 6 שנים , קצין קרבי בחטיבת כפיר וגדוד ברדלס
                <br></br> קבלת תעודת הצטיינות מקצין איסוף ראשי דרגת תא''ל
				</Paper>
				</TimelineContent>
			</TimelineItem>
			<TimelineItem className="timeLine">
				<TimelineSeparator>
					<TimelineDot color="primary" />
					<TimelineConnector />
				</TimelineSeparator>
				<TimelineContent >
				<Paper elevation={3}
					style={paperstyle}><b>2020.12-2021.10 </b><br /> סטודנט בטק-קריירה בלוד, מבצע הכשרת קורס פול-סטאק המשלבת התמקצעות בעבודה עם פלטפורמות צד לקוח וצד שרת
				</Paper>
				</TimelineContent>
			</TimelineItem>
			<TimelineItem className="timeLine">
				<TimelineSeparator>
					<TimelineDot />
				</TimelineSeparator>
				<TimelineContent>
				<Paper elevation={3}
					style={paperstyle}><b>2021 - ?</b><br /> בעל מוטיבציה רבה , בחיפוש אחר עבודה ראשונה בתעשייה בתור מפתח פול-סטאק ג'וניור
				</Paper>
				</TimelineContent>
			</TimelineItem>
		</Timeline>
	);
}
