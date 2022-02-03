const EditNote = ({note}) => {
    console.log({note})
    return (
        <p>test</p>
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