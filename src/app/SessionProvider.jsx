'use client';
import { SessionProvider as Provider } from 'next-auth/react';


export default function SessionProvider({children}: Props) {
  Props = {
    children: React.ReactNode
  }
  return (
    <Provider>
      {children}
    </Provider>
  )
}