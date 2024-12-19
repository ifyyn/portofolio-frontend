const Skill = ({ skillName }) => {
  return (
    <ul className="flex text-gray-600">
      <li className="bg-[#E1E8EF] p-2 text-sm md:text-sm lg:text-base font-semibold rounded-md text-dark">
        {skillName}
      </li>
    </ul>
  );
};
export default Skill;
