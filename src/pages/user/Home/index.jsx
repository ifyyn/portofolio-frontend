import Card from "../../../components/Card";

const HomePage = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full lg:w-[840px]">
      <h2 className="text-3xl font-bold text-dark w-48 border-b-2 border-green p-1">
        ABOUT ME
      </h2>
      <p className="text-gray-700 mt-4">
        Hello there! I'm thrilled to welcome you to my portfolio. I am a
        passionate and versatile full-stack developer with a keen interest in
        exploring the latest cutting-edge technologies. My journey in the world
        of web development has been nothing short of exhilarating, and I
        constantly strive to enhance my skills and embrace emerging trends in
        the industry.
      </p>
      <h3 className="text-2xl font-bold text-gray-800 mt-6">What I do!</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <Card
          title={"web developer"}
          description={`As a developer, I find myself most captivated by the power and
        flexibility of NEXT.js. I'm always eager to dive into new projects that
        leverage NEXT.js and discover innovative ways to create fast, scalable,
        and user-friendly applications.`}
        />
      </div>
    </div>
  );
};
export default HomePage;
