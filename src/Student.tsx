interface StudentProps {
    name?: string;
    age?: number;
    grade?: string;
    isStudent?: boolean;
}

function Student({ 
    name = "Unknown", 
    age = 0, 
    grade = "N/A", 
    isStudent = false 
}: StudentProps) {
    return(
        <div className="student">
            <h1>Student Name: {name}</h1>
            <p>Age: {age}</p>
            <p>Grade: {grade}</p>
            <p>Student: {isStudent ? "Yes" : "No"}</p>
        </div>
    );
}

export default Student;