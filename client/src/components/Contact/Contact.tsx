import { Button, TextField, Typography } from "@mui/material";
import { z } from "zod";
import useTr from "../../hooks/useTr";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const { tr } = useTr();
  const navigate = useNavigate();
  const schema = z.object({
    name: z
      .string()
      .min(1, tr.contact.fields.name.min)
      .max(400, tr.contact.fields.name.max),
    email: z
      .string()
      .min(1, tr.contact.fields.email.min)
      .max(400, tr.contact.fields.email.max)
      .email(tr.contact.fields.email.email),
    subject: z
      .string()
      .min(1, tr.contact.fields.subject.min)
      .max(1000, tr.contact.fields.subject.max),
  });

  type ContactSchemaType = z.infer<typeof schema>;
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
    resolver: zodResolver(schema),
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
      console.log(result);
      console.log(await result.text());
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
    <>
      <Typography variant="h1" mb={2}>
        {tr.contact.title}
      </Typography>
      <Typography variant="body1" mb={4}>
        {tr.contact.subtitle}
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        {renderField("name")}
        {renderField("email")}
        {renderField("subject", undefined, true)}
        <Button variant="contained" type="submit">
          {tr.contact.submit}
        </Button>
      </form>
    </>
  );
};

export default Contact;
