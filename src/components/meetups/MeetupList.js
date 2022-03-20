/* Instead of writing code for fetching meetups here, we are assuming the component that fetches this code to worry about 
    getting the meetups. This is advantagous b/c we are going to use MeetupList componenet in AllMeetups, which fetches 
    the list data(DUMMY_DATA).
*/
import classes from "./MeetupList.module.css";
import MeetupItem from "./MeetupItem";

// Maps each meetup to a JSX object item which is a MeetupItem
function MeetupList(props) {
  return <ul className={classes.list}>
      {props.meetups.map(meetup => <MeetupItem />)}
  </ul>;
}

export default MeetupList;
