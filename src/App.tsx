import { SearchFrom } from "./components/SearchFrom";
import { SearchResults } from "./components/SearchResults";
import { SearchProvider } from "./contexts/SearchContext/SearchProvider";

export default function App() {

    return (
        <SearchProvider>
            <SearchFrom />
            <SearchResults />
        </SearchProvider>
  );
}
