import React, { useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import { Outlet, Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import ModalLogin from '../Components/Molecules/LoginMolecules/ModalLogin';

export const useSession = () => {
   const session = localStorage.getItem("accessToken");
   const [decodedSession, setDecodedSession] = React.useState(session ? jwtDecode(session) : null);
   const [showModal, setShowModal] = React.useState(!session);
   const [isAuthenticated, setIsAuthenticated] = React.useState(!!session);

   useEffect(() => {
      if (!session) {
         setShowModal(true);
         setIsAuthenticated(false);
      } else {
         setIsAuthenticated(true);
         setDecodedSession(jwtDecode(session));
      }
   }, [session]); 

   return { decodedSession, showModal, setShowModal, isAuthenticated };
};


const ProtectedRoutes = () => {
   const navigate = useNavigate();
   const { isAuthenticated, showModal, setShowModal } = useSession();

   useEffect(() => {
      const checkAuth = async () => {
         try {
            if (!isAuthenticated) {
               setShowModal(true); 
            }
         } catch (error) {
            console.error("Error checking authentication:", error);
            setShowModal(true); 
         }
      };

      checkAuth();
   }, [isAuthenticated]);

   return isAuthenticated ? <Outlet /> : <ModalLogin show={showModal} handleLoginSuccess={() => navigate('/main-dashboard')} onClose={() => navigate('/')}/>;
};


export default ProtectedRoutes;
