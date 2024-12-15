const Heading = ({ children, bgGradient, className = '' }) => {
  return (
    <h1
      className={`${className} ${
        bgGradient
          ? 'bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent'
          : ''
      } `}
    >
      {children}
    </h1>
  );
};

export default Heading;
