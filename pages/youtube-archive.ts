import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async () => ({
    redirect: {
        destination: "/archives/youtube",
        permanent: true,
    },
});

const YouTubeRedirect: React.FC = () => null;

export default YouTubeRedirect;
