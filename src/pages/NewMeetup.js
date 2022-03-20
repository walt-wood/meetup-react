// Loads only new meetups

import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
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
    );
  }
  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;
