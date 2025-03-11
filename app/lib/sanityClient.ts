import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: "ejifguxb",
  dataset: "production",
  apiVersion: "2023-03-09",
  token: "skHU4g30bd1HMThLIGqMO6PWLKrFBNmfBOkoiTzQj86xu5z2xlWHFAZZfZNmwNl48SIcoiBstjEzZBeIu01K5yAFABVgHZEsNQsDe1ykMn4tbKtpLVFnHs0NA4Bn7b9hj0z8iwIvKcBaGdAB6ptcEfRFWqEhKFOsMd7fCz3pQqk2o7njYxOT", // Required for writing data
  useCdn: false, // Disable CDN for write operations
});
