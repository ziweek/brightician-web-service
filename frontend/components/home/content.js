import AnimationSoftware from "./animation-software";
import AnimationAnalysis from "./animation-analysis";
import AnimationBusiness from "./animation-business";

export default function Content() {
  return (
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-wrap -m-4">
        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
          <div className="h-full text-center">
            <AnimationBusiness></AnimationBusiness>
            <h2 className=" font-medium title-font tracking-wider text-sm">
              비즈니스 문제 탐색
            </h2>
            <p className="text-gray-500">Detecting Problems</p>
            <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
            <p className="leading-relaxed">
              비즈니스 문제는 우리의 일상과 떨어진 저 멀리의 것이 아닙니다.
              여러분이 존재하는 모든 곳에서 느끼는 불편함이 바로 비즈니스
              문제입니다. 여러분의 불편함을 표출하고 이를 집단지성으로
              해결해나가세요!
            </p>
          </div>
        </div>
        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
          <div className="h-full text-center">
            <AnimationSoftware></AnimationSoftware>
            <h2 className=" font-medium title-font tracking-wider text-sm">
              데이터 분석 진행
            </h2>
            <p className="text-gray-500">Analyzing Data</p>
            <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
            <p className="leading-relaxed">
              선정한 비즈니스 문제 해결이라는 관점에 가장 적합한 데이터 분석
              방법을 탐색하세요. 코드를 통한 데이터 분석을 진행해 본 적이 없어서
              걱정이시라고요? 걱정마세요. 당신이 분석을 통해 어떠한 결과를,
              어떠한 프로세스를 통해 도출해내고 싶은지와 관련된 로직만 보유하고
              있다면 데이터 분석은 brightics가 도와줍니다.
            </p>
          </div>
        </div>
        <div className="lg:w-1/3 lg:mb-0 p-4">
          <div className="h-full text-center">
            <AnimationAnalysis></AnimationAnalysis>
            <h2 className=" font-medium title-font tracking-wider text-sm">
              데이터 솔루션 제안
            </h2>
            <p className="text-gray-500">Reporting Solutions</p>
            <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
            <p className="leading-relaxed">
              도출된 데이터 분석 결과를 기반으로 비즈니스 문제 해결을 위한
              솔루션을 제안하세요. 당신만의 관점에서 당신만의 로직으로 제안된
              솔루션. 다른 구성원들과 어떠한 차이점이 있는지 함께 비교하고
              토론하며 당신의 솔루션을 한층 더 성장시켜 보세요.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
