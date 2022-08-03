import "./App.css";

function App() {
  return (
    <div className="text-center mt-5 d-flex justify-content-center">
      <form style={{ width: 350 }}>
        <img
          className="mb-3"
          src="Logo.svg"
          height={"16%"}
          width={"16%"}
          alt="logo"
        />
        <h1 className="mb-3 h3 font weight normal">Sign In Page</h1>
        <p>
          Build a sign-in page to display your command on bootstrap{" "}
          <span style={{ color: "red" }}>text with color red</span> pseudo
          element.
        </p>
        <a href={"https://www.google.com/"}>
          Works in latest Chrome, Safari and Firefox. This is a clickable
          section that will take us to new page.
        </a>

        <div className={"mt-3 mb-3"}>
          <input
            type={"text"}
            className={"form-control mb-2"}
            placeholder={"username"}
            required
            autoFocus
          />
          <input
            type={"password"}
            className={"form-control"}
            placeholder={"password"}
          />
        </div>
        <div className={"checkbox"}>
          <input type={"checkbox"} value={"Remember Me"} /> Remember Me
        </div>
        <div className={"mt-3 d-grid gap-6 col-12 mx-auto"}>
          <button className={"btn btn-lg btn-primary btn-block"}>
            Sign In
          </button>
        </div>
        <div className="mt-4" style={{ color: "grey" }}>
          <small>
            <em>2017-2018</em>
          </small>
        </div>
      </form>
    </div>
  );
}

export default App;
