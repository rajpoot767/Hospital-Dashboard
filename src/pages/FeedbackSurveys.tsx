import React, { useState, useEffect } from 'react';
    import { Plus, Edit, Trash2, FileText, CheckCircle, XCircle } from 'lucide-react';

    const FeedbackSurveys = () => {
      const [surveys, setSurveys] = useState([
        {
          id: 1,
          title: 'Patient Satisfaction Survey',
          description: 'Measure overall patient satisfaction with our services.',
          questions: [
            'How satisfied were you with the care you received?',
            'How likely are you to recommend our hospital to others?',
          ],
          status: 'Active',
        },
        {
          id: 2,
          title: 'Doctor Consultation Feedback',
          description: 'Gather feedback on doctor consultations.',
          questions: [
            'How well did the doctor explain your condition?',
            'Did you feel heard and understood by the doctor?',
          ],
          status: 'Inactive',
        },
      ]);

      const [feedbackSubmissions, setFeedbackSubmissions] = useState([
        {
          id: 1,
          surveyId: 1,
          patientName: 'John Smith',
          submissionDate: '2024-05-21',
          answers: ['Very satisfied', 'Likely'],
        },
        {
          id: 2,
          surveyId: 2,
          patientName: 'Alice Johnson',
          submissionDate: '2024-05-20',
          answers: ['Explained well', 'Yes'],
        },
      ]);

      const [showAddSurveyPopup, setShowAddSurveyPopup] = useState(false);
      const [newSurvey, setNewSurvey] = useState({
        title: '',
        description: '',
        questions: [''],
        status: 'Active',
      });

      const [selectedSurvey, setSelectedSurvey] = useState(null);
      const [showEditSurveyPopup, setShowEditSurveyPopup] = useState(false);

      const handleAddSurveyClick = () => {
        setShowAddSurveyPopup(true);
      };

      const closeAddSurveyPopup = () => {
        setShowAddSurveyPopup(false);
        setNewSurvey({
          title: '',
          description: '',
          questions: [''],
          status: 'Active',
        });
      };

      const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        setNewSurvey({ ...newSurvey, [name]: value });
      };

      const handleQuestionChange = (index: number, value: string) => {
        const updatedQuestions = [...newSurvey.questions];
        updatedQuestions[index] = value;
        setNewSurvey({ ...newSurvey, questions: updatedQuestions });
      };

      const handleAddQuestion = () => {
        setNewSurvey({ ...newSurvey, questions: [...newSurvey.questions, ''] });
      };

      const handleSaveSurvey = () => {
        const nextId = surveys.length > 0 ? Math.max(...surveys.map(s => s.id)) + 1 : 1;
        const newSurveyWithId = { ...newSurvey, id: nextId };
        setSurveys([...surveys, newSurveyWithId]);
        closeAddSurveyPopup();
      };

      const handleEditSurveyClick = (id: number) => {
        const surveyToEdit = surveys.find(survey => survey.id === id);
        setSelectedSurvey(surveyToEdit);
        setShowEditSurveyPopup(true);
      };

      const closeEditSurveyPopup = () => {
        setShowEditSurveyPopup(false);
        setSelectedSurvey(null);
      };

      const handleUpdateSurvey = () => {
        const updatedSurveys = surveys.map(survey => {
          if (survey.id === selectedSurvey.id) {
            return { ...selectedSurvey };
          }
          return survey;
        });
        setSurveys(updatedSurveys);
        closeEditSurveyPopup();
      };

      const handleDeleteSurvey = (id: number) => {
        setSurveys(surveys.filter(survey => survey.id !== id));
      };

      return (
        <div className="container mx-auto p-4">
          <h1 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">Feedback &amp; Surveys</h1>

          {/* Survey Management */}
          <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-200">Survey Management</h2>
              <button
                className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                onClick={handleAddSurveyClick}
              >
                <Plus className="h-5 w-5 mr-2" />
                Add Survey
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-gray-700">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                    >
                      Title
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                    >
                      Description
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                    >
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                  {surveys.map((survey) => (
                    <tr key={survey.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                        {survey.title}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                        {survey.description}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                        {survey.status}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button
                          className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300 mr-3"
                          onClick={() => handleEditSurveyClick(survey.id)}
                        >
                          <Edit className="h-5 w-5" />
                        </button>
                        <button
                          className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300"
                          onClick={() => handleDeleteSurvey(survey.id)}
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

          {/* Feedback Submissions */}
          <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-4">Feedback Submissions</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-gray-700">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                    >
                      Patient Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                    >
                      Survey Title
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                    >
                      Submission Date
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                    >
                      Answers
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                  {feedbackSubmissions.map((submission) => {
                    const survey = surveys.find(s => s.id === submission.surveyId);
                    return (
                      <tr key={submission.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                          {submission.patientName}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                          {survey ? survey.title : 'Unknown'}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                          {submission.submissionDate}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                          <ul className="list-disc list-inside">
                            {submission.answers.map((answer, index) => (
                              <li key={index}>{answer}</li>
                            ))}
                          </ul>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </section>

          {/* Add Survey Popup */}
          {showAddSurveyPopup && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-600 bg-opacity-50">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden w-full max-w-md">
                <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">Add New Survey</h3>
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="title">
                      Title
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-700 dark:border-gray-500"
                      id="title"
                      type="text"
                      name="title"
                      value={newSurvey.title}
                      onChange={handleInputChange}
                      placeholder="Survey Title"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="description">
                      Description
                    </label>
                    <textarea
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-700 dark:border-gray-500"
                      id="description"
                      name="description"
                      value={newSurvey.description}
                      onChange={handleInputChange}
                      placeholder="Survey Description"
                      rows={3}
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
                      Questions
                    </label>
                    {newSurvey.questions.map((question, index) => (
                      <div key={index} className="mb-2">
                        <input
                          type="text"
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-700 dark:border-gray-500"
                          placeholder={`Question ${index + 1}`}
                          value={question}
                          onChange={(e) => handleQuestionChange(index, e.target.value)}
                        />
                      </div>
                    ))}
                    <button
                      className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300"
                      onClick={handleAddQuestion}
                    >
                      Add Question
                    </button>
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="status">
                      Status
                    </label>
                    <select
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-700 dark:border-gray-500"
                      id="status"
                      name="status"
                      value={newSurvey.status}
                      onChange={handleInputChange}
                    >
                      <option value="Active">Active</option>
                      <option value="Inactive">Inactive</option>
                    </select>
                  </div>
                </div>
                <div className="px-6 py-3 bg-gray-50 dark:bg-gray-700 text-right">
                  <button
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
                    onClick={handleSaveSurvey}
                  >
                    Save
                  </button>
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    onClick={closeAddSurveyPopup}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Edit Survey Popup */}
          {showEditSurveyPopup && selectedSurvey && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-600 bg-opacity-50">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden w-full max-w-md">
                <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">Edit Survey</h3>
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="title">
                      Title
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-700 dark:border-gray-500"
                      id="title"
                      type="text"
                      name="title"
                      value={selectedSurvey.title}
                      onChange={(e) => setSelectedSurvey({ ...selectedSurvey, title: e.target.value })}
                      placeholder="Survey Title"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="description">
                      Description
                    </label>
                    <textarea
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-700 dark:border-gray-500"
                      id="description"
                      name="description"
                      value={selectedSurvey.description}
                      onChange={(e) => setSelectedSurvey({ ...selectedSurvey, description: e.target.value })}
                      placeholder="Survey Description"
                      rows={3}
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="status">
                      Status
                    </label>
                    <select
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-700 dark:border-gray-500"
                      id="status"
                      name="status"
                      value={selectedSurvey.status}
                      onChange={(e) => setSelectedSurvey({ ...selectedSurvey, status: e.target.value })}
                    >
                      <option value="Active">Active</option>
                      <option value="Inactive">Inactive</option>
                    </select>
                  </div>
                </div>
                <div className="px-6 py-3 bg-gray-50 dark:bg-gray-700 text-right">
                  <button
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
                    onClick={handleUpdateSurvey}
                  >
                    Update
                  </button>
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    onClick={closeEditSurveyPopup}
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

    export default FeedbackSurveys;
