import { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (otp: string) => Promise<void>;
  sendOTP: (identifier: string, isEmail: boolean) => Promise<void>;
  logout: () => void;
  authError: string | null;
  pendingVerification: boolean;
  identifier: string;
  isEmail: boolean;
  setIdentifier: (value: string) => void;
  setIsEmail: (value: boolean) => void;
  setPendingVerification: (value: boolean) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState<string | null>(null);
  const [pendingVerification, setPendingVerification] = useState(false);
  const [identifier, setIdentifier] = useState('');
  const [isEmail, setIsEmail] = useState(true);

  useEffect(() => {
    // Check for existing session
    const checkAuth = async () => {
      try {
        // In a real app, verify with backend
        const savedUser = localStorage.getItem('user');
        if (savedUser) {
          setUser(JSON.parse(savedUser));
        }
      } catch (error) {
        setUser(null);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

  const sendOTP = async (identifier: string, isEmail: boolean) => {
    setAuthError(null);
    try {
      // In a real app, make API call to send OTP
      console.log(`Sending OTP to ${identifier} via ${isEmail ? 'email' : 'phone'}`);
      setPendingVerification(true);
      return Promise.resolve();
    } catch (error) {
      setAuthError('Failed to send OTP. Please try again.');
      return Promise.reject(error);
    }
  };

  const login = async (otp: string) => {
    setAuthError(null);
    try {
      // In a real app, verify OTP with backend
      // Mocking successful authentication for demo
      if (otp === '123456') {
        const mockUser = {
          id: '1',
          name: 'Dr. John Doe',
          email: isEmail ? identifier : 'john.doe@hospital.com',
          role: 'doctor'
        };
        setUser(mockUser);
        localStorage.setItem('user', JSON.stringify(mockUser));
        setPendingVerification(false);
        return Promise.resolve();
      } else {
        setAuthError('Invalid OTP. Please try again.');
        return Promise.reject(new Error('Invalid OTP'));
      }
    } catch (error) {
      setAuthError('Authentication failed. Please try again.');
      return Promise.reject(error);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        sendOTP,
        logout,
        authError,
        pendingVerification,
        identifier,
        isEmail,
        setIdentifier,
        setIsEmail,
        setPendingVerification
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
