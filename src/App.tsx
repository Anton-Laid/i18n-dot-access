import { useTranslation } from "react-i18next";
import "./App.css";

function App() {
  const { t } = useTranslation("common");

  return (
    <>
      <h2>{t(($) => $.title)}</h2>
    </>
  );
}

export default App;
