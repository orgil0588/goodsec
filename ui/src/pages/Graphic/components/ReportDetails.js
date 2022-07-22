const ReportDetail = ({ element }) => {
  return (
    <div className="grid grid-cols-5 text-right border-t py-4">
      {element.map((el) => {
        return (
          <div className="px-2">
            {
              el !== 0 ? <>
              {(el / 1000000000)
                .toString()
                .slice(0, (el / 1000000000).toString().indexOf(".") + 3)} <span className="text-primary-gray text-xs">тэр</span>
              </> : '-'
            }
          </div>
        )
      })}
    </div>
  )
}

export default ReportDetail
