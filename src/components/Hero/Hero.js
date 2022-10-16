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

const Hero = () => {
  const photos = [nayeon, sana, mina, momo, chaeyoung, dahyun];
  return (
    <section className={classes.section}>
      <div className={classes.textbox}>
        <h1>some heading</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          sit odio, eius recusandae quis odit voluptas expedita sapiente
          quibusdam voluptatum, adipisci ipsa voluptatibus ipsum consequuntur.
          Ex qui ipsam cum voluptatem?
        </p>
        <div className={classes.customers}>
          {photos.map((photo, i) => {
            return <img key={i} src={photo} alt='customer' />;
          })}
          <h3>1 million+</h3> <h4>satisfied customers</h4>
        </div>
      </div>
      <div className={classes.imgbox}>
        <img className={classes.burger} src={hero1} alt='delicious burger' />
        <img className={classes.sushi} src={hero2} alt='delicious sushi' />
        <img className={classes.customer} src={hero3} alt='woman eating' />
      </div>
    </section>
  );
};

export default Hero;
