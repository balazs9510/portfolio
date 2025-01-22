import { z } from "zod";
import useTr from "../../hooks/useTr";

// Define the schema structure outside the hook
const createSchema = (tr: ReturnType<typeof useTr>["tr"]) =>
  z.object({
    name: z
      .string()
      .min(5, tr.contact.fields.name.min)
      .max(400, tr.contact.fields.name.max),
    email: z
      .string()
      .min(1, tr.contact.fields.email.min)
      .max(400, tr.contact.fields.email.max)
      .email(tr.contact.fields.email.email),
    subject: z
      .string()
      .min(100, tr.contact.fields.subject.min)
      .max(1000, tr.contact.fields.subject.max),
  });

export type ContactSchemaType = z.infer<ReturnType<typeof createSchema>>;

const useContactSchema = () => {
  const { tr } = useTr();

  const schema = createSchema(tr);

  return { schema };
};

export default useContactSchema;
