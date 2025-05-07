import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    const id = query.id
    return {
        redirect: {
            destination: id ? `/archives/youtube/watch/${id}` : "/archives/youtube",
            permanent: true,
        },
    }
}

const YouTubeWatchRedirect: React.FC = () => null

export default YouTubeWatchRedirect
