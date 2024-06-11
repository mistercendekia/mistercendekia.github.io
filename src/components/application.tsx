import useGoogleSheets from "use-google-sheets";

const Application = () => {
  const { data, loading, error } = useGoogleSheets({
    apiKey: process.env.REACT_APP_GOOGLE_API_KEY ?? "",
    sheetId: process.env.REACT_APP_GOOGLE_SHEETS_ID ?? "",
    sheetsOptions: [{ id: "alumni" }],
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error!</div>;
  }

  return (
    <>
      {loading && <div>Loading...</div>}
      {!error && data[0].data.length > 0 && (
        <table style={{ width: "3000px" }}>
          <thead>
            <tr>
              {Object.keys(data[0].data[0]).map((item) => (
                <th>{item}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data[0].data.map((student) => (
              <tr>
                {Object.entries(student).map((item) =>
                  item[0] === "FOTO" || item[0] === "FOTO TEMPAT KERJA" ? (
                    <td>
                      <img src={`https://lh3.googleusercontent.com/d/${item[1]}=s1000`} alt="Hellow" />
                    </td>
                  ) : (
                    <td>{item[1]}</td>
                  )
                )}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default Application;

// https://drive.google.com/file/d/1Vm0Q4qVPQJ3mYBEUIynFQR7uno-d93hg/view?usp=sharing
