import classes from "./MeetupList.module.css";
import MeetupItem from "./MeetupItem";

// Maps each meetup to a JSX object item which is a MeetupItem
// Could pass meetup={meetup} instead of listing them here, but would have to destructure it inside MeetupItem.
function MeetupList(props) {
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
          description={meetup.description}
        />
      ))}
    </ul>
  );
}

export default MeetupList;
