import StudentTableComponent from "./StudentTableComponent";
import StudentTableDivComponent from "./StudentTableDivComponent";
import StudentForm from "./StudentForm";
import {useEffect, useState} from "react";

const StudentComponent = () => {

    // stworzenie listy studentow z inifjalna lista = []
    const [studentList, setStudentList] = useState([]);

    // funkcja ktorej mozna uzyc zeby dodac nowego studenta
    const addStudent = (name, surname, birthDate, index, faculty) => {
        const student = {
            "id": bumpCounter(),
            "name": name,
            "surname": surname,
            "birthDate": birthDate,
            "index": index,
            "faculty": faculty
        }

        // [] - deklaracja listy
        // ...studentList - skopiowanie elementow
        // [...studentList] - zadeklarowanie listy z kopia elementow

        let studentListCopy = [...studentList];
        studentListCopy.push(student);          // push dodaje element do listy

        setStudentList(studentListCopy);

        console.log("Dodano studenta: " + student);
    }

    const bumpCounter = () => {
        // pobierze licznik
        let currentCounter = getCounter();

        // zwiekszy i zapiszes
        currentCounter++;
        localStorage.setItem('student-next-id', currentCounter);

        // zwroci zwiekszony
        return currentCounter;
    }

    const getCounter = () => {
        let nextId = localStorage.getItem('student-next-id');
        // if (zmienna) false gdy:
        //      - zmienna = 0
        //      - zmienna = false
        //      - zmienna = null
        //      - zmienna = undefined

        if (nextId){
            return nextId;
        }
        return 1;
    }

return (<>
    <StudentTableComponent students={studentList}/> {/*tag ktory nie ma tresci i jest zamkniety*/}
    <StudentTableDivComponent students={studentList}/>

    <hr/>
    <StudentForm addStudentFunction={addStudent}/>
</>);
}

export default StudentComponent;