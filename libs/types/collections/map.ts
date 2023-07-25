export interface CoreMapProps {
  visitedCountries: string[]
  setVisitedCountries: React.Dispatch<React.SetStateAction<string[]>>
  transitedCountries: string[]
  setTransitedCountries: React.Dispatch<React.SetStateAction<string[]>>
}
