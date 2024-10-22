import { Bell, ChevronDown, Settings} from 'lucide-react'

function Notifications() {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h1 className="text-2xl font-semibold text-gray-900 mb-6">Notifications</h1>
          <ul className="divide-y divide-gray-200">
            <li className="py-4">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <span className="h-8 w-8 rounded-full bg-[#f15c22] flex items-center justify-center text-white">
                    <Bell className="h-5 w-5" />
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">New campaign started</p>
                  <p className="text-sm text-gray-500">Your SMS campaign "Summer Sale" has begun.</p>
                </div>
                <div className="flex-shrink-0 text-sm text-gray-400">2h ago</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    )
  }

  export default Notifications;

// Importing necessary components from the library