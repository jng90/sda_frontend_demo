import {useState} from "react";

const MultiplicationTable = () => {

    //zadeklarowalismy zmienna 'number' oraz funkcje 'setNumbers' (setter)
    const [number, setNumber] = useState(0);
    console.log(number);

    let wiersze = [];
    for (let i = 0; i < number; i++) {
        let kolumny = [];
        for (let j = 0; j < number; j++) {
            kolumny.push(((i+1) * (j+1)));
        }
        wiersze.push(kolumny);
    }
// Dla liczby 3
// wiersze =  [
//              [ 1, 2, 3 ]
//              [ 2, 4, 6 ]
//              [ 3, 6, 9 ]
//            ]


    return (<div className="multiplication-table">
        <input type="number" id='number_field'/>

        <button onClick={() => {
            let number = document.getElementById('number_field').value
            console.log(number);

            setNumber(number);    // podmiana kolekcji

        }}>
            Kliknij mnie
        </button>
        <table>
            <tbody>
            {
                wiersze.map(wiersz => {
                    // [1, 2, 3]
                    const kolumny = wiersz.map(kolumna => {
                        return (<td key={kolumna}>{kolumna}</td>)
                    });

                    return (<tr key={wiersz}>{kolumny}</tr>)
                })
            }
            </tbody>
        </table>
    </div>);
}

export default MultiplicationTable;