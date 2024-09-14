import { lazy, Suspense } from "react";
import { Loader } from "./components/common";
const Index = lazy(() => import("./pages/index"));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Index />;
    </Suspense>
  );
}

export default App;
