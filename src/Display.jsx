import React from 'react';

const Display = ({ data }) => {
    return (
        <table>
            <tbody>
                <tr>
                    <th>Name</th>
                    <th>Surname</th>
                    <th>Email</th>
                    <th>Company</th>
                    <th>Phone1</th>
                    <th>Phone2</th>
                </tr>
                {data.map((data) => (
                    <tr key={data.id}>
                        <td>{data.first_name}</td>
                        <td>{data.last_name}</td>
                        <td>{data.email}</td>
                        <td>{data.company_name}</td>
                        <td>{data.phone1}</td>
                        <td>{data.phone2}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Display