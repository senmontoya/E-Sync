import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = React.memo(() => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [dobError, setDobError] = useState('');
  const [isValidDate, setIsValidDate] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  const navigate = useNavigate();

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const validateDob = (date) => {
    const today = new Date();
    const birthDate = new Date(date);
    
    if (birthDate > today) {
      setDobError('La fecha de nacimiento no puede ser en el futuro.');
      setIsValidDate(false);
      return false;
    }
    
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    const dayDifference = today.getDate() - birthDate.getDate();
    
    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
      age--;
    }
    
    if (age < 18) {
      setDobError('Debes tener al menos 18 años.');
      setIsValidDate(false);
      return false;
    }

    setDobError('');
    setIsValidDate(true);
    return true;
  };
  return (
    <>
      <style>
        {`
          @keyframes fadeOut {
            0% {
              opacity: 1;
            }
            100% {
              opacity: 0;
            }
          }
          
          .fade-out {
            animation: fadeOut 0.5s forwards;
          }
        `}
      </style>
      <div className={`flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 ${isAnimating ? 'fade-out' : ''}`}>
        <div aria-hidden="true" className="fixed inset-0 -z-10 bg-gradient-to-tr from-[#1F647C] to-[#a93226] backdrop-blur-md content-fade-in" />
        <div className="relative w-full max-w-sm mx-auto">
          <div
            style={{
              width: '100%',
              height: '400px',
              perspective: '1000px',
            }}
          >
            <div
              style={{
                width: '100%',
                height: '100%',
                transition: 'transform 0.7s',
                transformStyle: 'preserve-3d',
                position: 'relative',
                transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
              }}
            >
              {/* Front Side - Sign In */}
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  backfaceVisibility: 'hidden',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  padding: '20px',
                  boxSizing: 'border-box',
                }}
              >
                <div className="text-center">
                  <img
                    alt="E-SYNC Logo"
                    src="/E-Sync/LG-E-SYNC.png"
                    className="mx-auto h-20 w-auto"
                  />
                </div>
                <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 mt-6">
                  Inicia sesión en tu cuenta
                </h2>
                <form className="space-y-6 mt-6">
                  <div>
                    <label htmlFor="email" className="block text-left text-sm font-medium leading-6 text-gray-900">
                      Correo Electrónico
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between">
                      <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                        Contraseña
                      </label>
                      <div className="text-sm">
                        <a href="#" className="font-semibold text-custom-red hover:text-custom-red-dark">
                          ¿Olvidaste tu contraseña?
                        </a>
                      </div>
                    </div>
                    <div className="mt-2">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        required
                        autoComplete="current-password"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div>
                      <Link
                        to='/feed'
                        className={`flex w-full justify-center rounded-md bg-custom-yellow px-3 py-1.5 text-sm font-semibold leading-6 text-gray-900 shadow-sm hover:bg-custom-yellow-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${isAnimating ? 'opacity-0' : ''}`}
                      >
                        Iniciar Sesión
                      </Link>
                  </div>
                </form>

                <p className="mt-10 text-center text-sm text-black">
                  ¿No tienes una cuenta?{' '}
                  <button
                    onClick={handleFlip}
                    className="font-semibold leading-6 text-custom-red hover:text-custom-red-dark"
                  >
                    Regístrate ahora
                  </button>
                </p>
              </div>

              {/* Back Side - Sign Up */}
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  backfaceVisibility: 'hidden',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  transform: 'rotateY(180deg)',
                  padding: '20px',
                  boxSizing: 'border-box',
                }}
              >
                <div className="text-center">
                  <img
                    alt="E-SYNC Logo"
                    src="/E-Sync/LG-E-SYNC.png"
                    className="mx-auto h-20 w-auto"
                  />
                </div>
                <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 mt-6">
                  Crea una cuenta nueva
                </h2>
                <form className="space-y-6 mt-6">
                  <div>
                    <label htmlFor="username" className="block text-left text-sm font-medium leading-6 text-gray-900">
                      Nombre de Usuario
                    </label>
                    <div className="mt-2">
                      <input
                        id="username"
                        name="username"
                        type="text"
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="name" className="block text-left text-sm font-medium leading-6 text-gray-900">
                      Nombre Completo
                    </label>
                    <div className="mt-2">
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-left text-sm font-medium leading-6 text-gray-900">
                      Dirección de Correo
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="dob" className="block text-left text-sm font-medium leading-6 text-gray-900">
                      Fecha de Nacimiento
                    </label>
                    <div className="mt-2">
                      <input
                        id="dob"
                        name="dob"
                        type="date"
                        onChange={(e) => validateDob(e.target.value)}
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                      />
                    </div>
                    {dobError && <p className="text-red-500 text-sm mt-2">{dobError}</p>}
                  </div>

                  <div>
                    <Link
                      type="submit"
                      className="flex w-full justify-center rounded-md bg-custom-yellow px-3 py-1.5 text-sm font-semibold leading-6 text-gray-900 shadow-sm hover:bg-custom-yellow-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Registrarse
                    </Link>
                  </div>
                </form>

                <p className="mt-10 text-center text-sm text-black">
                  ¿Ya tienes una cuenta?{' '}
                  <button
                    onClick={handleFlip}
                    className="font-semibold leading-6 text-custom-red hover:text-custom-red-dark"
                  >
                    Inicia sesión
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

export default Login;
