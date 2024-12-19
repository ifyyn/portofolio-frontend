const Card = ({ title, description }) => {
  return (
    <div className="bg-[#F2F7FC] p-4 rounded-md shadow-sm">
      <h4 className="text-xl font-semibold text-green">{title}</h4>
      <p className="text-dark mt-2">{description}</p>
    </div>
  );
};
export default Card;
