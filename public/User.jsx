// eslint-disable-next-line react/prop-types
const User = ({ Image, UserScore }) => {

    const imageStyle = {
        height: '220px',
    }

    return (
        <>
            <h1>Player Score: {UserScore}</h1>
            <img src={Image} className='rounded' alt="Image" style={imageStyle} />
        </>
    )
}

export default User;