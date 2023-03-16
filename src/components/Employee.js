import React from 'react'
import './employee.css'
import { useNavigate } from "react-router-dom";
import { employeeSeeds } from './employeeSeeds';
export default function Employee() {

    const navigate = useNavigate()


    const handleDetail = (item) => {
        navigate('/employees/employeeDetail', { state: { item } })
        console.log(item)
    }
    return (
        <div>
            <table>
                <thead>
                    <tr>

                        <th>ID</th>
                        <th>NAME</th>
                        <th>AGE</th>
                        <th>ACTION</th>
                    </tr>
                </thead>
                <tbody>
                    {employeeSeeds.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                            <td><button onClick={() => handleDetail(item)}>detail</button></td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
