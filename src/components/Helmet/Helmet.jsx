function Helmet(props) {
  document.title = "Amazon -" + props.title;
  return <div>{props.children}</div>;
}

export default Helmet;
