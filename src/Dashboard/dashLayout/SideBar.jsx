import React, { useState, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { 
  ChevronDown, ChevronLeft, ChevronRight, Search, Home, MessageSquare, Phone, Users, 
  CreditCard, Settings, Send, FileText, Clock, BarChart2, FileCode, PlusCircle, 
  Upload, UserPlus, DollarSign, RefreshCw, List
} from 'lucide-react';

const navItems = [
  { name: 'Dashboard', icon: Home, path: '/dash' },
  { 
    name: 'SMS', 
    icon: MessageSquare, 
    path: '/dash/send-sms',
    subItems: [
      { name: 'Sent', icon: Send, path: '/sms/sent' },
      { name: 'Drafts', icon: FileText, path: '/sms/drafts' },
      { name: 'Scheduled', icon: Clock, path: '/sms/scheduled' },
      { name: 'Delivery Reports', icon: BarChart2, path: '/sms/reports' },
      { name: 'Templates', icon: FileCode, path: '/sms/templates' },
    ]
  },
  { 
    name: 'Voice Calls', 
    icon: Phone, 
    path: '/dash/voice-campaign',
    subItems: [
      { name: 'Sent', icon: Send, path: '/voice/sent' },
      { name: 'Drafts', icon: FileText, path: '/voice/drafts' },
      { name: 'Scheduled', icon: Clock, path: '/voice/scheduled' },
      { name: 'Delivery Reports', icon: BarChart2, path: '/voice/reports' },
      { name: 'Templates', icon: FileCode, path: '/voice/templates' },
    ]
  },
  { 
    name: 'Contacts', 
    icon: Users, 
    path: '/dash/contacts',
    subItems: [
      { name: 'New Contacts', icon: PlusCircle, path: '/dash/contacts/new-contacts'},
      { name: 'Imports', icon: Upload, path: '/dash/contacts/imports'},
      { name: 'Groups', icon: UserPlus, path: '/dash/contacts/groups'},
      { name: 'Registered Numbers', icon: List, path: '/dash/contacts/registered-numbers'},
    ]
  },
  { 
    name: 'Credits Management', 
    icon: CreditCard, 
    path: '/dash/credit-management',
    subItems: [
      { name: 'Buy Credits', icon: DollarSign, path: '/credits/buy' },
      { name: 'Transfer Credits', icon: RefreshCw, path: '/credits/transfer' },
      { name: 'Credit Transactions', icon: List, path: '/credits/transactions' },
    ]
  },
  { name: 'Settings', icon: Settings, path: '/dash/settings' },
];

export const Sidebar = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [expandedItem, setExpandedItem] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleSidebar = () => setIsSidebarCollapsed(!isSidebarCollapsed);

  const toggleExpand = useCallback((itemName) => {
    setExpandedItem(prev => prev === itemName ? null : itemName);
  }, []);

  const handleNavigation = useCallback((item) => {
    if (!item.subItems) {
      navigate(item.path);
      // setExpandedItem(null); // Collapse others when navigating to a single page
    } else {
      navigate(item.path);
      toggleExpand(item.name);
    }
  }, [navigate, toggleExpand]);

  const isActive = useCallback((path) => location.pathname === path, [location]);
  const isExpanded = useCallback((itemName) => expandedItem === itemName, [expandedItem]);

  return (
    <aside className={`bg-white h-screen overflow-y-auto transition-all duration-300 ease-in-out ${
      isSidebarCollapsed ? 'w-16' : 'w-64'
    }`}>
      <div className="flex items-center justify-between p-4 border-b">
        <span className={`text-2xl font-bold text-[#f15c22] ${isSidebarCollapsed ? 'hidden' : 'block'}`}>SMS&VOICE</span>
        {/* <button onClick={toggleSidebar} className="text-gray-500 hover:text-[#f15c22]">
          {isSidebarCollapsed ? <ChevronRight className="w-6 h-6" /> : <ChevronLeft className="w-6 h-6" />}
        </button> */}
      </div>
      <div className="p-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#f15c22]"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
      </div>
      <nav className="mt-4">
        {navItems.map((item) => (
          <SidebarLink
            key={item.name}
            item={item}
            collapsed={isSidebarCollapsed}
            active={isActive(item.path)}
            isExpanded={isExpanded(item.name)}
            onItemClick={handleNavigation}
            onExpandToggle={toggleExpand}
          />
        ))}
      </nav>
    </aside>
  );
};

const SidebarLink = ({ 
  item, 
  collapsed, 
  active, 
  isExpanded, 
  onItemClick, 
  onExpandToggle 
}) => {
  const Icon = item.icon;
  const location = useLocation();

  const handleClick = () => {
    onItemClick(item);
  };

  const isSubItemActive = (subItem) => location.pathname === subItem.path;

  return (
    <div className='my-2 md:my4 lg:my-6'>
      <button
        onClick={handleClick}
        className={`flex items-center w-full px-4 py-2 text-left transition-colors duration-200 ${
          active || isExpanded ? 'bg-[#f15c22] text-white' : 'text-gray-700 hover:bg-gray-100 hover:text-[#f15c22]'
        }`}
      >
        <Icon className={`h-5 w-5 ${collapsed ? 'mx-auto' : 'mr-4'}`} />
          <>
            <span>{item.name}</span>
            {item.subItems && (
              <ChevronDown className={`ml-auto h-4 w-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
            )}
          </>
      </button>
      {item.subItems && isExpanded && (
        <div className="ml-4 mt-2 md:mt-3">
          {item.subItems.map((subItem) => (
            <button 
              key={subItem.name}
              onClick={() => onItemClick(subItem)}
              className={`flex items-center w-full px-4 py-2 text-sm transition-colors duration-200 ${
                isSubItemActive(subItem)
                  ? 'text-[#f15c22] font-medium bg-gray-100'
                  : 'text-gray-600 hover:text-[#f15c22] hover:bg-gray-50'
              }`}
            >
              <subItem.icon className="h-4 w-4 mr-3" />
              <span>{subItem.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Sidebar;
