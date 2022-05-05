import "./Card.css";
// Card class -> wrapper class

function Card(props) {
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
}

export default Card;
