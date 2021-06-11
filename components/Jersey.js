const Jersey = () => {
  const [jersey, setJersey] = React.useState("icon");
  const [number, setNumber] = React.useState(6);

  const icon = () => setJersey("icon");
  const statement = () => setJersey("statement");
  const association = () => setJersey("association");
  const cityEdition2021 = () => setJersey("city-edition-2021");
  const classicEdition2021 = () => setJersey("classic-edition-2021");
  const earnedEdition2021 = () => setJersey("earned-edition-2021");

  const incrementar = () => {
    setNumber(number + 1);
  };
  const disminuir = () => {
    setNumber(number - 1);
  };

  return (
    <div className="jersey">
      <img
        className="jersey-logo"
        src={"./public/images/lakers-logo-jersey-" + jersey + ".svg"}
      />

      <img
        className="team-jersey"
        src={"./public/images/lakers-" + jersey + ".svg"}
      />

      <div className="jersey-number">
        <h1 className={"number lakers-" + jersey + "-number"}>
          {number >= 0 ? number : 0}
        </h1>
      </div>

      <aside className="options">
        <h2>Jersey Edition:</h2>
        <button onClick={icon}>Icon</button>
        <button onClick={statement}>Statement</button>
        <button onClick={association}>Association</button>
        <button onClick={cityEdition2021}>City Edition 2021</button>
        <button onClick={classicEdition2021}>Classic Edition 2021</button>
        <button onClick={earnedEdition2021}>Earned Edition 2021</button>
        <h2>Número:</h2>
        <button onClick={incrementar}>Incrementar</button>
        <button onClick={disminuir}>Disminuir</button>
      </aside>
    </div>
  );
};
