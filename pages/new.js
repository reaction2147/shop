import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const NewNote = () => {
    const [form, setForm] = useState({ title: '', description: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState({});
    const router = useRouter();

    useEffect(() => {
        if (isSubmitting) {
            if (Object.keys(errors).length === 0) {
                createNote();
            }
            else {
                setIsSubmitting(false);
            }
        }
    }, [errors])

    const createNote = async () => {
        try {
            const res = await fetch('http://localhost:3000/api/notes', {
                method: 'POST',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(form)
            })
            router.push("/");
        } catch (error) {
            console.log(error);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let errs = validate();
        setErrors(errs);
        setIsSubmitting(true);
    }

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const validate = () => {
        let err = {};

        if (!form.title) {
            err.title = 'Title is required';
        }
        if (!form.description) {
            err.description = 'Description is required';
        }

        return err;
    }

  return (
    <div className="flex flex-row justify-center my-40">
    <div className="w-1/2 p-8 shadow-lg rounded-lg bg-yellow-50 mx-8"> 
    <h1 className="flex flex-row mb-5 text-2xl font-bold mx-auto justify-center text-yellow-500">ADD NEW NOTE</h1>
    <form onSubmit={handleSubmit} className="w-full max-w-lg justify-center">
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label
            className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            for="inline-title"
          >
            Title
          </label>
        </div>
        <div className="md:w-2/3">
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="inline-title"
            type="text"
            onChange={handleChange}
            name="title"
          />
        </div>
        <span style={{ color: "red", padding: '1em' }}>{errors.title ? errors.title : null}</span>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label
            className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            for="inline-description"
          >
            Description
          </label>
        </div>
        <div className="md:w-2/3">
          <textarea rows="4"
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="inline-description"
            type="text-area"
            onChange={handleChange}
            name="description"
          />
        </div>
        <span style={{ color: "red", padding: '1em' }}>{errors.description? errors.description : null}</span>
      </div>
      <div className="md:flex md:justify-center md:ml-28">
       
        <div className="md:w-3/3">
          <button
            className="shadow bg-yellow-500 text-white font-bold py-2 px-4 rounded hover:bg-indigo-900 transition duration-500"
            type="submit"
          >
            Sign Up
          </button>
        </div>
      </div>
    </form>
    </div>
    </div>
  );
};

export default NewNote
