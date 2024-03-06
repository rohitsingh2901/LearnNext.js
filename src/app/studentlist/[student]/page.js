"use client"
export default function StudentList({params}){
    console.log(params)
    return (
        <div>
            <h1>Student Detail</h1>    
            <p>
                Name: {params.student}
            </p>
        </div>
    )
}