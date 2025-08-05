import { useRef } from "react";

function Form({add}) {
    const contextRef = useRef();
    const nameRef = useRef();
    return (
        <form
            onSubmit={
                e=> {
                    e.preventDefault();
                    const context = contextRef.current.value;
                    const name = nameRef.current.value;

                    add(context, name);

                    e.currentTarget.reset();
                }
            }
            style={{
                display: "flex",
                flexDirection: "column",
                gap: 3,
                padding: 10,
                borderRadius: 8,
                marginBottom: 20,
                background: "#def",
            }}>
            <input
                ref={contextRef}
                type="text"
                placeholder="context"
                style={{ padding: 5 }}
            />

            <input
                ref={nameRef}
                type="text"
                placeholder="name"
                style={{ padding: 5 }}
            />
            <button
            type="submit"
            style={{
                padding: 8,
                background: "#0d6efd",
                color: "white",
                border: "0 none",
            }}>Post</button>
        </form>
    )
}

export default Form;