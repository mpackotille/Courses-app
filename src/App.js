import logo from './logo.svg';
import './App.css';
import {BoutiqueTable} from './BoutiqueTable'

const Header= (<header className="App-header">
<img src={logo} className="App-logo" alt="logo" />
<p>
  Edit <code>src/App.js</code> and save to reload.
</p>
<a
  className="App-link"
  href="https://reactjs.org"
  target="_blank"
  rel="noopener noreferrer"
>
  Learn React
</a>
</header>);


let boutique="auchan";

const coursesCarrefour=["SEL","SUCRE","EAU","PIMENT","POIVRE"];
const coursesCarrefourList=(
  <ul>
    {
      coursesCarrefour.map((course)=>
      <li>{course}</li>)
    }
  </ul>
);
const coursesAuchan=["POMME","ANANAS","BANANE","ORANGE","KIWI"];
const coursesAuchanList=(
  <ul>
    {
      coursesAuchan.map((course)=>
      <li>{course}</li>)
    }
  </ul>
);

const ListCarrefour=(<ul>
  <li>SEL</li>
  <li>SUCRE</li>
  <li>EAU</li>
</ul>);
const ListAuchan=(<ul>
  <li>POMME</li>
  <li>ANANAS</li>
  <li>BANANE</li>
</ul>);

let CourseList;
if (boutique=="carrefour"){
  CourseList=coursesCarrefourList;
}
else{
  CourseList=coursesAuchanList;
}



function App() {
  ////////// 
  return (
    <div className="App">
      {Header}
      <body>
        liste des courses à {boutique} <br/>   
        {CourseList}
        <BoutiqueTable/>
      </body>
    </div>
  );
}

export default App;
