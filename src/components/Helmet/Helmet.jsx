function Helmet({title, children}) {
  document.title = "Amazon -" + title;
  return <div>{children}</div>;
}

export default Helmet;
