function EmpTable() {
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
                        />
                    </div>
                </div>
            </div>
            <div className="table-responsive mt-3 w-bg-color" style={{ borderRadius: '10px' }}>
                <table className="table table-striped">
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
                        <tr>
                            <th scope="row">1</th>
                            <td>vijay</td>
                            <td>12/04/23</td>
                            <td>Developer</td>
                            <td>12,000</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>vijay</td>
                            <td>12/04/23</td>
                            <td>Developer</td>
                            <td>12,000</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>vijay</td>
                            <td>12/04/23</td>
                            <td>Developer</td>
                            <td>12,000</td>
                        </tr>
                        <tr>
                            <th scope="row">4</th>
                            <td>vijay</td>
                            <td>12/04/23</td>
                            <td>Developer</td>
                            <td>12,000</td>
                        </tr>
                        <tr>
                            <th scope="row">5</th>
                            <td>vijay</td>
                            <td>12/04/23</td>
                            <td>Developer</td>
                            <td>12,000</td>
                        </tr>
                        {/* <tr className="no-data">
                            <td colspan="5">No data</td>
                        </tr> */}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default EmpTable
