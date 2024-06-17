// used this to practice box clicking
import React from "react";
import boxInfo from "../component data/boxInfo";
const Box = () => {
    const [squares, setSquares] = React.useState(boxInfo);

    const toggle = (id) => {
        setSquares((prevSquares) => {
            return prevSquares.map((square) => {
                return square.id === id
                    ? { ...square, on: !square.on }
                    : square;
            });
        });
    };

    const renderSquare = squares.map((square) => (
        <BoxComp
            className="square"
            key={square.id}
            on={square.on}
            handleToggle={() => toggle(square.id)}
        />
    ));

    return <section className="square-cont">{renderSquare}</section>;
};

// in this part i learnt about derived state which included setting new state on this BoxComp with default on value gotten as a prop from the parent
// would be running the same thing via unified state

const BoxComp = (props) => {
    const styles = {
        backgroundColor: props.on ? "hotpink" : "beige",
    };
    return (
        <div
            className="square"
            style={styles}
            onClick={props.handleToggle}
        ></div>
    );
};

export default Box;
