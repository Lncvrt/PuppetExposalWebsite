import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    const id = query.id
    return {
        redirect: {
            destination: id ? `/archives/twitch/watch/${id}` : "/archives/twitch",
            permanent: true,
        },
    }
}

const TwitchWatchRedirect: React.FC = () => null

export default TwitchWatchRedirect
