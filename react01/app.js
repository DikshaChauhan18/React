const root= ReactDOM.createRoot(document.getElementById("root"));


const heading = React.createElement("h1",{},"Hello EveryOne,");
const container = React.createElement("h3",{},"This is my first react file");

const div = React.createElement("div",{},[heading,container]);

root.render(div);

