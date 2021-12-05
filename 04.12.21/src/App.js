import './App.css';

function App(customProp) {
  const date = "04.12.2021"
  return (
    <div className="App">
      <p>I learned how to use components several times with map function in react. <br /> Also in this lesson, we discussed what different default import and without import is.</p>
      <p>First react lesson.{`Today is ${date}`}</p>
      {console.log(customProp)}
    </div>
  );
}

export default App;
