import AppWelcome from "./components/AppWelcome";

//<div></div> or <> </> it's was the same
export default function Home() {
  return (
    <> 
      <h1>Home page</h1>
      <hr />
      <AppWelcome headTilte="SWU" isShow={true}/>
    </>
  );
}
