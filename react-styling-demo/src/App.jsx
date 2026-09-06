import styled from "styled-components";
import { css } from "@emotion/react";
import { useState } from "react";
import "./App.css";

// Styled Components
const Card = styled.div`
    background: white;
    width: 350px;
    padding: 30px;
    border-radius: 15px;
    text-align: center;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
`;

const Skill = styled.span`
    background: #eeeeee;
    padding: 8px 12px;
    border-radius: 20px;
    margin: 5px;
    display: inline-block;
`;

// Emotion CSS
const emotionButton = css`
    padding: 10px 20px;
    border: none;
    border-radius: 6px;
    background: #222;
    color: white;
    cursor: pointer;

    &:hover {
        background: #555;
    }
`;

function App() {
    const [message, setMessage] = useState("");

    const showMessage = () => {
        setMessage("Thanks for visiting my profile!");
    };

    return (
        <div className="app">

            <h1>React Styling Demo</h1>

            <Card>

                {/* Inline Styling */}
                <div
                    style={{
                        fontSize: "60px",
                        marginBottom: "10px"
                    }}
                >
                    👨‍💻
                </div>

                <h2>Vedant</h2>

                <p>
                    React Developer & Computer Engineering Student
                </p>

                <div className="skills">
                    <Skill>React</Skill>
                    <Skill>JavaScript</Skill>
                    <Skill>HTML</Skill>
                    <Skill>CSS</Skill>
                </div>

                {/* Emotion */}
                <button css={emotionButton} onClick={showMessage}>
                    Say Hello
                </button>

                <p>{message}</p>

            </Card>

        </div>
    );
}

export default App;