// Loads and displays all meetups
import MeetupList from "../components/meetups/MeetupList";
import { useState, useEffect } from "react";

// Can render an array of list items like this: {[<li>Item1</li>, <li>Item2</li>]}
// React recommends each list item havae a unique key: <li key={meetup.id}>
function AllMeetupsPage() {
  // Start in loading state
  const [isLoading, setIsLoading] = useState(true);
  // Array of meetups -  empty array is overrided once we get data
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  // Use effect allows running code based on conditions, the second argument is the conditions and if omitted.
  // If array is empty, will only execute the first time. This happens b/c it checks the conditions against themselves based on the
  // last time useEffect was executed. The code executes whenever dependency(second arg) changes. Should add all external values the
  // code relies on. UseEffect is proper solution for executing side effects and when they should run.
  useEffect(() => {
    setIsLoading(true);
    // Get data from database.
    fetch(
      "https://react-getting-started-9eab0-default-rtdb.firebaseio.com/meetups.json"
    )
      .then((response) => {
        // converts json data to javascript object
        return response.json();
        // json() also returns promise, so another then is needed to reach data
      })
      .then((data) => {
        const meetups = [];
        for (let key in data) {
          let meetup = {
            id: key,
            ...data[key],
          };

          meetups.push(meetup);
        }
        setIsLoading(false);
        setLoadedMeetups(meetups);
      });
  }, []);

  if (isLoading && setLoadedMeetups) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  // Only return meetup data if not loading
  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
}

export default AllMeetupsPage;
