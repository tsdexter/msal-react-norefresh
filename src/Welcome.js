import { AuthenticatedTemplate, UnauthenticatedTemplate } from '@azure/msal-react';
import React, { useEffect } from 'react';
import { AuthButton } from './AuthButton';
import { useMsal } from '@azure/msal-react';

export default function Welcome(props) {
  const [username, setUsername] = React.useState('')
  const [name, setName] = React.useState('')
  const { instance } = useMsal();

  // console.log({ instance, username, name })
  useEffect(() => {
    const user = instance.getActiveAccount()
    // console.log(user)
    if (user) {
      setUsername(user.username)
      setName(user.name)
    }
  }, [instance])


  return (
    <>
      <AuthenticatedTemplate>
        {/* <Calendar /> */}
        <div>
          <h4>Welcome {name}!</h4>
        </div>
      </AuthenticatedTemplate>
      <UnauthenticatedTemplate>
        {/* <AuthButton /> */}
      </UnauthenticatedTemplate>
    </>
  )
}