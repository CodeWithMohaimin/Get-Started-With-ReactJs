const Toast = ({ message = "Sorry I miss to pass props 🤔" }) => {
  return (
    <>
      <p className="text-[9px] sm:text-[14px]">{message}</p>
    </>
  );
};

export default Toast;
