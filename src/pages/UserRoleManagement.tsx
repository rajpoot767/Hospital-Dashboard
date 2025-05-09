import React, { useState } from 'react';
import { Plus, Edit, Trash2, User, Check, X, ListChecks, FileText } from 'lucide-react';

const UserRoleManagement = () => {
  const [roles, setRoles] = useState([
    { id: 1, name: 'Admin', permissions: ['Read', 'Write', 'Delete', 'Manage Users', 'Manage Roles'] },
    { id: 2, name: 'Doctor', permissions: ['Read', 'Write'] },
    { id: 3, name: 'Nurse', permissions: ['Read', 'Write'] },
    { id: 4, name: 'Receptionist', permissions: ['Read'] },
  ]);

  const [users, setUsers] = useState([
    { id: 1, name: 'John Smith', role: 'Admin', activeSessions: 1 },
    { id: 2, name: 'Alice Johnson', role: 'Doctor', activeSessions: 0 },
    { id: 3, name: 'Michael Brown', role: 'Nurse', activeSessions: 0 },
    { id: 4, name: 'Emily Davis', role: 'Receptionist', activeSessions: 0 },
  ]);

  const [activeSessions, setActiveSessions] = useState([
    { userId: 1, sessionId: 'session1', userName: 'John Smith', loginTime: '2024-05-20 10:00' },
  ]);

  const [newRole, setNewRole] = useState({ name: '', permissions: [] });
  const [showAddRolePopup, setShowAddRolePopup] = useState(false);
  const [selectedRole, setSelectedRole] = useState(null);
  const [showEditRolePopup, setShowEditRolePopup] = useState(false);

  const handleAddRoleClick = () => {
    setShowAddRolePopup(true);
  };

  const closeAddRolePopup = () => {
    setShowAddRolePopup(false);
    setNewRole({ name: '', permissions: [] });
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setNewRole({ ...newRole, [name]: value });
  };

  const handlePermissionChange = (permission: string) => {
    if (newRole.permissions.includes(permission)) {
      setNewRole({ ...newRole, permissions: newRole.permissions.filter(p => p !== permission) });
    } else {
      setNewRole({ ...newRole, permissions: [...newRole.permissions, permission] });
    }
  };

  const handleSaveRole = () => {
    const nextId = roles.length > 0 ? Math.max(...roles.map(r => r.id)) + 1 : 1;
    const newRoleWithId = { ...newRole, id: nextId };
    setRoles([...roles, newRoleWithId]);
    closeAddRolePopup();
  };

  const handleEditRoleClick = (id: number) => {
    const roleToEdit = roles.find(role => role.id === id);
    setSelectedRole(roleToEdit);
    setShowEditRolePopup(true);
  };

  const closeEditRolePopup = () => {
    setShowEditRolePopup(false);
    setSelectedRole(null);
  };

  const handleUpdateRole = () => {
    const updatedRoles = roles.map(role => {
      if (role.id === selectedRole.id) {
        return { ...selectedRole };
      }
      return role;
    });
    setRoles(updatedRoles);
    closeEditRolePopup();
  };

  const handleDeleteRole = (id: number) => {
    setRoles(roles.filter(role => role.id !== id));
  };

  const handleTerminateSession = (sessionId: string) => {
    setActiveSessions(activeSessions.filter(session => session.sessionId !== sessionId));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">User Role Management</h1>

      {/* User Role Definition */}
      <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-200">User Role Definition</h2>
          <button
            className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            onClick={handleAddRoleClick}
          >
            <Plus className="h-5 w-5 mr-2" />
            Add Role
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Role Name
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Permissions
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
              {roles.map((role) => (
                <tr key={role.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    {role.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    {role.permissions.join(', ')}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button
                      className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300 mr-3"
                      onClick={() => handleEditRoleClick(role.id)}
                    >
                      <Edit className="h-5 w-5" />
                    </button>
                    <button
                      className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300"
                      onClick={() => handleDeleteRole(role.id)}
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* User Assignment to Roles */}
      <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-4">User Assignment to Roles</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  User Name
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Role
                </th>
                <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Active Sessions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    {user.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    {user.role}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-500 dark:text-gray-400">
                    {user.activeSessions}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Session Management */}
      <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-4">Session Management</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  User Name
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Login Time
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
              {activeSessions.map((session) => (
                <tr key={session.sessionId} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    {session.userName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    {session.loginTime}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button
                      className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300"
                      onClick={() => handleTerminateSession(session.sessionId)}
                    >
                      Terminate
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Add Role Popup */}
      {showAddRolePopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-600 bg-opacity-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden w-full max-w-md">
            <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">Add New Role</h3>
            </div>
            <div className="p-6">
              <div className="mb-4">
                <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="name">
                  Role Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-700 dark:border-gray-500"
                  id="name"
                  type="text"
                  name="name"
                  value={newRole.name}
                  onChange={handleInputChange}
                  placeholder="Role Name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
                  Permissions
                </label>
                <div className="flex flex-wrap">
                  {['Read', 'Write', 'Delete', 'Manage Users', 'Manage Roles'].map((permission) => (
                    <label key={permission} className="inline-flex items-center mr-4">
                      <input
                        type="checkbox"
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-offset-gray-800"
                        value={permission}
                        checked={newRole.permissions.includes(permission)}
                        onChange={() => handlePermissionChange(permission)}
                      />
                      <span className="ml-2 text-gray-700 dark:text-gray-300">{permission}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
            <div className="px-6 py-3 bg-gray-50 dark:bg-gray-700 text-right">
              <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
                onClick={handleSaveRole}
              >
                Save
              </button>
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={closeAddRolePopup}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Role Popup */}
      {showEditRolePopup && selectedRole && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-600 bg-opacity-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden w-full max-w-md">
            <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">Edit Role</h3>
            </div>
            <div className="p-6">
              <div className="mb-4">
                <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="name">
                  Role Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-700 dark:border-gray-500"
                  id="name"
                  type="text"
                  name="name"
                  value={selectedRole.name}
                  onChange={(e) => setSelectedRole({ ...selectedRole, name: e.target.value })}
                  placeholder="Role Name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
                  Permissions
                </label>
                <div className="flex flex-wrap">
                  {['Read', 'Write', 'Delete', 'Manage Users', 'Manage Roles'].map((permission) => (
                    <label key={permission} className="inline-flex items-center mr-4">
                      <input
                        type="checkbox"
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-offset-gray-800"
                        value={permission}
                        checked={selectedRole.permissions.includes(permission)}
                        onChange={() => {
                          if (selectedRole.permissions.includes(permission)) {
                            setSelectedRole({ ...selectedRole, permissions: selectedRole.permissions.filter(p => p !== permission) });
                          } else {
                            setSelectedRole({ ...selectedRole, permissions: [...selectedRole.permissions, permission] });
                          }
                        }}
                      />
                      <span className="ml-2 text-gray-700 dark:text-gray-300">{permission}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
            <div className="px-6 py-3 bg-gray-50 dark:bg-gray-700 text-right">
              <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
                onClick={handleUpdateRole}
              >
                Update
              </button>
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={closeEditRolePopup}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserRoleManagement;
