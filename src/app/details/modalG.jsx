'use client'
import { useEffect, useState } from "react";
import { auth, db, getDocs, collection } from '../FireBaseConfig'
import { signOut } from "firebase/auth";
const ModalG = ({ isOpen, onClose }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
    
        const unsubscribe = auth.onAuthStateChanged(user => {
            setUser(user);
        });
        return () => unsubscribe();
    }, []);

    useEffect(() => {
        if (isOpen) {
            const timer = setTimeout(() => {
                onClose();
            }, 15000);

            return () => clearTimeout(timer);
        }
    }, [isOpen, onClose]);

    if (!isOpen) return null;


    const handleSignOut = async () => { 
        try {
            await signOut(auth);
            window.location.href='/signin'
        } catch (error) {
            console.error('xato111');
        }
    };
    
    
        return (
            <div className='back_modal_container' onClick={onClose}>
            <div className='modal_container' onClick={(e) => e.stopPropagation()}>
                <button onClick={onClose} className="modal_close">Close</button>
                    <>
                            <div>
                                <img src={user.photoURL} alt="" />
                                <h1>{user.displayName}</h1>
                                <h1>{user.email}</h1>
                            </div>
                            <button onClick={handleSignOut} className='modal_signOut'>Sign Out</button>
                    </>
            </div>
        </div>
        )
      };

export default ModalG;
