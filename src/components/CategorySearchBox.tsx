import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
export function CategorySearchBox({ categories, setSelectedCategory }: any) {
    return (
        <Autocomplete
            id="combo-box-demo"
            options={categories}
            getOptionLabel={(option: any) => option}
            onChange={(event, value) => { setSelectedCategory(value) }}
            renderInput={(params) => <TextField {...params} label="Search by categories"
                variant="outlined"
                style={{ width: '30rem' }} />}
        />
    );
}