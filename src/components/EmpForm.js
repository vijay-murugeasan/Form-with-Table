import Form from "react-bootstrap/Form"
import { Controller, useForm } from 'react-hook-form'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";


function EmpForm({ setEmployee }) {
    const { register, getValues, handleSubmit, formState: { errors }, control, setError, setValue, reset
    } = useForm({
        mode: "onChanges",
        reValidateMode: "onChange"
    })
    const [success, setSuccess] = useState('')
    const handleChange = (dateChange) => {
        setValue("dob", dateChange, {
            shouldDirty: true
        });
    };
    async function onSubmit(data) {
        setSuccess('')
        try {
            const { employeeName, designation, dob, salary } = data
            const formData = {
                empId: 1,
                name: employeeName,
                designation: designation,
                dob: dob.toLocaleDateString(),
                salary: `₹ ${salary}`,
            };

            const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
                method: 'POST',
                body: JSON.stringify(formData),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
            if (!res.ok) {
                setError('root.serverError', { type: res.statusCode, message: "Failed to creating your employee" })
            };
            const result = await res.json()
            if (res.ok) {
                if (result) setEmployee((emp) => [...emp, result]);

                setSuccess('Form Created Successfully')
                reset();
            }
        } catch {
            console.log("Failed to creating your employee")
            // throw Error("Failed to creating your employee");
        } finally {
            setSuccess('Form Created Successfully')
        }
    }


    function onError(errors) {
        setSuccess('')
        console.log('validation Errors', errors)
    }
    return (
        <div className="col-md-4 form-card">
            <h3 className="mb-3 mt-3 text-center">Employee Form</h3>
            <Form action="/" className="m-3" id="employee-form" onSubmit={handleSubmit(onSubmit, onError)}>
                <div className="row g-3">
                    <div className="col-md-12">
                        <Form.Group>
                            <Form.Label>Employee Name</Form.Label>
                            <Form.Control type="text"
                                className="form-control"
                                id="employee-name"
                                name="employeeName"
                                isInvalid={errors.employeeName}
                                {...register("employeeName", { required: 'Please enter your Name' })} />
                            <Form.Control.Feedback type="invalid">
                                {errors?.employeeName?.message}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <div className="col-md-12">
                            <>
                                <Form.Label>Designation</Form.Label>
                                <Form.Select
                                    id="designation"
                                    name="designation"
                                    isInvalid={errors.designation}
                                    {...register("designation", { required: 'Please Select your Designation' })}>
                                    <option value=''>Select Designation</option>
                                    <option value="Frontend Developer">Frontend Developer</option>
                                    <option value="Backend Developer">Backend Developer</option>
                                    <option value="FullStack Developer">
                                        FullStack Developer
                                    </option>
                                    <option value="Web Developer">Web Developer</option>
                                    <option value="Mobile Developer">Mobile Developer</option>
                                </Form.Select>
                                <Form.Control.Feedback type="invalid">
                                    {errors?.designation?.message}
                                </Form.Control.Feedback>
                            </>
                        </div>
                        <div className="col-md-12">
                            <Form.Group>
                                <Form.Label>DOB</Form.Label>
                                <Controller
                                    id='dob'
                                    control={control}
                                    required
                                    name="dob"
                                    isInvalid={errors.dob}
                                    refs={register("dob", { required: 'Please enter your DOB' })}
                                    render={() => (
                                        <DatePicker
                                            className={`form-control ${errors.dob ? 'is-invalid' : ''}`}
                                            maxDate={new Date()}
                                            placeholderText="Select date"
                                            selected={getValues().dob}
                                            ref={null}
                                            isClearable
                                            onChange={handleChange} />
                                    )}
                                />
                                {errors?.dob &&
                                    <div className="text-danger">
                                        {errors?.dob?.message}
                                    </div>
                                }
                            </Form.Group>
                        </div>
                        <div className="col-md-12" id="salary-input">
                            <Form.Group>
                                <Form.Label>Salary</Form.Label>
                                <Form.Control type="number"
                                    className="form-control"
                                    id="salary"
                                    name="salary"
                                    isInvalid={errors.salary}
                                    {...register("salary", {
                                        required: 'Please enter your Salary',
                                        validate: (value) => Number(value) <= 0 || 'please enter correct phone number'
                                    })} />
                                <Form.Control.Feedback type="invalid">
                                    {errors?.salary?.message}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </div>
                        <div className="col-12 mt-3">
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
                            {errors?.root?.serverError &&
                                <div className="alert alert-danger mt-3">{errors.root?.serverError?.message}</div>
                            }
                            {success &&
                                <div className="alert alert-success mt-3">{success}</div>
                            }
                        </div>
                        <div className="col-12">
                            <div className="row" id="response"></div>
                        </div>
                    </div>
                </div>
            </Form >
        </div >
    )
}

export default EmpForm
