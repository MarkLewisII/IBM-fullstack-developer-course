function App(props) {
    const currDate = new Date();
  
    return (
      <div>
        <h1>Mark Lewis Jr.</h1>
        <h2>The date is now {currDate.toLocaleDateString()} and the time now is {currDate.toLocaleTimeString()}.</h2>
      </div>
    );
  }
  
  export default App;