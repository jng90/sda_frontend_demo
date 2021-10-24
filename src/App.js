import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import StudentTableComponent from "./components/StudentTableComponent";
import StudentTableDivComponent from "./components/StudentTableDivComponent";
import {useState} from "react";
import MultiplicationTable from "./components/MultiplicationTable";
import StudentForm from "./components/StudentForm";

// # Rodzaje wartości/deklaracji zmiennych/stalych
// stała 'liczba' = 5
const liczba = 5;

// zmienna 'innaLiczba' = 10
// var innaLiczba = 10;

// zadeklaruj coś = 20
let cos = 20;

// # Rodzaje wartości/deklaracji zmiennych/stalych

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
            {/* TODO: na razie pusty, później coś dodać*/}
            <div className="content">
                <StudentTableComponent/>
                <StudentTableDivComponent/>
                <hr/>
                <StudentForm/>
                <MultiplicationTable/>

            </div>
        </div>
    )
        ;
}

export default App;

/* Kierunek (enum): INFORMATYKA, FILOZOFIA, ... */
/* Student: int id, String imie, String nazwisko, Date dataUrodzenia; String nrIndeksu, Kierunek kierunek;
*/