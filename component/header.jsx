const header = () => {
    return (
        <>
            <div className="p-3 mb-3 bg-body-tertiary rounded-3">
                <div className="container-fluid py-5">
                    <h1 className="display-5 fw-bold">Welcome to the RPS Game ✨👊✋✌✨</h1>
                </div>
            </div>

            {/* <!-- HighScore --> */}
            <div className="card highScore">
                <div className="card-body">
                    <h2>HighScore: 0</h2>
                </div>
            </div>
        </>
    )
}

export default header;