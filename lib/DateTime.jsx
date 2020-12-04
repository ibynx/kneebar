const render = ({ output }) => {
  if (typeof output === "undefined") return null;
  return (
    <div>
      {output.time}
      &nbsp;
      &ensp;
      {output.date}
    </div>
  );
};

export default render;
