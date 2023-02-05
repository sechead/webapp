import App from '../components/App'
import HeadlinesList from '../components/HeadlinesList'
import {Grid, useMediaQuery} from "@mui/material";
import NewsFeed from "../components/NewsFeed";
import theme from "../lib/theme";

const IndexPage = () => {
    const matches = useMediaQuery(theme.breakpoints.up('md'));
    return (
        <App>
            <Grid container spacing={2} columns={{xs: 1, sm: 1, md: 12}}>
                <Grid xs={8} item={true}>
                    <HeadlinesList/>
                </Grid>
                {matches
                    ? (
                        <Grid xs={4} item={true}>
                            <NewsFeed/>
                        </Grid>
                    )
                    : false
                }
            </Grid>
        </App>
    );
}
//
// export async function getServerSideProps() {
//     const apolloClient = initializeApollo()
//
//     await Promise.all([
//         apolloClient.query({
//             query: HEADLINES_QUERY,
//             variables: headlinesQueryVars,
//         }),
//         apolloClient.query({
//             query: NEWS_FEED_QUERY,
//             variables: newsFeedQueryVars,
//         })
//     ])
//
//     return addApolloState(apolloClient, {
//         props: {},
//     })
// }

export default IndexPage
