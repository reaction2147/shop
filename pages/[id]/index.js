import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const Note = ({ note }) => {
  const [deleting, setDeleting] = useState(false);
  const router = useRouter();

  console.log({note})

  const deleteNote = async () => {
    const noteID = router.query.id;
    setDeleting(true);
    try {
      const deleted = await fetch(
        `http://localhost:3000/api/notes/${note._id}`,
        {
          method: "DELETE",
        }
      );
      setDeleting(false);
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mx-auto py-60">
      <div className="flex flex-row justify-center">
          <div className="w-1/3 p-8 shadow-lg rounded-lg bg-yellow-50 mx-8">
            <div className="text-center py-2">
              <div key={note._id}>
                <h3 className="text-xl font-normal">
                  <span className="px-3 font-light text-yellow-500">
                    {note.title}
                  </span>
                </h3>
                <p className="text-gray-500 text-base">{note.description}</p>
              </div>
              <div className="mt-3 -mb-3">
                <button
                  onClick={deleteNote}
                  className="bg-red-500 px-4 py-2 rounded-lg text-gray-50 font-medium mx-2 my-1"
                >
                  Delete
                </button>
                <Link href={"/[id]/edit"} as={`${note._id}/edit`}>
                <button 
                className="bg-green-500 px-6 py-2 rounded-lg text-gray-50 font-medium mx-2 my-1">
                  Edit
                </button>
                </Link>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

Note.getInitialProps = async ({ query: { id } }) => {
  const res = await fetch(`http://localhost:3000/api/notes/${id}`);
  const { data } = await res.json();
  return {
    note: data,
  };
};

export default Note;
