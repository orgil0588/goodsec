import ReportDetail from "./ReportDetails"

const FinanceReport = ({ data }) => {
  console.log(data.report[0])
  // relative overflow-auto
  return (
    <div className="relative overflow-auto scrollbar h-full text-xs md:text-sm lg:text-base">
      <div style={{ minWidth: 560 }} className="grid grid-cols-3 ">
        <div className="grid grid-row-6 text-primary-black font-medium">
          <div className="py-4 text-primary-gray">МНТ</div>
          <div className="py-4 ">Эргэлтийн хөрөнгө</div>
          <div className="py-4 ">Эргэлтийн бус хөрөнгө</div>
          <div className="py-4 ">Нийт хөрөнгө</div>
          <div className="py-4 ">Богино хугацааны өр төлбөр</div>
          <div className="py-4 ">Урт хугацааны өр төлбөр</div>
          <div className="py-4 ">Нийт өр төлбөр</div>
          <div className="py-4 ">Эздийн өмч</div>
          <div className="py-4 ">Борлуулалтын орлого</div>
          <div className="py-4 ">Борлуулалтын өртөг</div>
          <div className="py-4 ">Нийт ашиг (алдагдал)</div>
          <div className="py-4 ">Бусад орлого</div>
          <div className="py-4 ">Зардлын дүн</div>
          <div className="py-4 ">Олз гарз</div>
          <div className="py-4 ">Бусад ашиг алдагдал</div>
          <div className="py-4 ">Орлогын татварын зардал</div>
          <div className="py-4 ">Тайлант үеийн цэвэр ашиг</div>
        </div>
        <div className="col-span-2">
          {data.report.map((element) => {
            return (
              <div className="grid grid-row-6 text-primary-black font-medium">
                <div className="grid grid-cols-5 text-right text-primary-gray py-4">
                  <div className="px-2">2017</div>
                  <div className="px-2">2018</div>
                  <div className="px-2">2019</div>
                  <div className="px-2">2020</div>
                  <div className="px-2">2021</div>
                </div>
                <ReportDetail element={element.amount_current_assets} />
                <ReportDetail element={element.amount_non_current_assets} />
                <ReportDetail element={element.total_assets} />
                <ReportDetail element={element.short_term_liabilities} />
                <ReportDetail element={element.long_term_liabilities} />
                <ReportDetail element={element.total_liabilities} />
                <ReportDetail element={element.ownership_amount} />
                <ReportDetail element={element.sales_reveneu} />
                <ReportDetail element={element.cost_sales} />
                <ReportDetail element={element.total_profit_loss} />
                <ReportDetail
                  element={element.other_income_rigths_interest_rent_dividends}
                />
                <ReportDetail element={element.cost_amount} />
                <ReportDetail element={element.gain_loss} />
                <ReportDetail element={element.other_gain_loss} />
                <ReportDetail element={element.income_tax_expense} />
                <ReportDetail element={element.net_profit_loss_for_period} />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default FinanceReport
