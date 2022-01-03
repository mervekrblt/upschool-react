const Button = ({ isDark, setDark }) => {
  const changeTheme = () => {
    setDark(!isDark);
    console.log(isDark);
  };
  return (
    <>
      <button onClick={changeTheme} href="#" className="btn btn-primary">
        Change theme
      </button>
    </>
  );
};
export default Button;
