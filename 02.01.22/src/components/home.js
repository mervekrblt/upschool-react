import Card from "./ThemeButtonColor/index";

const Home = ({ isDark, setDark }) => {
  return (
    <>
      Home
      <Card isDark={isDark} setDark={setDark}></Card>
      <section>
        <p>This p element effected by theme change</p>
      </section>
    </>
  );
};
export default Home;
