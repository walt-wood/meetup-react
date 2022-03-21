// Loads only new meetups

// useHistory hook now is useNavigate
import { useNavigate } from "react-router-dom";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  //used to manipulate browser history
  const navigate = useNavigate();
  // Sending http request to Firebase database.
  function addMeetupHandler(meetupData) {
    // fetch(); is stnd JS to send http get request. Adding meetups.json on the end tells Firebase to create a new collection named meetups.
    fetch(
      "https://react-getting-started-9eab0-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application.json",
        },
      }
    ).then(() => {
      // then retrns promise from fetch
      // history.push() pushes to top of history stack
      // replace won't allow usr to use back button
      // navigate is updated react code
      navigate("/meetup-react/", { replace: true });
    });
  }
  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;
