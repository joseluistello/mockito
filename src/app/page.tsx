import Image from "next/image";

export default function Component() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="max-w-md w-full bg-white dark:bg-gray-950 rounded-lg shadow-lg p-6 space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold">Cambio de Contraseña</h2>
          <p className="text-gray-500 dark:text-gray-400">
            Por favor, ingresa tu contraseña actual y una nueva contraseña para prevenir un ataque.
          </p>
        </div>
        <form className="space-y-4">
          <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="current-password">
              Contraseña Actual
            </label>
            <input
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200"
              id="current-password"
              placeholder="Ingresa tu contraseña actual"
              type="password"
            />
          </div>
          <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="new-password">
              Nueva Contraseña
            </label>
            <input
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200"
              id="new-password"
              placeholder="Ingresa tu nueva contraseña"
              type="password"
            />
          </div>
          <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="confirm-password">
              Confirmar Contraseña
            </label>
            <input
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200"
              id="confirm-password"
              placeholder="Confirma tu nueva contraseña"
              type="password"
            />
          </div>
          <button
            className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-600"
            type="submit"
          >
            Cambiar Contraseña
          </button>
        </form>
      </div>
    </div>
  )
}
