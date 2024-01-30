export default async function AuthLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className="main main-container-layout">
      <div className="side-bar">
        sidebar
      </div>
      <div className="page-content-container pl-10 pr-7 pt-5 pb-2 h-screen w-full overflow-x-hidden overflow-y-scroll">
        {children}
      </div>
    </div>
  )
}
