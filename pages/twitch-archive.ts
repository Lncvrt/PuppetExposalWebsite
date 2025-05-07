import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async () => ({
    redirect: {
        destination: "/archives/twitch",
        permanent: true,
    },
});

const TwitchRedirect: React.FC = () => null;

export default TwitchRedirect;
