function Form() {
    return (
        <div className="col-md-4 form-card">
            <h3 className="mb-3 mt-3 text-center">Employee Form</h3>
            <form action="/" className="m-3" id="employee-form">
                <div className="row g-3">
                    <div className="col-md-12">
                        <label for="employee-name" className="form-label"
                        >Employee Name</label
                        >
                        <input
                            type="text"
                            className="form-control"
                            id="employee-name"
                            name="employeeName"
                        />
                    </div>
                    <div className="col-md-12">
                        <label for="designation" className="form-label">Designation</label>
                        <select
                            className="form-control form-select"
                            name="designation"
                            id="designation"
                        >
                            <option value="">Select Designation</option>
                            <option value="Frontend Developer">Frontend Developer</option>
                            <option value="Backend Developer">Backend Developer</option>
                            <option value="FullStack Developer">
                                FullStack Developer
                            </option>
                            <option value="Web Developer">Web Developer</option>
                            <option value="Mobile Developer">Mobile Developer</option>
                        </select>
                    </div>
                    <div className="col-md-12">
                        <label for="dob" className="form-label">DOB</label>
                        <input
                            type="text"
                            className="form-control"
                            id="dob"
                            name="dob"
                            autocomplete="off"
                        />
                    </div>
                    <div className="col-md-12" id="salary-input">
                        <label for="salary" className="form-label">Salary</label>
                        <div className="input-group">
                            <span className="input-group-text">₹</span>
                            <input
                                type="text"
                                className="form-control"
                                name="salary"
                                id="salary"
                            />
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="row justify-content-end">
                            <div className="col-md-6">
                                <button
                                    type="submit"
                                    id="employee-submit"
                                    className="btn btn-secondary w-100 fw-bold"
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="row" id="response"></div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Form
