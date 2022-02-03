import router from "next/router";
import { useEffect, useState } from "react";

const EditNote = ({note}) => {
    
    const [form, setForm] = useState({description: ""})
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [errors, setErrors] = useState({})

    useEffect(() => {
        if(isSubmitting) {
            if(Object.keys(errors).length === 0 ){
                EditNote()
            } else {
                setIsSubmitting(false)
            }
        }
    }, [errors])

    const EditNote = async () => {
        try {
            const res = await fetch(`http://localhost:3000/api/notes/${note._id}`, {
                method: 'PUT',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(form)
            })
            router.push("/")
        } catch (error) {
            console.log(error)
        }
    }

    const handleChange = (event) => {
        setForm({
            ...form,
            [event.target.name] : event.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        let err = validate()
        setErrors(err)
        setIsSubmitting(true)
    }

    const validate = () => {
        let err = {}
        if(!form.description) {
            err.description = "Description is required"
        }
        return err
    }
    return (
        <div className="flex flex-row justify-center my-40">
        <div className="w-1/2 p-8 shadow-lg rounded-lg bg-yellow-50 mx-8"> 
        <h1 className="flex flex-row mb-5 text-2xl font-bold mx-auto justify-center text-yellow-500">Edit Note</h1>
        <form onSubmit={handleSubmit} className="w-full max-w-lg justify-center ml-auto mr-auto">
        
          <h3 className="text-xl font-normal text-center mb-4">
                  <span className="px-3 font-light text-yellow-500">
                    {note.title}
                  </span>
                </h3>
            {/* <span style={{ color: "red", padding: '1em' }}>{errors.title ? errors.title : null}</span> */}
         
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/4">
              <label
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                for="inline-description"
              >
                Description
              </label>
            </div>
            <div className="md:w-3/4">
              <textarea rows="4"
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-description"
                type="text-area"
                onChange={handleChange}
                name="description"
              />
            </div>
            {/* <span style={{ color: "red", padding: '1em' }}>{errors.description? errors.description : null}</span> */}
          </div>
          <div className="md:flex md:justify-center ">
           
            <div className="md:w-3/3">
              <button
                className="shadow bg-yellow-500 text-white font-bold py-2 px-4 rounded hover:bg-indigo-900 transition duration-500"
                type="submit"
              >
                EDIT
              </button>
            </div>
          </div>
        </form>
        </div>
        </div>
    )
}

EditNote.getInitialProps = async ({ query: { id } }) => {
    const res = await fetch(`http://localhost:3000/api/notes/${id}`);
    const { data } = await res.json();
    return {
        note: data,
    };
};


export default EditNote