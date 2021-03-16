import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Planets = () => {

    const [planets, setPlanets] = useState([])

    useEffect(() => {
        const getPlanets = async () => {
            const data = await fetch('http://localhost:8000/api/planets/')
            const planets = await data.json()
            setPlanets(planets)
        }
        getPlanets()
    }, [])

    return (
        <div>
            <div>
                <Link to="/add" className="btn btn-dark">
                    Add Planet
                </Link>
            </div>
            <hr/>
            <h1>Planets</h1>
            <table className="table table-striped table-hover table-sm">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col" className="text-center">Satellites</th>
                    <th scope="col" className="text-center">Diameter</th>
                    <th scope="col col-xs-2" className="text-center">Acciones</th>
                </tr>
                </thead>
                    <tbody>
                        { planets.map(item => (
                            <tr>
                                <th scope="row">{ item.id }</th>
                                <td>{ item.name }</td>
                                <td className="text-center">{ item.satellites }</td>
                                <td className="text-center">{ item.diameter }</td>
                                <td className="text-center">
                                    <Link to={`/editar/${item.id}`} className="btn btn-primary">
                                        Editar
                                    </Link>
                                    <Link to={`/delete/${item.id}`} className="btn btn-danger">
                                        Eliminar
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
            </table>
        </div>
    )
}

export default Planets