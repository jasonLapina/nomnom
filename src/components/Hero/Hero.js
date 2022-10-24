import classes from './Hero.module.scss';
import hero1 from '../../assets/hero1.webp';
import hero2 from '../../assets/hero2.webp';
import hero3 from '../../assets/hero3.webp';
import nayeon from '../../assets/customers/nayeon.webp';
import sana from '../../assets/customers/sana.webp';
import mina from '../../assets/customers/mina.webp';
import momo from '../../assets/customers/momo.webp';
import chaeyoung from '../../assets/customers/chaeyoung.webp';
import dahyun from '../../assets/customers/dahyun.webp';
import Button from '../UI/Button';
import FeaturedIn from '../FeaturedIn/FeaturedIn';

const Hero = () => {
  const photos = [nayeon, sana, mina, momo, chaeyoung, dahyun];
  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <div className={classes.textbox}>
          <div className={classes.heading}>
            <h1>Heed your cravings!</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium sit odio, eius recusandae quis odit voluptas expedita
              sapiente quibusdam voluptatum, adipisci. uis odit voluptas?
            </p>
          </div>
          <div className={classes['cta-wrapper']}>
            <Button className={classes.cta}>
              <a href='#meals'>See Available Meals &darr;</a>
            </Button>
            <Button className={`${classes.cta} ${classes['cta--alt']}`}>
              <a href='#footer'>Learn More &darr;</a>
            </Button>
          </div>
          <div className={classes.customers}>
            {photos.map((photo, i) => {
              return <img key={i} src={photo} alt='customer' />;
            })}
            <p>
              <span>1 million+</span> customers satisfied
            </p>
          </div>
        </div>
        <div className={classes.imgbox}>
          <img className={classes.burger} src={hero1} alt='delicious burger' />
          <img src={hero3} alt='woman eating' />
          <img className={classes.sushi} src={hero2} alt='delicious sushi' />
        </div>
      </div>
      <FeaturedIn />
    </section>
  );
};

export default Hero;
