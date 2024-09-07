import { createClient } from '@supabase/supabase-js'



const supabaseUrl = 'https://lgdivzopjppmqrfbomjw.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxnZGl2em9wanBwbXFyZmJvbWp3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU3MDY4MjAsImV4cCI6MjA0MTI4MjgyMH0.yZuESSqUIurMsFyzd1-yMhfI7XTXzqFzF2yXNLGkdnk';




export const supabase = createClient(supabaseUrl, supabaseKey)

// export const signInUser = async ({username, password}) => await supabase.auth.signInWithPassword({
//   email: username,
//   password: password,
// })

// export const signOutUser = async () => await supabase.auth.signOut()

// export const addFunds = async (fund) => await supabase
//   .from('add_funds')
//   .insert(fund)
//   .select()

// export const getFundsByUserId = async (userId) => await supabase
//   .from('add_funds')
//   .select('*')
//   .eq('user_id', userId);


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
  

// export const checkIfEmailExists = async (email) => {
//   const {data, error} = await supabase
//   .from('users')
//   .select('email')
//   .eq('email, email');

//   if (error) {
//     console.error(error);
//     return false;
//   }

//   return Date.length > 0;
// }  