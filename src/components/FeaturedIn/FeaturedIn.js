import classes from './FeaturedIn.module.scss';
import bi from '../../assets/Company Logos/business-insider.png';
import forbes from '../../assets/Company Logos/forbes.png';
import techcrunch from '../../assets/Company Logos/techcrunch.png';
import NYT from '../../assets/Company Logos/the-new-york-times.png';
import usaToday from '../../assets/Company Logos/usa-today.png';
const logos = [bi, forbes, techcrunch, NYT, usaToday];
const FeaturedIn = () => {
  const logoList = logos.map((logo, i) => {
    return (
      <li key={i}>
        <img key={i + 1} src={logo} alt='company logo' />
      </li>
    );
  });
  return (
    <section className={classes.section}>
      <ul>{logoList}</ul>
    </section>
  );
};

export default FeaturedIn;
