import {gql, useQuery} from "@apollo/client";
import ErrorMessage from "./ErrorMessage";
import {Box, Stack, Typography} from "@mui/material";

export const HEADLINE_QUERY = gql`
    query headline($id: ID!) {
        headline(id: $id) {
            id
            title
            summary
            severity
            articles{
                id
                title
                description
                url
                source
            }
        }
    }
`;

function Articles({article}) {
    return (
        <Box component="section"
            key={article.id}
            sx={{
                marginBottom: '.5em'
            }}
        >
            <Typography
                variant="body1"
                paragraph={true}
                sx={{
                    margin: 0
                }}
            >{article.description}</Typography>
            <Stack direction="row" spacing={2}>
                <a href={article.url[0]}>
                    <Typography
                        variant="body2"
                        paragraph={false}
                        sx={{margin: 0}}
                    >{article.title}</Typography>
                </a>
                <Typography
                    variant="body2"
                    paragraph={false}
                    sx={{margin: 0}}
                >{article.source}</Typography>
            </Stack>
        </Box>
    );
}


export default function HeadlinesDetails({id}) {
    const {loading, error, data, networkStatus} = useQuery(HEADLINE_QUERY, {
        variables: {
            id: id
        }, // Setting this value to true will make the component rerender when
        // the "networkStatus" changes, so we are able to know if it is fetching
        // more data
        notifyOnNetworkStatusChange: true,
    })

    if (error) return <ErrorMessage message="Error loading headline."/>
    if (loading) return <div>Loading</div>

    const {headline} = data

    return (<section>
        <div>
            <Typography
                variant="h1"
            >{headline.title}</Typography>
            <Box component="section" sx={{
                paddingY: '1em'
            }}>
                <Typography
                    variant="h3"
                    sx={{
                        paddingBottom: '.3em'
                    }}
                >Summary</Typography>
                {headline.summary.map((paragraph, index) => (
                    <Typography paragraph={true} sx={{margin: 0}} key={index}>{paragraph}</Typography>
                ))}
            </Box>
            <Box component="section">
                <Typography
                    variant="h3"
                    sx={{
                        paddingBottom: '.3em'
                    }}
                >In Detail</Typography>
                {headline.articles.map((article, index) => (
                    <Articles key={article.id} article={article} />
                ))}
            </Box>
        </div>
    </section>)
}
