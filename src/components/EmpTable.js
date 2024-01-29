import { useState } from "react"

function EmpTable({ employee }) {
    const [search, setSearch] = useState('')
    const searchedValue = employee?.filter((row) =>
        row?.name?.match(new RegExp(search, "i")) ||
        row?.designation?.match(new RegExp(search, "i")));

    return (
        <div className="col-md-7 offset-md-1">
            <h3 className="mb-3 mt-3 text-center w-color">Employee Table</h3>
            <div className="row justify-content-end">
                <div className="col-md-6 col-sm-6 col-lg-4">
                    <div className="input-group">
                        <span className="input-group-text">Filter</span>
                        <input
                            id="filter"
                            type="text"
                            className="form-control"
                            placeholder="Type here..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>
                </div>
            </div>
            <div className="table-responsive mt-3 w-bg-color" style={{ borderRadius: '10px' }}>
                <table className="table table-striped" style={{ marginBottom: 0 }}>
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Designation</th>
                            <th scope="col">Dob</th>
                            <th scope="col">Salary</th>
                        </tr>
                    </thead>
                    <tbody id="employee-table-body" className="searchable">
                        {searchedValue.length > 0 ?
                            searchedValue?.map((emp, index) => {
                                return (
                                    <tr key={`${emp.name}-${emp.dob}-${index + 1}`} >
                                        <th scope="row">{index + 1}</th>
                                        <td>{emp.name}</td>
                                        <td>{emp.designation}</td>
                                        <td>{emp.dob}</td>
                                        <td>{emp.salary}</td>
                                    </tr>
                                )
                            }
                            )
                            :
                            <tr className="no-data">
                                <td colSpan="5">No data</td>
                            </tr>
                        }
                    </tbody>
                </table>
            </div>
        </div >
    )
}

export default EmpTable
