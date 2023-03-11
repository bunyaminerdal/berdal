import { createClient } from "@supabase/supabase-js";
import { UserSignUpFormDataType } from "../../forms/SignUpForm";

const userSignUp = async (
  userSignUpData: UserSignUpFormDataType
): Promise<any> => {
  const supabase = await getSupaBaseClient();
  const { data: createdUser, error } = await supabase?.auth.signUp({
    email: userSignUpData.email,
    password: userSignUpData.password,
    options: {
      data: {
        fullName: userSignUpData.fullName,
      },
    },
  });
  return { data: createdUser, error: error };
};
export const getUserData = async (jwt: string): Promise<any> => {
  const supabase = await getSupaBaseClient();
  const { data: createdUser, error } = await supabase?.auth.getUser(jwt);
  return { data: createdUser, error: error };
};
export const refreshSession = async (jwt: string): Promise<any> => {
  const supabase = await getSupaBaseClient();
  const { data, error } = await supabase.auth.refreshSession({
    refresh_token: jwt,
  });
  return { data, error };
};
export const getSupaBaseClient = async () => {
  const supabase = await createClient(
    process.env.SUPABASE_URL ?? "",
    process.env.SUPABASE_ANON ?? ""
  );
  return supabase;
};
export default userSignUp;
