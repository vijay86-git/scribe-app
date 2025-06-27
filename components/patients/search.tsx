import { Input } from "@/components/ui/input"
const Search = ({ search, setSearch}) => {
	return (<Input
			    placeholder="Search by patient id or personal health number..  ."
			    className="max-w-sm"
			    value={search}
			    onChange={(e) => setSearch(e.target.value)}
			/>)
}

export default Search;