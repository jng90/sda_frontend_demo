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
            {/* TODO: na razie pusty, później coś dodać*/}
            <div className="content">
                <div className="student-table-container">
                    <div className="student-table-header">
                        Tabela studentów
                    </div>
                    <div className="student-table">
                        <table>
                            <thead>         {/*naglowek*/}
                            <tr>            {/*wiersz*/}
                                <th>Id</th>   {/*komorka w wierszu naglowkowym*/}
                                <th>Imie</th>
                                <th>Nazwisko</th>
                                <th>Data urodzenia</th>
                                <th>Numer indeksu</th>
                                <th>Kierunek</th>
                            </tr>
                            </thead>
                            <tbody>         {/*cialo tabeli*/}
                            <tr>                {/*wiersz*/}
                                <td>1</td>      {/*komórka danych*/}
                                <td>Paweł</td>
                                <td>Gaweł</td>
                                <td>2021-10-10</td>
                                <td>123666</td>
                                <td>INFORMATYKA</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Jan</td>
                                <td>Kowalski</td>
                                <td>2011-03-11</td>
                                <td>123665</td>
                                <td>HYDRAULIKA</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;

/* Kierunek (enum): INFORMATYKA, FILOZOFIA, ... */
/* Student: int id, String imie, String nazwisko, Date dataUrodzenia; String nrIndeksu, Kierunek kierunek; */