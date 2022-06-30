import { useState } from "react"

var initValue = {
    name:"",
    number:"",
    isMarried:"",
    country:""
}

export const Forms = () => {
    const [form, setForm] = useState(initValue);

    const handleChange = (e) => {
      const {name, type, checked, value} = e.target;
      setForm({...form, [name]: type === "checkbox" ? checked : value})
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(form);
    }
    return (
        <>
        <form onSubmit={handleSubmit}>
        <br/>
        <input type="text" name="name" onChange={handleChange} placeholder="Enter Name"/>
        <br/>
        <input type="number" name="number" onChange={handleChange} placeholder="Enter Number"/>
        <br/>
        Are you Married: 
        <input type="checkbox" name="isMarried" onChange={handleChange} />
        <br/>
        <select name="country" onChange={handleChange}>
            <option value="Country">Country</option>
            <option value="India">India</option>
            <option value="UK">UK</option>
            <option value="USA">USA</option>
        </select>
        <br/>
        <input type="submit" value="submit"/>
        </form>
        </>
    )
}