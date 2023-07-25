export interface AccountBalanceCardProps {
  balanceCard: {
    balance: string
    currency: string
    icon: JSX.Element
  }
  onClick: () => any
}
