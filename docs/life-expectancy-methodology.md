# LIFE Expectancy methodology

Version 2.0 — October 2026

The LIFE Expectancy calculator is an educational statistical estimate. It is not a medical prediction or diagnosis.

## Baseline

The baseline is the 2022 U.S. period life table published as table 4.C6 in the Social Security Administration's *Annual Statistical Supplement, 2025*. The calculator starts at the participant's exact integer age and biological sex and uses the published annual mortality probability for every subsequent age through 119.

Source: [SSA table 4.C6](https://www.ssa.gov/policy/docs/statcomps/supplement/2025/4c.html#table4.c6)

For a starting age `a`, annual survival begins at `S(a) = 1`. Remaining expectancy is the sum of person-years lived in every subsequent one-year interval, using a uniform-distribution approximation within each interval:

`e(a) = Σ S(x) × (1 − q(x)/2)`

where `q(x)` is the annual probability at exact age `x`.

## Mortality-rate adjustment

Published relative risks or hazard ratios are applied to the life-table force of mortality rather than directly adding or subtracting years:

`q_adjusted(x) = 1 − (1 − q_SSA(x))^HR_combined`

The five factors are multiplied. To avoid unsupported stacking, the combined value is bounded to `0.26–3.846`, corresponding to the observed joint HR of 0.26 for five versus zero low-risk factors in Li et al. and its reciprocal. The resulting age adjustment is additionally limited to the published all-factor lifespan difference: 14.0 years for women and 12.2 years for men.

Because the SSA table represents the whole U.S. population rather than an ideal low-risk group, each published factor estimate is centered on a middle questionnaire category. A factor at that category has a multiplier of 1.0. This preserves the SSA estimate for an all-average response profile.

## Factor mappings

### Cigarette smoking

Li et al. table 2 reports all-cause HRs of 1.00 for never, 1.41 for former, and 2.02 for current smokers of 1–14 cigarettes daily. The calculator conservatively uses the lowest current-smoking category because cigarette quantity is not collected.

For former smokers, Thomson et al. found that 5–14 years since quitting removed about half the excess risk and 15+ years removed about 90%. Because the published categories do not defensibly distinguish every requested short interval, the model conservatively uses Li et al.'s aggregate former-smoker HR of 1.41 for every category below 15 years. At 15+ years it uses 1.10. The finer answers are retained so the model can be updated if stronger category-specific evidence becomes available.

Sources: [Li et al., 2018](https://pmc.ncbi.nlm.nih.gov/articles/PMC6207481/); [Thomson et al., 2022](https://pmc.ncbi.nlm.nih.gov/articles/PMC9593233/)

### BMI

BMI is calculated as `weight(lb) × 703 / height(in)^2`. Li et al. table 2 reports HRs of 1.06 for BMI 18.5–22.9, 1.00 for 23–24.9, 1.05 for 25–29.9, 1.25 for 30–34.9, and 1.67 for 35+. Li et al. excluded BMI below 18.5; for that range the model uses the independently published HR of 1.51 from the Global BMI Mortality Collaboration's primary analysis.

Sources: [Li et al., 2018](https://pmc.ncbi.nlm.nih.gov/articles/PMC6207481/); [Global BMI Mortality Collaboration, 2016](https://pmc.ncbi.nlm.nih.gov/articles/PMC4995441/)

### Moderate-to-vigorous physical activity

Li et al. table 2 reports HRs by hours per week: 1.00 at zero, 0.65 at 0.1–0.9, 0.56 at 1.0–3.4, 0.50 at 3.5–5.9, and 0.44 at 6+. Questionnaire minute brackets map in order to those published categories. The 150-minute boundary intentionally aligns with public-health guidance; the mapping is conservative near bracket boundaries.

Source: [Li et al., 2018](https://pmc.ncbi.nlm.nih.gov/articles/PMC6207481/)

### Alcohol

One standard drink is modeled as 14 grams. Weekly drinks are converted to grams per day. Li et al. table 2 reports HRs of 1.27 for zero, 1.03 for 1–4.9 g/day, 1.00 for 5–14.9, 0.99 for 15–29.9, and 1.25 for 30+. Because the study's low-risk definition ends at 15 g/day for women, women at 15 g/day or above use 1.25. This calculator does not recommend starting alcohol use; the association is observational and may contain residual confounding.

Source: [Li et al., 2018](https://pmc.ncbi.nlm.nih.gov/articles/PMC6207481/)

### Sleep duration

The cited dose-response meta-analysis found the lowest risk around seven hours, RR 1.06 per hour below seven, and RR 1.13 per hour above seven. Questionnaire mappings are 1.13, 1.10, 1.06, 1.00, 1.13, and 1.28 across `<5`, `5–<6`, `6–<7`, `7–8`, `>8–9`, and `>9` hours. Long-duration values use representative points within the selected brackets and remain deliberately conservative.

Source: [Yin et al., 2017](https://pmc.ncbi.nlm.nih.gov/articles/PMC5634263/)

## Range and “Add years”

The displayed likely range is the interval between the ages at which adjusted life-table survival falls to 75% and 25%. It describes population-level dispersion, not an individual confidence interval.

Each “Add years” value changes only one factor to its lowest-risk measured category, holds the other four constant, recomputes the life table, and reports the difference. The calculator never divides the combined 12.2/14.0-year finding among habits.

## Intentionally excluded from the number

Diet, broader nicotine use, social connection, purpose, stress regulation, strength, sedentary time, chronic conditions, preventive care, family history, blood pressure, cholesterol, and glucose remain in the six-pillar guidance but do not alter LIFE expectancy. The current questions do not reproduce exposure definitions with sufficiently direct published factor estimates for this lean model.

## Data handling and previous results

Answers remain in the browser's session storage under a versioned key and are sent only when a participant explicitly requests an emailed report. Version 1 progress is ignored rather than silently recalculated. Version 1 result pages were never persisted, so an already-open result remains visible only until it is refreshed; a new submission is required for the version 2 estimate.

## Limitations

The sources are observational, self-reported inputs may be imprecise, and an individual may differ substantially from population averages. The model does not account for every clinical, genetic, environmental, or socioeconomic factor. Rounded results should be used as an invitation to improve modifiable habits, never as a guarantee.
