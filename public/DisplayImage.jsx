import React, { useState, useEffect } from "react";
import User from "./User";
import System from "./System";

const DisplayImage = () => {

    const [UserImage, setUserImage] = useState('');
    const [SystemImage, setSystemImage] = useState('');
    const [UserScore, setUserScore] = useState(0);
    const [SystemScore, setSystemScore] = useState(0);

    const resetData = () => {
        setUserImage('../images/QuestionMark.png');
        setSystemImage('../images/QuestionMark.png');
        setUserScore(0);
        setSystemScore(0);
    }

    const ChangeImageToRock = () => {
        setUserImage('../images/Rock.png');
        SystemImageChange();
        ValidateScore();
    }

    const ChangeImageToPaper = () => {
        setUserImage('../images/Paper.webp');
        SystemImageChange();
        ValidateScore();
    }

    const ChangeImageToScissor = () => {
        setUserImage('../images/Scissor.webp');
        SystemImageChange();
        ValidateScore();
    }

    const SystemImageChange = () => {
        const SystemTrigger = Math.trunc(Math.random() * 3) + 1;
        if (SystemTrigger === 1) {
            setSystemImage('../images/Rock.png');
        } else if (SystemTrigger === 2) {
            setSystemImage('../images/Paper.webp');
        } else {
            setSystemImage('../images/Scissor.webp');
        }
    }

    const ValidateScore = () => {
        if (UserImage === SystemImage) {
            setUserScore(UserScore + 1);
            if (UserScore === 10) {
                alert("You Won the Game🎉");
                resetData();
            }
        } else {
            setSystemScore(SystemScore + 1);
            if (SystemScore === 10) {
                alert("You Lost the Game🎉");
                resetData();
            }
        }
    }

    return (
        <div className="container text-center">
            <div className="row">
                <div className="col card">
                    <User Image={UserImage} UserScore={UserScore} />
                </div>
                <div className="col vs">
                    <h1 className="vs1">Vs</h1>
                </div>
                <div className="col card">
                    <System Image={SystemImage} SystemScore={SystemScore} />
                </div>
            </div>
            <div className="row p-5" >
                <h2>Choose Your Option!!</h2>
                <div className="col">
                    <button type="button" className="btn btn-primary btn-lg" onClick={ChangeImageToRock} >Rock</button>
                </div>
                <div className="col">
                    <button type="button" className="btn btn-primary btn-lg" onClick={ChangeImageToPaper} >Paper</button>
                </div>
                <div className="col">
                    <button type="button" className="btn btn-primary btn-lg" onClick={ChangeImageToScissor} >Scissor</button>
                </div>
            </div>
        </div>
    )
}

export default DisplayImage;