import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserPlus, ArrowLeft } from 'lucide-react';

const NewUserRegistration = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'doctor',
    phoneNumber: '',
    emergencyContactName: '',
    emergencyContactNumber: '',
    address: '',
    licenseNumber: '',
    specialization: '',
    yearsOfExperience: '',
    professionalMemberships: '',
    defaultWorkingDays: '',
    shiftPreferences: '',
    specificPermissions: '',
    twoFactorAuthPreference: 'email',
    dateOfBirth: '',
    gender: '',
    profilePicture: '',
    employeeId: '',
    hireDate: '',
    contractType: 'full-time',
    completedTrainingPrograms: '',
    certifications: '',
    notes: '',
    status: 'active',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    navigate('/users');
  };

  const isDoctorOrNurse = formData.role === 'doctor' || formData.role === 'nurse';

  return (
    <div className="container mx-auto">
      <button
        onClick={() => navigate('/users')}
        className="flex items-center mb-4 text-blue-600 hover:text-blue-800"
      >
        <ArrowLeft className="w-5 h-5 mr-1" />
        Back to User Management
      </button>
      <div className="bg-white shadow rounded lg:px-8 pt-6 pb-8 mb-4">
        <div className="text-gray-700 mb-4 flex items-center justify-center">
          <UserPlus className="inline w-5 h-5 mr-2" />
          <h3 className="text-xl font-bold inline">Register New User</h3>
        </div>
        <form onSubmit={handleSubmit} className="w-full max-w-2xl px-4">
          <div className="flex flex-wrap -mx-3 mb-6">
            {/* Left Column */}
            <div className="w-full md:w-1/2 px-3">
              <h4 className="text-lg font-semibold mt-4 mb-2 text-gray-700 dark:text-gray-300">Basic Information</h4>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                  Password
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Password"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="role">
                  Role
                </label>
                <select
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                >
                  <option value="doctor">Doctor</option>
                  <option value="nurse">Nurse</option>
                  <option value="admin">Admin</option>
                  <option value="receptionist">Receptionist</option>
                  <option value="lab_assistant">Lab Assistant</option>
                </select>
              </div>
              {isDoctorOrNurse && (
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="department">
                    Department
                  </label>
                  <select
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="department"
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                  >
                    <option value="">Select Department</option>
                    <option value="cardiology">Cardiology</option>
                    <option value="neurology">Neurology</option>
                    <option value="orthopedics">Orthopedics</option>
                    <option value="pediatrics">Pediatrics</option>
                    <option value="oncology">Oncology</option>
                    <option value="emergency">Emergency</option>
                  </select>
                </div>
              )}

              {/* Contact Information */}
              <h4 className="text-lg font-semibold mt-4 mb-2 text-gray-700 dark:text-gray-300">Contact Information</h4>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phoneNumber">
                  Phone Number
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="phoneNumber"
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="Phone Number"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="emergencyContactName">
                  Emergency Contact Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="emergencyContactName"
                  type="text"
                  name="emergencyContactName"
                  value={formData.emergencyContactName}
                  onChange={handleChange}
                  placeholder="Emergency Contact Name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="emergencyContactNumber">
                  Emergency Contact Number
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="emergencyContactNumber"
                  type="tel"
                  name="emergencyContactNumber"
                  value={formData.emergencyContactNumber}
                  onChange={handleChange}
                  placeholder="Emergency Contact Number"
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="w-full md:w-1/2 px-3">
              {/* Professional Details */}
              <h4 className="text-lg font-semibold mt-4 mb-2 text-gray-700 dark:text-gray-300">Professional Details</h4>
              {isDoctorOrNurse && (
                <>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="licenseNumber">
                      License Number
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="licenseNumber"
                      type="text"
                      name="licenseNumber"
                      value={formData.licenseNumber}
                      onChange={handleChange}
                      placeholder="License Number"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="specialization">
                      Specialization
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="specialization"
                      type="text"
                      name="specialization"
                      value={formData.specialization}
                      onChange={handleChange}
                      placeholder="Specialization"
                    />
                  </div>
                </>
              )}
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="yearsOfExperience">
                  Years of Experience
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="yearsOfExperience"
                  type="number"
                  name="yearsOfExperience"
                  value={formData.yearsOfExperience}
                  onChange={handleChange}
                  placeholder="Years of Experience"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="professionalMemberships">
                  Professional Memberships
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="professionalMemberships"
                  type="text"
                  name="professionalMemberships"
                  value={formData.professionalMemberships}
                  onChange={handleChange}
                  placeholder="Professional Memberships"
                />
              </div>

              {/* Work Schedule */}
              <h4 className="text-lg font-semibold mt-4 mb-2 text-gray-700 dark:text-gray-300">Work Schedule</h4>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="defaultWorkingDays">
                  Default Working Days
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="defaultWorkingDays"
                  type="text"
                  name="defaultWorkingDays"
                  value={formData.defaultWorkingDays}
                  onChange={handleChange}
                  placeholder="e.g., Mon-Fri"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="shiftPreferences">
                  Shift Preferences
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="shiftPreferences"
                  type="text"
                  name="shiftPreferences"
                  value={formData.shiftPreferences}
                  onChange={handleChange}
                  placeholder="e.g., Morning, Evening"
                />
              </div>
            </div>
          </div>

          {/* Security & Access */}
          <h4 className="text-lg font-semibold mt-4 mb-2 text-gray-700 dark:text-gray-300">Security & Access</h4>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="specificPermissions">
                  Specific Permissions
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="specificPermissions"
                  type="text"
                  name="specificPermissions"
                  value={formData.specificPermissions}
                  onChange={handleChange}
                  placeholder="e.g., access to billing, edit patients"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 px-3">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="twoFactorAuthPreference">
                  Two-Factor Auth Preference
                </label>
                <select
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="twoFactorAuthPreference"
                  name="twoFactorAuthPreference"
                  value={formData.twoFactorAuthPreference}
                  onChange={handleChange}
                >
                  <option value="email">Email</option>
                  <option value="sms">SMS</option>
                </select>
              </div>
            </div>
          </div>

          {/* Personal Information */}
          <h4 className="text-lg font-semibold mt-4 mb-2 text-gray-700 dark:text-gray-300">Personal Information</h4>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dateOfBirth">
                  Date of Birth
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="dateOfBirth"
                  type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 px-3">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="gender">
                  Gender
                </label>
                <select
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
          </div>
          <div className="mb-4 px-3">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
              Address
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="address"
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Address"
            />
          </div>
          <div className="mb-4 px-3">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="profilePicture">
              Profile Picture URL
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="profilePicture"
              type="url"
              name="profilePicture"
              value={formData.profilePicture}
              onChange={handleChange}
              placeholder="Profile Picture URL"
            />
          </div>

          {/* Employment Details */}
          <h4 className="text-lg font-semibold mt-4 mb-2 text-gray-700 dark:text-gray-300 px-3">Employment Details</h4>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="employeeId">
                  Employee ID
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="employeeId"
                  type="text"
                  name="employeeId"
                  value={formData.employeeId}
                  onChange={handleChange}
                  placeholder="Employee ID"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 px-3">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="hireDate">
                  Hire Date
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="hireDate"
                  type="date"
                  name="hireDate"
                  value={formData.hireDate}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="mb-4 px-3">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contractType">
              Contract Type
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="contractType"
              name="contractType"
              value={formData.contractType}
              onChange={handleChange}
            >
              <option value="full-time">Full-Time</option>
              <option value="part-time">Part-Time</option>
              <option value="contract">Contract</option>
            </select>
          </div>

          {/* Training & Certifications */}
          <h4 className="text-lg font-semibold mt-4 mb-2 text-gray-700 dark:text-gray-300 px-3">Training & Certifications</h4>
          <div className="mb-4 px-3">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="completedTrainingPrograms">
              Completed Training Programs
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="completedTrainingPrograms"
              name="completedTrainingPrograms"
              value={formData.completedTrainingPrograms}
              onChange={handleChange}
              placeholder="List completed training programs"
            />
          </div>
          <div className="mb-4 px-3">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="certifications">
              Certifications
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="certifications"
              type="text"
              name="certifications"
              value={formData.certifications}
              onChange={handleChange}
              placeholder="e.g., BLS, ACLS"
            />
          </div>

          {/* Notes */}
          <h4 className="text-lg font-semibold mt-4 mb-2 text-gray-700 dark:text-gray-300 px-3">Notes</h4>
          <div className="mb-6 px-3">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="notes">
              Notes
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="notes"
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              placeholder="Any relevant notes or comments"
            />
          </div>

          <div className="flex items-center justify-center w-full">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Register User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewUserRegistration;
