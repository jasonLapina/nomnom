import classes from './Footer.module.scss';
const Footer = () => {
  return (
    <footer id='footer' className={classes.footer}>
      <div className={`${classes.column} ${classes['column-socials']}`}>
        <h2>NomNom</h2>
        <div className={classes.socials}>
          <a
            href='https://github.com/jasonLapina'
            rel='noreferrer'
            target='_blank'
          >
            <ion-icon name='logo-github' />
          </a>
          <a href='/'>
            <ion-icon name='logo-linkedin' />
          </a>
          <a
            href='https://www.facebook.com/klemekek'
            rel='noreferrer'
            target='_blank'
          >
            <ion-icon name='logo-facebook'></ion-icon>
          </a>
        </div>
        <p>
          Copyright © 2022 by{' '}
          <a
            href='https://github.com/jasonLapina'
            rel='noreferrer'
            target='_blank'
          >
            Jason Lapina
          </a>
          . Built for portofolio purposes.
        </p>
      </div>
      <div className={classes.column}>
        <h5>Contact</h5>
        <address className={classes.contacts}>
          <p>Batong Malake, Los Baños, Laguna</p>
          <p>+639563090839</p>
          <a className={classes.email} href='mailto:lapina.jason@gmail.com'>
            lapina.jason@gmail.com
          </a>
        </address>
      </div>
      <div className={classes.column}>
        <h5>Account</h5>
        <p>Create account</p>
        <p>Sign in</p>
        <a href='/'>iOS app</a>
        <a href='/'>Androiod app</a>
      </div>
      <div className={classes.column}>
        <h5>Company</h5>
        <a href='/'>About nomnom</a>
        <a href='/'>For business</a>
        <a href='/'>Business partners</a>
        <a href='/'>Careers</a>
      </div>
      <div className={classes.column}>
        <h5>Resources</h5>
        <a href='/'>Recipe directory</a>
        <a href='/'>Help center</a>
        <a href='/'>Privacy & terms</a>
      </div>
    </footer>
  );
};

export default Footer;
