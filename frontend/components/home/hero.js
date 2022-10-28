import AnimationAGX from "./animation-agx";
import Content from "./content";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <div className="container mx-auto flex px-5 md:py-24 items-center justify-center flex-col">
        <AnimationAGX></AnimationAGX>
        <br />
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">
            Welcome to Brightician
          </h1>
          <p className="mb-8 leading-relaxed">
            우리는 유연한 조직을 추구합니다. 그러나 저희는 구성원의 빠른 성장을
            지원합니다. 우리의 조직은 코딩은 아직 어렵지만 아이디어가 있는
            구성원들이 그들의 logic과 algorithms 만으로 아이디어를 실체화
            가능하게 돕습니다. 동시에 코딩은 할 수 있지만 아이디어가 필요한
            구성원들이 저 멀리서 빛나는 아이디어를 자신의 코드로 실현가능하도록
            돕습니다.
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-cyan-700 border-0 py-2 px-6 focus:outline-none hover:bg-cyan-900 rounded text-lg">
              커뮤니티 가입하기
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
