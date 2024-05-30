// eslint-disable-next-line react/prop-types
const System = ({ Image, SystemScore }) => {

    const imageStyle = {
        height: '220px',
    }

    return (
        <>
            <h1>System Score: {SystemScore}</h1>
            <img src={Image} className='rounded' alt="Image" style={imageStyle} />
        </>
    )
}

export default System;