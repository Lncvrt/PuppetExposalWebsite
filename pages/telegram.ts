import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async () => ({
    redirect: {
        destination: "https://t.me/puppetexposal",
        permanent: true,
    },
});

const Telegram: React.FC = () => null;

export default Telegram;
