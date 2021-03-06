import React from "react";
import Accordian from "./Accordian";

const App = () => {
    const items = [
        {
            title: "What is React?",
            content: "React is a front end javascript framework",
        },
        {
            title: "Why use React?",
            content: "React is a favorite JS library among engineers",
        },
        {
            title: "How do you use React?",
            content: "You use React by creating components",
        },
    ];

    return (
        <div>
            <Accordian items={items} />
        </div>
    )
}
export default App;