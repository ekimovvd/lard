export interface TariffCardParams {
  image: string
  title: string
  text: string
  buttonText: string
  view: string
}

export interface SecurityCardParams {
  title: string
  description: string
  tooltipTitle: string
  tooltipText: string
}

export interface FeatureCardParams {
  image: string
  title: string
  firstText: string
  secondText: string
  texts: string[]
  view: string
}
