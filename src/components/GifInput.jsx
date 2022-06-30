import { useState } from 'react'

export const GifInput = ({ onNewCategory }) => {


    // Crear una nueva categoria
    // Obtener la informacion del input

    const [inputValue, setInputValue] = useState("")

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };


    const handleSubmit = (name) => {
        return (e) => {
            e.preventDefault();
            // Validaciones
            if(name.trim().length <= 1) {
                alert('Etiqueta o nombre invalido (¬ _¬)u');
                return;
            }

            onNewCategory(name.trim());
            setInputValue("");
        }
    }


    return (
        <form action="" onSubmit={handleSubmit(inputValue)}>
            <div id="inputDiv">
                <input placeholder="Etiqueta o nombre del gif que desea buscar ✨"
                    type="text"
                    onChange={handleChange}
                    value={inputValue} />
                <button> 🔍</button>
            </div>
        </form>
    )
}
