
import { HomeProps } from "@/types";
import Hero from "./Hero";
import Account from "./account";
import Comments from "./comments";
import Products from "./products";
import Trust from "./trust";

interface HomeProps2 {
    data: HomeProps
}
const Home = ({ data }: HomeProps2) => {
    return (
        <>
            <Hero />
            <Products />
            <Account />
            <Trust />
            <Comments />

        </>
    );
};

export default Home;
