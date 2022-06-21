import React from "react";

//Aplikasi sederhana hello world
function HelloWorld(){
  return <div style={ {backgroundColor: 'blue'}}>Hello World</div>
}

function Button(){
  return <button onClick={() => alert('Selamat Datang')}>Coba klik saya</button>
}

function App() {
  return <div>
    <HelloWorld />
    <Button />
  </div>
}

export default App;