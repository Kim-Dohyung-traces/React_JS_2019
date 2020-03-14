import React from 'react';
function Pizza({ menu }) {
  console.log(menu)
  return <h3>this {menu}</h3>
}

function App() {
  return (
    <div>
      <h1>notting...</h1>
      <Pizza menu="Margherita Pizza" />
      <Pizza menu="Pepperoni Pizza" />
      <Pizza menu="Potato Pizza" />
      <Pizza menu="Cheese Pizza" />
    </div>
  );
}

export default App;
