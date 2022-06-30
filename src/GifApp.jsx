import { useState } from "react";

// Como lo importamos desde el archivo de barrido que es "index.js" no 
// es nesesario especificar el "index.js"
import { GifGrid } from './components';
import { GifInput } from './components'

export const GifApp = () => {


  // Titulo ✅
  // Input ✅
  // Listado de gifs
  //  > GIf item

  const [categories, setCategories] = useState(['One Punch']);


  const onNewCategory = (nameCategory) => {
    if (categories.includes(nameCategory)) {
      alert('Ya existe este elemento :v');
      return;
    }

    setCategories(c => [nameCategory, ...c])
  }



  return (
    <>
      <h1>GifApp</h1>

      {/* Input  */}
      <GifInput onNewCategory={onNewCategory} />

      <ul>
        {categories.map(category => ( <GifGrid key={category} category={ category} /> ))}
      </ul>
    </>
  );
};
