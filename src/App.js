import "bootstrap/dist/css/bootstrap.min.css";
import icon1 from "./assets/images/icon1.png";
import icon2 from "./assets/images/icon2.png";
import icon3 from "./assets/images/icon3.png";
import icon4 from "./assets/images/icon4.png";
import ironhackLogo from "./assets/images/ironhack-logo.svg";
import menuTop from "./assets/images/menu-top.svg";
import reactLogo from "./assets/images/react-logo.svg";

let cardArray = [
  {
    img: icon1,
    alt: "Declarative icon",
    title: "Declarative",
    description: "React makes it painless to create interactive UIs.",
  },
  {
    img: icon2,
    alt: "Components icon",
    title: "Components",
    description: "Build encapsulated components that manage their state.",
  },
  {
    img: icon3,
    alt: "Single-way icon",
    title: "Single-way",
    description: "A set of immutable values are passed to the components.",
  },
  {
    img: icon4,
    alt: "JSX icon",
    title: "JSX",
    description: "Statically-typed,designed to run on modern browsers.",
  },
];

function App() {
  return (
    <div>
      <section className="box m-2 p-5 vh-120">
        <div className="d-flex justify-content-between mb-5 pb-5">
          <img src={ironhackLogo} alt="Ironhack Logo" />
          <img src={menuTop} alt="Menu" />
        </div>
        <div className="col-7 pt-5 pb-4">
          <h1 className="display-1 font-weight-bold">
            Say hello to <br />
            ReactJS
          </h1>
          <p className="col-10">
            You will learn how to use <br />
            the most popular frontend library <br />
            and become a super Ninja developer.
          </p>
        </div>
        <button className="btn btn-light p-4 mb-5">Awesome!</button>

        <div>
          <img
            className="react-logo-1 absolute col-3"
            src={reactLogo}
            alt="React Logo"
          />
        </div>
      </section>

      <section className="features">
        <div
          id="container"
          className="d-flex flex-col align-items-center justify-center px-3 py-5 m-5"
        >
          {cardArray.map((currentCard, index) => {
            return (
              <div key={index} className="col-3">
                <img src={currentCard.img} alt={currentCard.alt} />
                <h2>{currentCard.title}</h2>
                <p>{currentCard.description}</p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default App;
