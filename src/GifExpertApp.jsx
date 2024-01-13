import { useState } from "react"
import { AddCategory } from "./components"
import { GifGrid } from "./components"
export const GifExpertApp = () => {

const [categoties, setCategoties] = useState(["One Punch"])	
console.log(categoties)

const OnCategories = (value) => {
    if(categoties.includes(value)) return
    setCategoties([value,...categoties ])
}

  return (
    <>

      <h1>GifExpertApp</h1>

      <AddCategory  onNewCategory={OnCategories}/>

        {
            categoties.map( (category) => (
                    <GifGrid key={category} category={category}/> 
                ))
        }
    </>
)
}
