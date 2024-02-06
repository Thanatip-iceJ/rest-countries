import Loading from "./components/Loading";
import { useCon } from "./contexts/Context";
import Routes from "./router/Routes";

function App() {
  const { appLoading, allCountries, allForSearch } = useCon();
  return (
    <>
      {allCountries && allForSearch ? (
        <div>
          <Routes />
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default App;
