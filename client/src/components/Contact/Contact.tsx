import {
  Box,
  Button,
  Paper,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import useTr from "../../hooks/useTr";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import useContactSchema, { ContactSchemaType } from "./Contact.schema";

const Contact = () => {
  const { tr } = useTr();
  const navigate = useNavigate();
  const theme = useTheme();
  const isNightMode = theme.palette.mode === "dark";

  const {
    control,
    trigger,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactSchemaType>({
    defaultValues: {
      name: "",
      email: "",
      subject: "",
    },
    resolver: zodResolver(useContactSchema().schema),
  });

  const onSubmit = async (data: ContactSchemaType) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("subject", data.subject);

    try {
      const result = await fetch("https://formspree.io/f/xovjajqj", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });
      if (result.ok) {
        navigate("/thanks");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const renderField = (
    fieldName: "name" | "email" | "subject",
    type?: "email",
    multiline?: boolean
  ) => (
    <Controller
      control={control}
      render={({ field: { onChange, onBlur, value } }) => (
        <TextField
          focused
          required
          type={type}
          variant="outlined"
          size="medium"
          fullWidth
          onBlur={() => {
            onBlur();
            trigger(fieldName);
          }}
          onChange={onChange}
          label={tr.contact.fields[fieldName].label}
          error={!!errors[fieldName]?.message}
          helperText={errors[fieldName]?.message}
          value={value}
          sx={{ marginBottom: 4 }}
          multiline={multiline}
          rows={multiline ? 10 : undefined}
        />
      )}
      name={fieldName}
    />
  );

  return (
    <Box>
      <Typography variant="h1" mb={2}>
        {tr.contact.title}
      </Typography>

      <Paper sx={{ p: 2 }}>
        <Typography variant="body1" mb={4}>
          {tr.contact.subtitle}
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          {renderField("name")}
          {renderField("email")}
          {renderField("subject", undefined, true)}

          <Button
            variant={isNightMode ? "outlined" : "contained"}
            type="submit"
            color="primary"
          >
            {tr.contact.submit}
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default Contact;
