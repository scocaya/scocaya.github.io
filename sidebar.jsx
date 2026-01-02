function Sidebar() {
  return (
    <aside>
      {/* <img
        src="images/plants1.png"
        alt="plants"
        style={{
          width: "14em",
          marginTop: "-1.8em",
          marginLeft: "-0.6em",

        }}
      /> */}
      <h2>navigation</h2>
      <ul>
        <li><a href="index.html">home</a></li>

        <li>
          <small>probably important</small>
          <ul>
            <li><a href="logs.html">site logs</a></li>
            <li><a href="guestbook.html">guestbook</a></li>
          </ul>
        </li>

        <li>
          <small>the fun bits</small>
          <ul>
            <li><a href="funny.html">funniest things</a></li>
            <li><a href="gay.html">queerness</a></li>
            <li><a href="associations.html">associate me w/</a></li>
          </ul>
        </li>
      </ul>
    </aside>
  );
}

ReactDOM
  .createRoot(document.getElementById("sidebar-root"))
  .render(<Sidebar />);

const sidebarContainer = document.getElementById("sidebar-root");

if (sidebarContainer) {
  ReactDOM.createRoot(sidebarContainer).render(<Sidebar />);
}
