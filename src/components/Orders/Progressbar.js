import classes from './ProgressBar.module.scss';
const ProgressBar = (props) => {
  return (
    <div className={classes.progress}>
      <div
        className={classes.progressBar}
        style={{ width: `${((props.status - 1) / 3) * 100}%` }}
      />
      <div
        className={`${classes.step} ${
          props.status === 1 ? classes.active : ''
        }`}
      >
        <ion-icon name='hourglass-outline'></ion-icon>
      </div>
      <div
        className={`${classes.step} ${
          props.status === 2 ? classes.active : ''
        }`}
      >
        <ion-icon name='bicycle-outline'></ion-icon>
      </div>
      <div
        className={`${classes.step} ${
          props.status === 3 ? classes.active : ''
        }`}
      >
        <ion-icon name='location-outline'></ion-icon>
      </div>
      <div
        className={`${classes.step} ${
          props.status === 4 ? classes.active : ''
        }`}
      >
        <ion-icon name='restaurant-outline'></ion-icon>
      </div>
    </div>
  );
};

export default ProgressBar;
