import type { SexOption } from "@/components/assessment/AssessmentTypes";

// SSA Annual Statistical Supplement 2025, table 4.C6 (2022 period life table).
// Each row is [exact age, male annual probability, female annual probability].
const SSA_2022 = [
  [18,.001026,.000395],[19,.001182,.000450],[20,.001301,.000496],[21,.001404,.000532],
  [22,.001498,.000567],[23,.001586,.000610],[24,.001679,.000650],[25,.001776,.000699],
  [26,.001881,.000743],[27,.001985,.000796],[28,.002095,.000855],[29,.002219,.000924],
  [30,.002332,.000988],[31,.002445,.001053],[32,.002562,.001123],[33,.002653,.001198],
  [34,.002716,.001263],[35,.002791,.001324],[36,.002894,.001403],[37,.002994,.001493],
  [38,.003091,.001596],[39,.003217,.001700],[40,.003353,.001803],[41,.003499,.001905],
  [42,.003642,.002009],[43,.003811,.002116],[44,.003996,.002223],[45,.004175,.002352],
  [46,.004388,.002516],[47,.004666,.002712],[48,.004973,.002936],[49,.005305,.003177],
  [50,.005666,.003407],[51,.006069,.003642],[52,.006539,.003917],[53,.007073,.004238],
  [54,.007675,.004619],[55,.008348,.005040],[56,.009051,.005493],[57,.009822,.005987],
  [58,.010669,.006509],[59,.011548,.007067],[60,.012458,.007658],[61,.013403,.008305],
  [62,.014450,.008991],[63,.015571,.009681],[64,.016737,.010343],[65,.017897,.011018],
  [66,.019017,.011743],[67,.020213,.012532],[68,.021569,.013512],[69,.023088,.014684],
  [70,.024828,.016025],[71,.026705,.017468],[72,.028761,.019195],[73,.031116,.021195],
  [74,.033861,.023452],[75,.037088,.025980],[76,.041126,.029153],[77,.045241,.032394],
  [78,.049793,.035888],[79,.054768,.039676],[80,.060660,.044156],[81,.067027,.049087],
  [82,.073999,.054635],[83,.081737,.061066],[84,.090458,.068431],[85,.100525,.076841],
  [86,.111793,.086205],[87,.124494,.096851],[88,.138398,.109019],[89,.153207,.121867],
  [90,.169704,.135805],[91,.187963,.151108],[92,.208395,.168020],[93,.230808,.186340],
  [94,.253914,.206432],[95,.277402,.228086],[96,.300882,.250406],[97,.324326,.273699],
  [98,.347332,.296984],[99,.369430,.319502],[100,.391927,.342716],[101,.414726,.366532],
  [102,.437722,.390844],[103,.460800,.415531],[104,.483840,.440463],[105,.508032,.466891],
  [106,.533434,.494904],[107,.560105,.524599],[108,.588111,.556075],[109,.617516,.589439],
  [110,.648392,.624805],[111,.680812,.662294],[112,.714852,.702031],[113,.750595,.744153],
  [114,.788125,.788125],[115,.827531,.827531],[116,.868907,.868907],[117,.912353,.912353],
  [118,.957970,.957970],[119,1,1],
] as const;

export function getAnnualProbabilities(age: number, sex: SexOption) {
  const exactAge = Math.min(119, Math.max(18, Math.floor(age)));
  const sexIndex = sex === "male" ? 1 : 2;
  return SSA_2022.filter(([rowAge]) => rowAge >= exactAge).map((row) => row[sexIndex]);
}

export function computeRemainingExpectancy(age: number, sex: SexOption, hazardRatio = 1) {
  const probabilities = getAnnualProbabilities(age, sex);
  let survivors = 1;
  let personYears = 0;
  for (const probability of probabilities) {
    const adjustedProbability = probability >= 1 ? 1 : 1 - Math.pow(1 - probability, Math.max(0.01, hazardRatio));
    personYears += survivors * (1 - adjustedProbability / 2);
    survivors *= 1 - adjustedProbability;
    if (survivors <= 1e-10) break;
  }
  return personYears;
}

export function computeSurvivalQuantileAge(age: number, sex: SexOption, hazardRatio: number, quantile: number) {
  let survivors = 1;
  const probabilities = getAnnualProbabilities(age, sex);
  for (let index = 0; index < probabilities.length; index += 1) {
    const probability = probabilities[index];
    const adjustedProbability = probability >= 1 ? 1 : 1 - Math.pow(1 - probability, Math.max(0.01, hazardRatio));
    const nextSurvivors = survivors * (1 - adjustedProbability);
    if (nextSurvivors <= quantile) {
      const fraction = adjustedProbability > 0 ? (survivors - quantile) / (survivors - nextSurvivors) : 0;
      return age + index + Math.min(1, Math.max(0, fraction));
    }
    survivors = nextSurvivors;
  }
  return 119;
}
