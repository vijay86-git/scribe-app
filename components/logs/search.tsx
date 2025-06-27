import { Input } from "@/components/ui/input"
const Search = ({ search, setSearch}) => {
	return (<Input
			    placeholder="Search by name, email id..."
			    className="max-w-sm"
			    value={search}
			    onChange={(e) => setSearch(e.target.value)}
			/>)
}

export default Search;