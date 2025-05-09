import { useState } from 'react';
import { Search, Plus, Filter, Archive, Package, AlertTriangle, MoreVertical } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const InventoryManagement = () => {
  const [activeTab, setActiveTab] = useState('all');
  const navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useState(null);
  const [showEditPopup, setShowEditPopup] = useState(false);
  const [showMorePopup, setShowMorePopup] = useState(false);

  const inventoryItems = [
    { id: 1, name: 'Syringes', category: 'Medical Supplies', quantity: 500, unit: 'units', lowStockThreshold: 100 },
    { id: 2, name: 'Bandages', category: 'Medical Supplies', quantity: 250, unit: 'rolls', lowStockThreshold: 50 },
    { id: 3, name: 'Amoxicillin', category: 'Medications', quantity: 100, unit: 'tablets', lowStockThreshold: 20 },
    { id: 4, name: 'Ibuprofen', category: 'Medications', quantity: 75, unit: 'tablets', lowStockThreshold: 15 },
  ];

  const filteredItems = activeTab === 'all'
    ? inventoryItems
    : inventoryItems.filter(item => {
      if (activeTab === 'lowstock') {
        return item.quantity <= item.lowStockThreshold;
      }
      return true;
    });

  const handleAddItem = () => {
    navigate('/inventory/add');
  };

  const handleEditItem = (id: number) => {
    setSelectedItem(inventoryItems.find(item => item.id === id));
    setShowEditPopup(true);
  };

  const handleMoreActions = (id: number) => {
    setSelectedItem(inventoryItems.find(item => item.id === id));
    setShowMorePopup(true);
  };

  const closePopup = () => {
    setShowEditPopup(false);
    setShowMorePopup(false);
    setSelectedItem(null);
  };
  
  return (
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-gray-800 dark:text-white">Inventory Management</h1>
          <p className="text-gray-600 dark:text-gray-300">Track medical supplies and equipment</p>
        </div>
        <div className="mt-4 md:mt-0">
          <button
            className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            onClick={handleAddItem}
          >
            <Plus className="h-5 w-5 mr-2" />
            Add Item
          </button>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm mb-6">
        <div className="p-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="relative md:w-96">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Search inventory..."
              />
            </div>
            <div className="flex mt-4 md:mt-0">
              <button className="flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </button>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-t border-gray-200 dark:border-gray-700">
          <nav className="flex overflow-x-auto">
            {['All', 'Medical Supplies', 'Medications', 'Low Stock'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab.toLowerCase().replace(' ', ''))}
                className={`px-4 py-4 text-sm font-medium whitespace-nowrap ${
                  activeTab === tab.toLowerCase().replace(' ', '')
                    ? 'border-b-2 border-blue-500 text-blue-600 dark:text-blue-400'
                    : 'text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Inventory List */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Item
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Category
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Quantity
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
              {filteredItems.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                        <Package className="h-6 w-6 text-blue-600 dark:text-blue-300" />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900 dark:text-white">
                          {item.name}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    {item.category}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    {item.quantity} {item.unit}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {item.quantity <= item.lowStockThreshold ? (
                      <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
                        <AlertTriangle className="w-4 h-4 mr-1" />
                        Low Stock
                      </span>
                    ) : (
                      <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                        In Stock
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button
                      className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300 mr-3"
                      onClick={() => handleEditItem(item.id)}
                    >
                      Edit
                    </button>
                    <button
                      className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
                      onClick={() => handleMoreActions(item.id)}
                    >
                      More
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Edit Popup */}
      {showEditPopup && selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-600 bg-opacity-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden w-full max-w-md">
            <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">Edit Item</h3>
            </div>
            <div className="p-4">
              <div className="mb-4">
                <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="editName">
                  Item Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-700 dark:border-gray-500"
                  id="editName"
                  type="text"
                  value={selectedItem.name}
                  readOnly
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="editQuantity">
                  Quantity
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-700 dark:border-gray-500"
                  id="editQuantity"
                  type="number"
                  value={selectedItem.quantity}
                  readOnly
                />
              </div>
            </div>
            <div className="px-6 py-3 bg-gray-50 dark:bg-gray-700 text-right">
              <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
                onClick={closePopup}
              >
                Save
              </button>
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={closePopup}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* More Actions Popup */}
      {showMorePopup && selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-600 bg-opacity-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden w-full max-w-md">
            <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">More Actions</h3>
            </div>
            <div className="p-4">
              <div className="flex justify-between">
                <button 
                  className="px-4 py-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
                >
                  View Details
                </button>
                <button 
                  className="px-4 py-2 text-sm font-medium text-red-600 dark:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
                >
                  Remove Item
                </button>
              </div>
            </div>
            <div className="px-6 py-3 bg-gray-50 dark:bg-gray-700 text-right">
              <button
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={closePopup}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InventoryManagement;
