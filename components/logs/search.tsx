import { Input } from "@/components/ui/input"
import { SearchProps } from '@/components/doctors/types'

const Search = ({ search, setSearch}: SearchProps) => {
	return (<Input
			    placeholder="Search by name, email id..."
			    className="max-w-sm"
			    value={search ?? ''}
			    onChange={(e) => setSearch(e.target.value)}
			    autoComplete="off"
			/>)
}

export default Search;