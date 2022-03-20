import classes from "./Card.module.css";

// Card component will wrap around JSX or Card will inject JSX. THis is a common case and has built in children which every JSX object has.
function Card(props) {
  return <div className={classes.card}>{props.children}</div>;
}
export default Card;
