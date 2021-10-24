import StudentTableComponent from "./StudentTableComponent";
import StudentTableDivComponent from "./StudentTableDivComponent";
import StudentForm from "./StudentForm";
import {useState} from "react";

const StudentComponent = () => {

    // stworzenie listy studentow z inifjalna lista = []
    const [studentList, setStudentList] = useState([]);

    // funkcja ktorej mozna uzyc zeby dodac nowego studenta
    const addStudent = (name, surname, birthDate, index) => {
        const student = {
            "name": name,
            "surname": surname,
            "birthDate": birthDate,
            "index": index
        }

        // [] - deklaracja listy
        // ...studentList - skopiowanie elementow
        // [...studentList] - zadeklarowanie listy z kopia elementow

        let studentListCopy = [...studentList];
        studentListCopy.push(student);          // push dodaje element do listy

        setStudentList(studentListCopy);

    }

    return (<>
        <StudentTableComponent/> {/*tag ktory nie ma tresci i jest zamkniety*/}
        <StudentTableDivComponent/>

        <hr/>
        <StudentForm/>
    </>);
}

export default StudentComponent;