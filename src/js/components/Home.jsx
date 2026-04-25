import { useEffect, useState } from "react";

//create your first component
const Home = () => {

	const [list, setList] = useState(["Yeison"]);
	const [input, setInput] = useState("")

	function handleClick() {
		console.log(input);
		setList([...list, input])	
	}

	// Nueva función para eliminar
	// .filter crea un nuevo array. 
        // "i" es el índice actual, si es distinto al que recibimos, se queda.
	const deleteItem = (indexItem) => {
		const updatedList = list.filter((_, i) => i !== indexItem);
        setList(updatedList);
    };
	console.log(list);
	

	return (
		<div className="text-center">
            <h1 className="text-center mt-5">Lista De Tareas</h1>
			<div>
				<input
					value={input}
					onChange={(e)=>{setInput(e.target.value)}}
					placeholder="Nombre"
				/>
				<button onClick={()=>{ handleClick() }}>Agregar</button>
			</div>
			
			<div className="list-container mt-3">
                {list.map((User, i) => (
                    <div key={i} className="task-item">
                        <p>{i} {User}</p>
                        {/* Esta X solo será visible al pasar el mouse gracias al CSS */}
                        <span 
                            className="delete-icon" 
                            onClick={() => deleteItem(i)}
                        >
                            x
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;