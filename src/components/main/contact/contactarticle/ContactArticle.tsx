import LoadingButton from "@mui/lab/LoadingButton";
import {
  Grid,
  Stack,
  Typography,
  FormControl,
  FormHelperText,
} from "@mui/material";
import { toast } from "react-toastify";
import { contactImage } from "../../../../assets/images";
import { InfoBox } from "../../../../theme/Muicomponents/InfoBox";
import { RedditTextField } from "../../../../theme/Muicomponents/RedditTextField";
import { useFormik } from "formik";
import { useState, useRef } from "react";
import { BsPinMap } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { object, string } from "yup";
import {Infobox} from "../../../../interfaces";
import axios from "axios"
import { myFormValues, formProps } from "../../../../interfaces";


export const ContactArticle = () => {
  const contactInfoBoxes: Infobox[] = [
    {
      icon: <BsPinMap />,
      title: "Adress",
      body: "Bizerte, Tunisie",
    },
    {
      icon: <FiPhoneCall color="primary" />,
      title: "Phone",
      body: "(+216) 56 439 910",
    },
    {
      icon: <HiOutlineMail />,
      title: "Email",
      body: "ghaithsaidani18@gmail.com",
    },
  ];
  const initialvalues: myFormValues = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };
  const validationschema = object({
    name: string().required("you need to enter your name"),
    email: string()
      .email("invalid email")
      .required("You need to enter you email"),
    subject: string().required("you need to enter a subject"),
    message: string()
      .required("You need to enter a message")
      .min(20, "Message is too Short"),
  });
  const [loading, setLoading] = useState(false);
  const form = useRef<HTMLFormElement>(null);

  const { values, handleSubmit, handleChange, errors, resetForm, touched } =
    useFormik({
      initialValues: initialvalues,
      validateOnChange: true,
      validateOnBlur: false,
      validationSchema: validationschema,
      onSubmit: (values) => {
         setLoading(true);
          try {
            axios
              .post(`https://3.65.0.20:8000/api/email`, values,{headers: { 'Content-Type': 'application/json'}})
              .then((response) => {
                setLoading(false);
                toast.success(response.data.message);
                if (response.data.success) {
                  resetForm()
                }
              });
          } catch (err: unknown) {
            setLoading(false);
            resetForm();
            toast.error("Error sending message"); 
          }
      },
    });

  const forms: formProps[] = [
    {
      id: "name",
      label: "Name",
      type: "name",
      value: values.name,
      error: touched.name && Boolean(errors.name),
      errorText: errors.name,
    },
    {
      id: "email",
      label: "Email",
      type: "email",
      value: values.email,
      error: touched.email && Boolean(errors.email),
      errorText: errors.email,
    },
    {
      id: "subject",
      label: "Subject",
      type: "text",
      value: values.subject,
      error: touched.subject && Boolean(errors.subject),
      errorText: errors.subject,
    },
    {
      id: "message",
      label: "Message",
      type: "text",
      value: values.message,
      error: touched.message && Boolean(errors.message),
      errorText: errors.message,
    },
  ];

  return (
    <article>
      <Grid container justifyContent={"center"} gap={{ md: "15%" }}>
        <Grid item xs={12} md={5}>
          <Stack
            alignItems={"center"}
            justifyContent={{ md: "space-between" }}
            height={"100%"}
          >
            <Stack>
              <Typography textAlign={"start"} width={"100%"} variant="h4">
                Let&apos;s talk business
              </Typography>
              <Typography textAlign={"start"} color={"text.secondary"}>
                Now that you know a lot about me, let me know if you are
                interested to work with me.
              </Typography>
            </Stack>
            <img src={contactImage} alt="contact illustration" />
          </Stack>
        </Grid>
        <Grid item xs={12} md={4}>
          <form
            onSubmit={handleSubmit}
            ref={form}
            noValidate
            className="flex flex-1 flex-col"
          >
            {forms.map((form) => (
              <FormControl key={form.id} error={form.error} variant="outlined">
                <RedditTextField
                  id={form.id}
                  name={form.id}
                  type={form.type}
                  value={form.value}
                  error={form.error}
                  onChange={handleChange}
                  label={form.label}
                  variant="filled"
                  multiline={form.id === "message"}
                  rows={form.id === "message" ? 7 : 1}
                  margin="none"
                />
                <FormHelperText>
                  {form.error ? form.errorText : " "}
                </FormHelperText>
              </FormControl>
            ))}
            <LoadingButton
              disableElevation
              sx={{ height: 55 }}
              loading={loading}
              variant="contained"
              type="submit" 
            >
              Send Message
            </LoadingButton>
          </form>
        </Grid>
        <Grid item xs={12} marginTop={{ xs: 20, md: 50 }}>
          <Stack
            gap={{ xs: 20, md: 0 }}
            flexDirection={{ md: "row" }}
            justifyContent={{ md: "center" }}
          >
            {contactInfoBoxes.map((box) => (
              <InfoBox
                key={box.title}
                icon={box.icon}
                title={box.title}
                body={box.body}
              />
            ))}
          </Stack>
        </Grid>
      </Grid>
    </article>
  );
};
