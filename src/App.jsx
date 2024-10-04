import { lazy, Suspense, useEffect } from "react";
import { Loader } from "./components/common";
import { useColorMode } from "@chakra-ui/react";
const Index = lazy(() => import("./pages/index"));

function App() {
  const { setColorMode } = useColorMode();

  useEffect(() => {
    setColorMode("light");
  }, []);

  return (
    <Suspense fallback={<Loader />}>
      <Index />;
    </Suspense>
  );
}

export default App;
