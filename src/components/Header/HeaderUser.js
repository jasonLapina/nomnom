import Tiptool from '../UI/TipTool';

const HeaderUser = (props) => {
  return (
    <Tiptool title='Profile'>
      <button onClick={props.onClick}>
        <ion-icon name='person-outline' />
      </button>
    </Tiptool>
  );
};

export default HeaderUser;
