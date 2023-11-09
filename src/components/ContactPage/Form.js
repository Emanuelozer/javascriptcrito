import React, { useState } from 'react';

const Form = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [messageSent, setMessageSent] = useState('');


  const handleChange = (e) => {
    switch (e.target.name) {
      case 'firstName':
        setFirstName(e.target.value);
        break;
      case 'email':
        setEmail(e.target.value);
        break;
      case 'message':
        setMessage(e.target.value);
        break;
      default:
        break;
    }
  };

  const validateRequired = (value) => {
    return value.trim() !== '';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setMessageSent('');

    if (!validateRequired(firstName) || !validateRequired(email) || !validateRequired(message)) {
        clearForm();
        setErrorMessage('Please fill in all fields.');
        return;
    }

    const user = { Name: firstName, email, message };

    const json = JSON.stringify(user);

    const result = await fetch ("https://win23-assignment.azurewebsites.net/api/contactform", {
      method: 'post',
      headers: {
        'Content-type': 'application/json',
      },
      body: json,
    });

    clearForm();

    switch (result.status) {
      case 200:
        clearForm();
        setMessageSent('Message sent');
        console.log('200')
        break;
      case 400:
        clearForm();
        setErrorMessage('Message not sent, something went wrong!');
        console.log('400')
        break;
      default:
        clearForm();
        setErrorMessage('Unexpected error occurred.');
        break;
    }
  };

  const clearForm = () => {
    setFirstName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div>
      <div className="container message-container">
        <h2>Leave us a message <br /> for any information.</h2>
        <p className="errorMessage">{errorMessage}</p>
        <p className="messageSent">{messageSent}</p>

        <div className="message-box">
          <form noValidate onSubmit={handleSubmit} id="contactForm" method="post">
            
            <input type="text" name="firstName"  value={firstName} onChange={(e) => handleChange(e)} id="inputName" placeholder="Name&#42;" required/>

            <input type="email" name="email" value={email} onChange={(e) => handleChange(e)} id="inputEmail" placeholder="Email&#42;" required/>

            <textarea id="textareaMessage" name="message" value={message} onChange={(e) => handleChange(e)} placeholder="Your Message&#42;" required ></textarea>

            <button type="submit" className="btn-yellow">Send Message <i className="fa-regular fa-arrow-up-right"></i></button>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;













// import React, { useState} from 'react'; 

// const Form = () => {

// const [firstName, setFirstName] = useState('')
// const [email, setEmail] = useState('')
// const [message, setMessage] = useState('')
// const [errorMessage, setErrorMessage] = useState('')

// const handleChange = (e) => {
//     console.log(e.target.type)

//     switch (e.target.name) {
//         case 'firstName':
//             setFirstName(e.target.value)
//             break
//         case 'email':
//             setEmail(e.target.value)
//             break
//         case 'message':
//             setMessage(e.target.value)
//             break
//     }
// }




// const handleSubmit = async (e) => {

//     e.preventDefault()
//     setErrorMessage('')

//     const user = {firstName, email, message}

//     const json = JSON.stringify(user)

//     const result = await fetch('https://win23-assignment.azurewebsites.net/api/contactform',{

//         method: 'post',
//         headers: {
//             'content-type': 'application/json'
//         },

//         body: json
//     })
    
//     clearForm()

//     switch (result.status){
//         case 200:
//             clearForm()
//             alert('Message sent')
//             break
//         case 400:
//             setErrorMessage('Messasge not sent, something went wrong!')
//             break
//     }

    
// }


//     const clearForm = () => {
//         setFirstName('')
//         setEmail('')
//         setMessage('')
//     }

//     const validateLength = (value) => {
//         if (value.length > 2)
//             return true
//         return false 
//     }


//     return (

//     <div>
//         <div className="container message-container">
//             <h2>Leave us a message <br/> for any information.</h2>
//             <p className="errorMessage">{errorMessage}</p>
//             <div className="message-box">
//                 <form noValidate onSubmit={handleSubmit}  id="contactForm" method="post">
                    
//                     <input type="text" name="firstName" value={firstName} onChange={(e) => handleChange(e)} id="inputName" placeholder="Name&#42;"/>

//                     <input type="email" name="email" value={email} onChange={(e) => handleChange(e)} id="inputEmail"  placeholder="Email&#42;"/>

//                     <textarea id="textareaMessage" name="message"  value={message} onChange={(e) => handleChange(e)} placeholder="Your Message&#42;"></textarea>

//                     <button type="submit" className="btn-yellow">Send Message <i className="fa-regular fa-arrow-up-right"></i></button>

//                 </form>
//             </div>
//         </div>
//     </div>

//   )
// }

// export default Form






