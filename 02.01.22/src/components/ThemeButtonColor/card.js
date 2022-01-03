import Button from "./button";
import theme from '../../theme'

const Card = ({ isDark, setDark }) => {
  const currentTheme = isDark ? theme.isDark : theme.isLight
  return (
    <>
      <div className="row">
        <div className="col-sm-6">
          <div className={`${currentTheme.card} card`}>
            <div className="card-body">
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <Button isDark={isDark} setDark={setDark} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;
