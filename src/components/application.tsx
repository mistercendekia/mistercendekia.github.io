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
    <div>{JSON.stringify(data)}</div>
    <div><img src="https://lh3.googleusercontent.com/d/1CDcNR3C36XPXT3RB2JKFWcGEfu2epkwM=s1000?authuser=0" alt="Hellow" /></div></>
  );
};

export default Application;

// https://drive.google.com/file/d/1Vm0Q4qVPQJ3mYBEUIynFQR7uno-d93hg/view?usp=sharing