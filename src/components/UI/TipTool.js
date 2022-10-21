import { Tooltip } from '@mui/material';

const Tiptool = (props) => {
  return (
    <Tooltip
      enterDelay={500}
      arrow
      title={<span style={{ fontSize: '1.2rem' }}>{props.title}</span>}
    >
      {props.children}
    </Tooltip>
  );
};

export default Tiptool;
