import App from "../../../components/App";
import HeadlineDetails from "../../../components/HeadlineDetails";
import {useRouter} from "next/router";
import {Grid} from "@mui/material";

const HeadlinePage = () => {
    const router = useRouter()
    const {id} = router.query

    return (
        <App>
            <Grid container spacing={2} columns={{xs: 1, sm: 12, md: 12}}>
                <Grid xs={8} item={true}>
                    <HeadlineDetails id={id}/>
                </Grid>
                <Grid xs={4} item={true}>
                </Grid>
            </Grid>
        </App>
    );
}

export default HeadlinePage
