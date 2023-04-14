import { OutlinedInputProps, TextField, TextFieldProps, alpha, styled } from "@mui/material";

export const RedditTextField = styled((props: TextFieldProps) => (
    <TextField
      InputProps={{ disableUnderline: true } as Partial<OutlinedInputProps>}
      {...props}
    />
  ))(({ theme }) => ({
    "& .MuiInputLabel-shrink":{
        color:theme.palette.primary.main,
        '&.Mui-error': {
            color:theme.palette.error.main
        },
    },
    '& .MuiFilledInput-root': {
      border: "1px solid",
      borderColor: theme.palette.mode==="dark" ? "transparent" : "#cecfd1",
      overflow: 'hidden',
      borderRadius: 4,
      backgroundColor: theme.palette.mode==="dark" ? "#1f242b" : "#ffffff",
      transition:"background-color .5s,box-shadow .5s,border .5s",
      '&:hover': {
        backgroundColor: 'transparent',
        borderColor: theme.palette.mode==="light" ? "#090e16" :  "#cecfd1" ,
      },
      '&.Mui-focused': {
        backgroundColor: 'transparent',
        boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
        borderColor: theme.palette.primary.main,
      },
      '&.Mui-error': {
        backgroundColor: 'transparent',
        borderColor: theme.palette.error.main,
      },
      
    },
  }));