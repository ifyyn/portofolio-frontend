const Education = ({ name, description }) => {
  return (
    <div className="mt-4 bg-[#F2F7FC] text-green p-4 rounded-md shadow-sm">
      <h4 className="text-sm md:text-lg lg:text-lg font-semibold">{name}</h4>
      <p className="text-gray-700 text-xs md:text-sm lg:text-sm">
        {description}
      </p>
    </div>
  );
};
export default Education;
