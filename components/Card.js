import Link from 'next/link'

const Card = ({notes}) => {
    return (
        <>
       {notes.map((note) => {
           console.log(note)
           return(
            <div className="w-1/4 p-8 shadow-lg rounded-lg bg-yellow-50 mx-8">
                 <div className="text-center py-2">
                     <div key={note._id}>
                         <h3 className="text-xl font-normal">
                             <span className="px-3 font-light text-yellow-500">{note.title}</span>
                         </h3>
                         <p className="text-gray-500 text-base">{note.description}</p>
               </div>
                <Link href={`/${note._id}`}>
                 <button className="bg-yellow-500 px-4 py-2 rounded-lg text-gray-50 font-medium mt-2">
                     Details
                </button>
                </Link>
         </div>
 </div>  
           )
       })}
       </>
    )
  };

  export default Card;

  