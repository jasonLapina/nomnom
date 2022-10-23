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

const Hero = () => {
  const photos = [nayeon, sana, mina, momo, chaeyoung, dahyun];
  return (
    <section className={classes.section}>
      <div className={classes.textbox}>
        <div className={classes.heading}>
          <h1>Heed your cravings!</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            sit odio, eius recusandae quis odit voluptas expedita sapiente
            quibusdam voluptatum, adipisci ipsa voluptatibus ipsum consequuntur.
          </p>
        </div>
        <Button className={classes.cta}>
          <a href='#meals'>See Available Meals &darr;</a>
        </Button>
        <div className={classes.customers}>
          {photos.map((photo, i) => {
            return <img key={i} src={photo} alt='customer' />;
          })}
          <div className={classes['customers-text']}>
            <h3>1 million+</h3> <span>satisfied customers</span>
          </div>
        </div>
      </div>
      <div className={classes.imgbox}>
        <img className={classes.burger} src={hero1} alt='delicious burger' />
        <img src={hero3} alt='woman eating' />
        <img className={classes.sushi} src={hero2} alt='delicious sushi' />
      </div>
    </section>
  );
};

export default Hero;
