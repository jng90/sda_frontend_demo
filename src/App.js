
import './App.css';

function App() {
  return (
    <div className="App">
        <div className="header">
        <img src={'gopher.png'} className="header-icon"/>
            <div className="header-app-name">
                SDA Frontend
            </div>
        </div>
        <div className="content-introduction"></div>
        <div className="content">
            <div className="student-table-container">
                <div className="student-table-header">

                </div>
            </div>


        </div>
    </div>
  );
}

export default App;

//Kierunek (enum): INFORMATYKA, FILOZOFIA
//Student, int id, String imie, String nazwisko, Date dataUrodzenia, String nrIndeksu, Kierunek kierunek