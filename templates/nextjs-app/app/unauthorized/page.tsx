import { Button } from 'hpm-ui/components'

export default function Unauthorized () {
  return (
    <div className="h-screen w-full bg-blue-10 flex items-center justify-center">
      <div className="text-center">
        <span className="text-2xl block">No tienes permisos para ver esta página</span>
        <a href="https://serviceportqa1.azurewebsites.net">
          <Button className="mt-5">
            Volver a SMARTPORT
          </Button>
        </a>
      </div>
    </div>
  )
}
