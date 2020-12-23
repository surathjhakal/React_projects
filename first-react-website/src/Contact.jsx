import React, { useState } from 'react'

const Contact = () => {
    const [data, setdata] = useState({
        fullname: "",
        phone: "",
        email: "",
        msg: "",
    })

    const InputEvent = (event) => {
        const { name, value } = event.target
        setdata((prev) => {
            return {
                ...prev,
                [name]: value,
            }
        })
    }
    const formSubmit = (e) => {
        e.preventDefault()
        alert(`My name is ${data.fullname}.My mobile number is ${data.phone} and email is ${data.email}, Here is what I want to say ${data.msg}`)
    }
    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Contact US</h1>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit}>
                            <div className="form-group">
                                <label for="exampleFormControlInput1">FullName:</label>
                                <input type="text" className="form-control" name="fullname" value={data.fullname} onChange={InputEvent} id="exampleFormControlInput1" placeholder="Enter your Name" />
                            </div>
                            <div className="form-group">
                                <label for="exampleFormControlInput1">Phone No:</label>
                                <input type="phone" className="form-control" name="phone" value={data.phone} onChange={InputEvent} id="exampleFormControlInput1" placeholder="Enter your Mobile Number" />
                            </div>
                            <div className="form-group">
                                <label for="exampleFormControlInput1">Email address:</label>
                                <input type="email" className="form-control" name="email" value={data.email} onChange={InputEvent} id="exampleFormControlInput1" placeholder="name@example.com" />
                            </div>
                            <div class="form-group">
                                <label for="exampleFormControlTextarea1">Message</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" name="msg" value={data.msg} onChange={InputEvent} rows="3"></textarea>
                            </div><br/>
                            <div className="col-12">
                                <button type="submit" className="btn btn-outline-primary">Submit Form</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact