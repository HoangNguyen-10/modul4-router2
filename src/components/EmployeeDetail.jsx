import React from 'react'
import { useLocation } from 'react-router-dom'

export default function EmployeeDetail() {
    const { state } = useLocation()
    return (
        <div>
            <>
                <h1>Employee Detail:</h1>
                <h3>ID: {state.item.id}</h3>
                <h3>Name: {state.item.name}</h3>
                <h3>Age: {state.item.age}</h3>
            </>
        </div>
    )
}
