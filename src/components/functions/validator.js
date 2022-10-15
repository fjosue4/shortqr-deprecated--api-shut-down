import toast from 'react-hot-toast';

export function linkValidator(urlString) {  
    try { 
      return Boolean(new URL(urlString)); 
  }
  catch(e){ 
      return false; 
  }
  }

export const notify = () => toast.error('Your URL should start with http(s)...', {
    duration: 8000,
    style: {
      borderRadius: '40px',
      padding: '16px',
      backgroundColor: '#ED5353',
      color: '#fff',
    },
    iconTheme: {
      primary: '#374248',
      secondary: '#FFFAEE',
    },
  });

export const notifyTimeout = () => toast.error('Server is overloaded, please wait...', {
    duration: 18000,
    style: {
      borderRadius: '40px',
      padding: '16px',
      backgroundColor: '#ED5353',
      color: '#fff',
    },
    iconTheme: {
      primary: '#374248',
      secondary: '#FFFAEE',
    },
  });

export const copiedToClipboard = () => toast.success('Link copied to clipboard!', {
    duration: 8000,
    style: {
      borderRadius: '40px',
      padding: '16px',
      backgroundColor: '#408140',
      color: '#fff',
    },
    iconTheme: {
      primary: '#fff',
      secondary: '#408140',
    },
  });