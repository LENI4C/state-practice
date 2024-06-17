// used this to practice clicking to update DOM content
import React from "react";

const Content = () => {
    const [clickyState, setClicky] = React.useState(["Thing 1"]);
    const renderClicky = clickyState.map((clickyVal) => <p> ${clickyVal}</p>);

    const handleClicky = () => {
        setClicky((prevState) => [
            ...prevState,
            `Thing ${prevState.length + 1}`,
        ]);
        console.log(clickyState);
    };

    return (
        <>
            <div className="clicky" onClick={handleClicky}>
                Clicky
            </div>
            {renderClicky}
        </>
    );
};

export default Content;
