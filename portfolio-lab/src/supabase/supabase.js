import { createClient } from '@supabase/supabase-js'






export const supabase = createClient(supabaseUrl, supabaseKey)

export const signInUser = async ({username, password}) => await supabase.auth.signInWithPassword({
  email: username,
  password: password,
})

// export const UsersList = async ()

// export const signOutUser = async () => await supabase.auth.signOut()

export const sendFormulaGiveThings = async (formData) => await supabase
  .from('donations')
  .insert(formData)


export const sendContactForm = async (formula) => await supabase
  .from('formularz')
  .insert(formula)
  

export const getUsersByUserId = async (userId) => await supabase
  .from('users')
  .select('*')
  .eq('user_id', userId);


// export const saveCurrentState = async (state) => await supabase
//   .from('saveat')
//   .insert(state)
//   .select();


// export const getCurrencyByUserId = async (userId) => await supabase
//   .from('saveat')
//   .select('*')
//   .eq('user_id', userId);

  

export const signUpUser = async ({username, password}) =>
await supabase.auth.signUp({
    email: username,
    password: password
  })
  

export const checkIfEmailExists = async (email) => {
  const {data, error} = await supabase
  .from('users')
  .select('email')
  .eq('email, email');

  if (error) {
    console.error('blad');
    return false;
  }

  return Date.length > 0;
}  