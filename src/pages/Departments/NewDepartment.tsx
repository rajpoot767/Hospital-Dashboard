import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Building2, ArrowLeft } from 'lucide-react';

const NewDepartment = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    head: '',
    imageId: '',
    doctors: '',
    nurses: '',
    rooms: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    imageId: '',
    head: '',
    doctors: '',
    nurses: '',
    rooms: '',
  });

  // Mock doctor data - replace with actual data fetching from your API/database
  const doctors = [
    { id: '1', name: 'Dr. John Smith' },
    { id: '2', name: 'Dr. Alice Johnson' },
    { id: '3', name: 'Dr. Michael Brown' },
    { id: '4', name: 'Dr. Emily Davis' },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
    // Clear error when the user types
    setErrors(prevErrors => ({ ...prevErrors, [name]: '' }));
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };

    if (!formData.name.trim()) {
      newErrors.name = 'Department Name is required';
      isValid = false;
    }

    if (formData.imageId && !isValidImageUrl(formData.imageId)) {
      newErrors.imageId = 'Invalid Image URL format';
      isValid = false;
    }

    if (!formData.head.trim()) {
      newErrors.head = 'Head of Department is required';
      isValid = false;
    }

    if (!formData.doctors.trim()) {
      newErrors.doctors = 'Number of Doctors is required';
      isValid = false;
    }

    if (!formData.nurses.trim()) {
      newErrors.nurses = 'Number of Nurses is required';
      isValid = false;
    }

    if (!formData.rooms.trim()) {
      newErrors.rooms = 'Number of Rooms is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const isValidImageUrl = (url: string) => {
    try {
      new URL(url);
      return true;
    } catch (e) {
      return false;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle form submission here (e.g., API call)
      console.log('New Department Form Data:', formData);
      navigate('/departments');
    } else {
      console.log('Form has errors. Please correct them.');
    }
  };

  return (
    <div className="container mx-auto">
      <button
        onClick={() => navigate('/departments')}
        className="flex items-center mb-4 text-blue-600 hover:text-blue-800"
      >
        <ArrowLeft className="w-5 h-5 mr-1" />
        Back to Departments
      </button>
      <div className="bg-white shadow rounded lg:px-8 pt-6 pb-8 mb-4 flex flex-col items-center">
        <div className="text-gray-700 mb-4">
          <Building2 className="inline w-5 h-5 mr-2" />
          <h3 className="text-xl font-bold inline">Add New Department</h3>
        </div>
        <form onSubmit={handleSubmit} className="w-full max-w-md">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Department Name
            </label>
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.name ? 'border-red-500' : ''}`}
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Department Name"
              required
            />
            {errors.name && <p className="text-red-500 text-xs italic">{errors.name}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
              Description
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Description"
              rows={3}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="head">
              Head of Department
            </label>
            <select
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.head ? 'border-red-500' : ''}`}
              id="head"
              name="head"
              value={formData.head}
              onChange={handleChange}
            >
              <option value="">Select Head of Department</option>
              {doctors.map(doctor => (
                <option key={doctor.id} value={doctor.id}>{doctor.name}</option>
              ))}
            </select>
            {errors.head && <p className="text-red-500 text-xs italic">{errors.head}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="imageId">
              Image URL
            </label>
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.imageId ? 'border-red-500' : ''}`}
              id="imageId"
              type="url"
              name="imageId"
              value={formData.imageId}
              onChange={handleChange}
              placeholder="Image URL"
            />
            {errors.imageId && <p className="text-red-500 text-xs italic">{errors.imageId}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="doctors">
              Number of Doctors
            </label>
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.doctors ? 'border-red-500' : ''}`}
              id="doctors"
              type="number"
              name="doctors"
              value={formData.doctors}
              onChange={handleChange}
              placeholder="Number of Doctors"
            />
            {errors.doctors && <p className="text-red-500 text-xs italic">{errors.doctors}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nurses">
              Number of Nurses
            </label>
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.nurses ? 'border-red-500' : ''}`}
              id="nurses"
              type="number"
              name="nurses"
              value={formData.nurses}
              onChange={handleChange}
              placeholder="Number of Nurses"
            />
            {errors.nurses && <p className="text-red-500 text-xs italic">{errors.nurses}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="rooms">
              Number of Rooms
            </label>
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.rooms ? 'border-red-500' : ''}`}
              id="rooms"
              type="number"
              name="rooms"
              value={formData.rooms}
              onChange={handleChange}
              placeholder="Number of Rooms"
            />
            {errors.rooms && <p className="text-red-500 text-xs italic">{errors.rooms}</p>}
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Add Department
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewDepartment;
