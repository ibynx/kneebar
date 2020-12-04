import styles from "./styles.jsx";
import run from "uebersicht";

const containerStyle = {
  display: "grid",
  gridAutoFlow: "column",
  gridGap: "8px"
};

const desktopStyle = {
  width: "3ch",
};


const renderSpace = (index, focused, visible, windows) => {
  let contentStyle = JSON.parse(JSON.stringify(desktopStyle));
  let hasWindows = windows.length > 0;
  if (focused == 1) {
    contentStyle.color = styles.colors.accentText;
    contentStyle.fontWeight = "bold";
    contentStyle.backgroundColor = styles.colors.accent;
    contentStyle.width = styles.lineHeight;  // the height of the thing is lineHeight
    contentStyle.borderRadius = "40%";
    contentStyle.boxShadow = styles.boxShadow;
  } else if (visible == 1) {
    contentStyle.color = styles.colors.fg;
  }
  return (
    <div style={contentStyle}>
      {/* focused ? "[" : <span>&nbsp;</span>  */}
      {index}
      {!focused && hasWindows ? "°" : null }
      {/* focused ? "]" : <span>&nbsp;</span>  */}
    </div>
  );
};

const render = ({ output }) => {
  if (typeof output === "undefined") return null;

  const spaces = [];

  output.forEach(function(space) {
    spaces.push(renderSpace(space.index, space.focused, space.visible, space.windows));
  });

  return (
    <div style={containerStyle}>
      {spaces}
    </div>
  );
};

export default render;
