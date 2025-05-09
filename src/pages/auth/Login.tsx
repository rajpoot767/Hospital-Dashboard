import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Smartphone, PlusCircle, ArrowRight } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { useTheme } from '../../contexts/ThemeContext';
import { Moon } from './Moon';
import { Sun } from './Sun';

const Login = () => {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();
  const { 
    sendOTP, 
    login, 
    authError, 
    pendingVerification, 
    identifier, 
    isEmail,
    setIdentifier,
    setIsEmail,
    setPendingVerification
  } = useAuth();
  
  const [otp, setOtp] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [otpError, setOtpError] = useState<string | null>(null);

  const handleSendOTP = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!identifier.trim()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      await sendOTP(identifier, isEmail);
      // OTP sent successfully
    } catch (error) {
      console.error('Error sending OTP:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleVerifyOTP = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!otp.trim()) {
      setOtpError('Please enter the OTP');
      return;
    }
    
    setIsSubmitting(true);
    setOtpError(null);
    
    try {
      await login(otp);
      navigate('/');
    } catch (error) {
      console.error('Error verifying OTP:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResendOTP = async () => {
    try {
      await sendOTP(identifier, isEmail);
      // Resent OTP successfully
    } catch (error) {
      console.error('Error resending OTP:', error);
    }
  };

  const handleGoBack = () => {
    setPendingVerification(false);
    setOtp('');
  };

  return (
    <div className="flex items-center min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Theme toggle button */}
      <button
        className="absolute top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        onClick={toggleTheme}
        aria-label="Toggle Dark Mode"
      >
        {theme === 'dark' ? (
          <Sun className="h-5 w-5" />
        ) : (
          <Moon className="h-5 w-5" />
        )}
      </button>

      <div className="flex-1 h-full max-w-md mx-auto overflow-hidden bg-white dark:bg-gray-800 rounded-lg shadow-xl">
        <div className="flex flex-col overflow-y-auto">
          <div className="flex items-center justify-center p-6">
            <PlusCircle className="h-10 w-10 text-blue-600" />
            <h1 className="ml-2 text-2xl font-semibold text-gray-700 dark:text-white">
              MediCare
            </h1>
          </div>
          <div className="p-6">
            <h2 className="text-xl font-semibold text-center text-gray-700 dark:text-gray-200">
              {pendingVerification ? 'Verify OTP' : 'Sign in to your account'}
            </h2>
            <p className="mt-1 text-center text-gray-500 dark:text-gray-400">
              {pendingVerification 
                ? `We've sent a verification code to ${isEmail ? 'your email' : 'your phone'}`
                : 'Please sign in using your email or phone number'}
            </p>

            {!pendingVerification ? (
              <form onSubmit={handleSendOTP} className="mt-6">
                {/* Login method toggle */}
                <div className="flex mb-4 bg-gray-100 dark:bg-gray-700 rounded-lg p-1">
                  <button
                    type="button"
                    className={`flex-1 py-2 text-sm font-medium rounded-md ${
                      isEmail
                        ? 'bg-white dark:bg-gray-800 text-gray-800 dark:text-white shadow-sm'
                        : 'text-gray-600 dark:text-gray-300'
                    }`}
                    onClick={() => setIsEmail(true)}
                  >
                    <span className="flex items-center justify-center">
                      <Mail className="w-4 h-4 mr-2" />
                      Email
                    </span>
                  </button>
                  <button
                    type="button"
                    className={`flex-1 py-2 text-sm font-medium rounded-md ${
                      !isEmail
                        ? 'bg-white dark:bg-gray-800 text-gray-800 dark:text-white shadow-sm'
                        : 'text-gray-600 dark:text-gray-300'
                    }`}
                    onClick={() => setIsEmail(false)}
                  >
                    <span className="flex items-center justify-center">
                      <Smartphone className="w-4 h-4 mr-2" />
                      Phone
                    </span>
                  </button>
                </div>

                {/* Input field */}
                <label className="block mt-4 text-sm">
                  <span className="text-gray-700 dark:text-gray-400">
                    {isEmail ? 'Email' : 'Phone Number'}
                  </span>
                  <div className="relative mt-1">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                      {isEmail ? (
                        <Mail className="w-5 h-5 text-gray-400" />
                      ) : (
                        <Smartphone className="w-5 h-5 text-gray-400" />
                      )}
                    </div>
                    <input
                      className="w-full pl-10 pr-4 py-2 text-sm text-gray-700 border-gray-300 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:focus:border-blue-300"
                      placeholder={isEmail ? 'your-email@example.com' : '+1234567890'}
                      type={isEmail ? 'email' : 'tel'}
                      value={identifier}
                      onChange={(e) => setIdentifier(e.target.value)}
                      required
                    />
                  </div>
                </label>

                {authError && (
                  <p className="mt-2 text-sm text-red-600 dark:text-red-400">
                    {authError}
                  </p>
                )}

                <button
                  type="submit"
                  className="flex items-center justify-center w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg active:bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  disabled={isSubmitting || !identifier.trim()}
                >
                  <span>Send OTP</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </form>
            ) : (
              <form onSubmit={handleVerifyOTP} className="mt-6">
                <label className="block text-sm">
                  <span className="text-gray-700 dark:text-gray-400">
                    Enter OTP
                  </span>
                  <input
                    className="block w-full mt-1 px-4 py-2 text-sm text-gray-700 border-gray-300 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:focus:border-blue-300"
                    placeholder="123456"
                    type="text"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    maxLength={6}
                    required
                  />
                </label>

                {(otpError || authError) && (
                  <p className="mt-2 text-sm text-red-600 dark:text-red-400">
                    {otpError || authError}
                  </p>
                )}

                <div className="flex items-center justify-between mt-4">
                  <button
                    type="button"
                    onClick={handleResendOTP}
                    className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Resend OTP
                  </button>
                  <button
                    type="button"
                    onClick={handleGoBack}
                    className="text-sm text-gray-600 dark:text-gray-400 hover:underline"
                  >
                    Change {isEmail ? 'Email' : 'Phone'}
                  </button>
                </div>

                <button
                  type="submit"
                  className="w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg active:bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  disabled={isSubmitting || !otp.trim()}
                >
                  Verify & Sign In
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
