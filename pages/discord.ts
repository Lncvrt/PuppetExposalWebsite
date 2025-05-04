import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async () => ({
    redirect: {
        destination: "https://discord.gg/hUVVqhXwhJ",
        permanent: false, //it might be changed in the future incase of term
    },
});

const Discord: React.FC = () => null;

export default Discord;
