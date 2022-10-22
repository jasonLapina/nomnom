import Tiptool from '../UI/TipTool';

const HeaderOrder = (props) => {
  return (
    <Tiptool title='Active Order'>
      <button onClick={props.onClick}>
        <ion-icon name='reader-outline' />
      </button>
    </Tiptool>
  );
};

export default HeaderOrder;
