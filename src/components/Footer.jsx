import React from 'react'

function Footer() {
    const year = new Date().getFullYear()
    return (
        <div style={{ color: "black", textAlign: "center", marginBottom: "1rem" }}>
            <p>{year + " - "} Anh Nguyen Tuan</p>

        </div>
    )
}

export default Footer