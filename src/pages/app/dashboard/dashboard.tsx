import { Helmet } from 'react-helmet-async'

import { DayOrdersAmountCard } from './day-orders-amound-card.tsx'
import { MonthCanceledOrdersAmountCard } from './month-canceled-orders-amount-card.tsx'
import { MonthOrdersAmountCard } from './month-orders-amount-card.tsx'
import { MonthRevenueCard } from './month-revenue-card'
import { PopularProductsChart } from './popular-products-chart.tsx'
import { RevenueChart } from './revenue-chart.tsx'

export function Dashboard() {
  return (
    <>
      <Helmet title="Dashboard" />

      <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>

      <div className="grid grid-cols-4 gap-4">
        <MonthRevenueCard />
        <MonthOrdersAmountCard />
        <DayOrdersAmountCard />
        <MonthCanceledOrdersAmountCard />
      </div>

      <div className="grid grid-cols-9 gap-4">
        <RevenueChart />
        <PopularProductsChart />
      </div>
    </>
  )
}
