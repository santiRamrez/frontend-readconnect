import { useState } from 'react';

import TextField from '@mui/material/TextField';

 const Input = ({
  size = '',
  name = '',
  label = '',
  helpText = '',
  value = (f) => f,
}) => {

  const [data, setData] = useState({
    value: '',
    error: false,
    msg: helpText,
  });


  const handleChange = (e) => {
    setData((prev) => {
        return {
        ...prev,
        value: e.target.value,
      };
    });

    checkError(e.target.value);
    value({ name, value: e.target.value });
  };

  const checkError = (val) => {
    const regex = /^\w{5,}/
    try {
        if (regex.test(val) === false) {
            setData((prev) => {
              const obj = {
                ...prev,
                error: true,
              };
              return obj
            });
            
          } else {
            setData((prev) => {
                const obj = {
                ...prev,
                error: false,
              };
              return obj
            });
          }
    }catch(err) {
        console.log(err)
    }
    
  };

  return (
    <TextField
      size={size}
      name={name}
      label={label}
      onChange={handleChange}
      error={data.error}
      helperText={data.error ? data.msg : ''}
    />
  );
};

export default Input