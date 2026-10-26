export type QuoteState = {
  status: "idle" | "success" | "error";
  message: string;
  errors?: Partial<
    Record<"name" | "phone" | "postcode" | "service" | "consent" | "form", string>
  >;
};

export const initialQuoteState: QuoteState = {
  status: "idle",
  message: "",
};
