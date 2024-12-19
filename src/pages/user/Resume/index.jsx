import CardResume from "../../../components/CardResume";
import Skill from "../../../components/Skill";

const Resume = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md  lg:w-[840px]">
      <h2 className="text-3xl font-bold text-green-600 w-48 border-b-2 border-green p-1">
        Resume
      </h2>
      <div className="">
        <section className="mt-6">
          <h3 className="text-2xl font-bold text-gray-800">Education</h3>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            <CardResume name={"MA Palapa Nusantara"} date={"2017-2019"} />
            <CardResume
              name={"Universitas Teknologi Mataram"}
              description={"S1 Teknik Informatika"}
              date={"2021-2025"}
            />
          </div>
        </section>
        <section className="mt-6">
          <h3 className="text-2xl font-bold text-gray-800">
            Organizational Experience
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            <CardResume
              name={"Basic Training (LK I)"}
              description={"HMI Komisariat UTM 2021"}
            />
            <CardResume
              name={"Intermediate Training (LK 2)"}
              description={"Tingkat nasional cabang Selong"}
            />
            <CardResume
              name={"Wasekum Infokom"}
              description={"HMI Komisariat UTM cabang Mataram priode 2023-2024"}
            />
            <CardResume
              name={"Ketua Bidang Pembinaan Anggota"}
              description={"HMI Komisariat UTM cabang Mataram priode 2024-2025"}
            />
          </div>
        </section>
      </div>
      <section className="mt-6">
        <h3 className="text-2xl font-bold text-gray-800">Courses</h3>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          <CardResume name={"Vocasia"} description={"fullstack mern"} />
        </div>
      </section>
      <section className="mt-6">
        <h3 className="text-2xl font-bold text-gray-800">Skills</h3>
        <div className="grid grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-3 mt-4 lg:w-1/2 w-full">
          <Skill skillName={"html"} />
          <Skill skillName={"javasript"} />
          <Skill skillName={"css"} />
          <Skill skillName={"html"} />
          <Skill skillName={"html"} />
          <Skill skillName={"html"} />
        </div>
      </section>
    </div>
  );
};
export default Resume;
