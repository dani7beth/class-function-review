
const Dog = ()=> {
// state ={
//   dogs: [
//     {id: 1, name: "Penny", breed:"australian shepard"},
//     {id: 2, name: "Phillip",breed:"chihuahua"},
//     {id: 3, name: "Roger", breed: "dobermann"},
//   ]
// }

const dogs = [{id: 1, name: "Penny", breed:"australian shepard"},
              {id: 2, name: "Phillip",breed:"chihuahua"},
              {id: 3, name: "Roger", breed: "dobermann"},]


const renderDogs= () =>{
return (
  <ul>
    {dogs.map((d) =>{
     return(<li style={{listStyle: "none"}} key={d.id}>{d.name}<br/>
            {d.breed}
            <br /><br />
            </li>);
    })}
  </ul>
)
   
}


return(
  <div>
  <h1>Your Dogs</h1>
  {renderDogs()}
  </div>
);

}
export default Dog;
