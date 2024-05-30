const eventHandler = ({ changeImage, trigger }) => {

    const Rock = '../images/Rock.png';
    const Paper = '../images/Paper.webp';
    const Scissor = '../images/Scissor.webp';

    const changeSystemImage = () => {
        switch (trigger) {
            case 1:
                return Rock;
            case 2:
                return Paper;
            case 3:
                return Scissor;
        }
    }
    const changeToRock = () => {
        changeImage(Rock, changeSystemImage);
    }
    const changeToPaper = () => {
        changeImage(Paper, changeSystemImage);
    }
    const changeToScissor = () => {
        changeImage(Scissor, changeSystemImage);
    }

    return (
        <div className=" bt1 d-flex gap-5 py-5 justify-content-center">
            <button
                className="rock btn btn-outline-primary btn-lg rounded-pill px-5"
                type="button" onClick={changeToRock}
            >
                Rock
            </button>
            <button
                className="paper btn btn-outline-primary btn-lg rounded-pill px-5"
                type="button" onClick={changeToPaper}
            >
                Paper
            </button>
            <button
                className="scissor btn btn-outline-primary btn-lg rounded-pill px-5"
                type="button" onClick={changeToScissor}
            >
                Scissor
            </button>
        </div>
    )
}

export default eventHandler;