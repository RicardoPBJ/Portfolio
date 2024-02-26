const IconRender = ({ icon, size }) => {
  return <span>{icon({ size })}</span>;
};

export default IconRender;
