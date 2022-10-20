import classes from './Testimonial.module.scss';
import chaeyoung from '../../assets/customers/chaeyoung.webp';
import sana from '../../assets/customers/sana.webp';
import nayeon from '../../assets/customers/nayeon.webp';
import mina from '../../assets/customers/mina.webp';
// gallery images
import gallery1 from '../../assets/Gallery/gallery-1.jpg';
import gallery2 from '../../assets/Gallery/gallery-2.jpg';
import gallery3 from '../../assets/Gallery/gallery-3.jpg';
import gallery4 from '../../assets/Gallery/gallery-4.jpg';
import gallery5 from '../../assets/Gallery/gallery-5.jpg';
import gallery6 from '../../assets/Gallery/gallery-6.jpg';
import gallery7 from '../../assets/Gallery/gallery-7.jpg';
import gallery8 from '../../assets/Gallery/gallery-8.jpg';
import gallery9 from '../../assets/Gallery/gallery-9.jpg';
import gallery10 from '../../assets/Gallery/gallery-10.jpg';
import gallery11 from '../../assets/Gallery/gallery-11.jpg';
import gallery12 from '../../assets/Gallery/gallery-12.jpg';

const Testimonial = () => {
  const testimonials = [
    {
      customer: 'Sana Minatozaki',
      testimonial:
        'ansaraaaap! proud pinay 수 또는 파견하며. 국회는 국가의 예산안을 심의·확정한다. osam nihil quod officia',
      photo: sana,
    },
    {
      customer: 'Son-Chaeyoung',
      testimonial:
        'i dont know how to speak filipino, but the food is sooo good, 는 국가의 예산안을 심의·회는 국가의 예산안을 ',
      photo: chaeyoung,
    },
    {
      customer: 'Im Nayeon',
      testimonial:
        '외교사절을 신임·접수 또는 파견하며. 국회는 국가의 예산안을 심의·확정한다. 산안을 심의·확정한.  Lorem ipsum dolor sit amet',
      photo: nayeon,
    },
    {
      customer: 'Mina Myoi',
      testimonial:
        'I love eating food from nomnom while watching bleach:thousand year blood war arc. 의 예산안을 심의·확정한다.',
      photo: mina,
    },
  ];

  const gallery = [
    gallery1,
    gallery2,
    gallery3,
    gallery4,
    gallery5,
    gallery6,
    gallery7,
    gallery8,
    gallery9,
    gallery10,
    gallery11,
    gallery12,
  ];

  return (
    <section className={classes.sectionTestimonials}>
      <div className={classes['grid-wrapper']}>
        <div className={classes.testimonials}>
          <div className={classes.heading}>
            <h2>Testimonials</h2>
            <h4>Read our featured customers' reviews!</h4>
          </div>
          {testimonials.map((testi, i) => {
            return (
              <figure key={i}>
                <img src={testi.photo} alt='customer' />
                <blockquote>{testi.testimonial}</blockquote>
                <p>&mdash; {testi.customer}</p>
              </figure>
            );
          })}
        </div>
        <div className={classes.gallery}>
          {gallery.map((photo, i) => {
            return (
              <figure key={i}>
                <img src={photo} alt='gallery' />
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
