import EmpTable from "../components/EmpTable"
import Form from "../components/Form"

function AppLayout() {
    return (
        <div className="container my-5">
            <div className="row px-4 px-sm-0">
                <Form />
                <EmpTable />
            </div>
        </div>
    )
}

export default AppLayout
