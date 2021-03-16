import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"


const AddPlanet = () => {
    const baseUrl = "http://localhost:8000/api";

    const {id} = useParams()

    const [planet, setPlanet] = useState([])


    useEffect(
        () => {
          if (id) {
            const getPlanet = async () => {
            const data = await fetch(`${baseUrl}/planets/${id}`)
            const planetJson = await data.json()
            setPlanet(planetJson)
            }
            getPlanet()
          } else {
            setPlanet({});
          }
        },
        [id]
      );

    const addPlanet = async () => {
        return fetch(`${baseUrl}/planets/`, {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                value: planet
            })
        }).then(data => {
            return data
        });
    }

    const handleSubmit = funct => {
        console.log(planet)
      };


    return (
        <div>
            <h1>{!id ? "Add Planet" : "Editar Planet"}</h1>

            <div className="card">
                <div className="card-body">
                    <form>
                        <div>
                            <div className="form-row">
                                <label className="form-label">Name</label>
                                <input type="text" 
                                        className="form-control" 
                                        id="name"
                                        name="name"
                                        onChange={({ target: { value } }) =>
                                            setPlanet({ ...planet, name: value })
                                        } />
                            <div className="form-group">
                                <label className="form-label">Satellite</label>
                                <input type="text" 
                                        className="form-control" 
                                        id="satellites"
                                        name="satellites"
                                        value={planet.satellites}
                                        onChange={({ target: { value } }) =>
                                            setPlanet({ ...planet, satellites: value })
                                        } />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Diameter</label>
                                <input type="text" 
                                        className="form-control" 
                                        id="diameter"
                                        name="diameter"
                                        value={planet.diameter}
                                        onChange={({ target: { value } }) =>
                                            setPlanet({ ...planet, diameter: value })
                                        } />
                            </div>
                            </div>
                            <div className="row mt-2">
                                <div className="col-3 text-right">
                                    <Link to="/" className="btn btn-danger">
                                        Cancelar
                                    </Link>
                                    <button type="submit" 
                                            className="btn btn-primary"
                                            onClick={() => handleSubmit(addPlanet)}>
                                                Crear</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default AddPlanet