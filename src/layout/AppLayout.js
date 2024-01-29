import EmpTable from "../components/EmpTable"
import Form from "../components/EmpForm"
import { useState } from "react"

function AppLayout() {
    const [employee, setEmployee] = useState([{
        designation: "Frontend Developer",
        dob: "1/1/2024",
        empId: 1,
        id: 101,
        name: "vijay",
        salary: '₹ 956'
    }])


    return (
        <div className="container my-5">
            <div className="row px-4 px-sm-0">
                <Form setEmployee={setEmployee} />
                <EmpTable employee={employee} />
            </div>
        </div>
    )
}

export default AppLayout
