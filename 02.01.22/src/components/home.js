import Card from "./ThemeButtonColor/index";
import theme from '../theme'

const Home = ({ isDark, setDark }) => {
  const currentTheme = isDark ? theme.isDark : theme.isLight
  return (
    <>
      <Card isDark={isDark} setDark={setDark}></Card>
      <section>
        <p className={`${currentTheme.p}`}>This p element effected by theme change</p>
      </section>
    </>
  );
};
export default Home;
