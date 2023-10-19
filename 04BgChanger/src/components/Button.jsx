/* eslint-disable react/prop-types */
const Button = (props) => {
  return (
    <div>
      <button
        className="py-[20px] px-[10px] rounded-3xl text-[21px] font-[700] text-[#fff] tracking-wider uppercase"
        style={{ backgroundColor: props.colorName }}
        onClick={props.bgColor}
      >
        {props.colorName}
      </button>
    </div>
  );
};

export default Button;
