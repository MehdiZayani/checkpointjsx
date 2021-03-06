import mehdi from './imageInSrc.jpg';
import './App.css';
import video from './myVideo.mp4';
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div className="test">

<h1 className="titleRed">Mehdi</h1>



<img src={mehdi} alt="heyy"/>



<img src="/imageInPublic.png"/>

</div>

<video width="620" height="440" controls>
<source src={video} type="video/mp4" />

</video>
      </header>
    </div>
  );
}
export default App;

