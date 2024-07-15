import Profile from '@/icons/Profile';

export default function SignUp() {
  return (
    <button className="flex items-center gap-2 text-slate-400 hover:text-slate-700">
      <Profile />
      <span>Sign up</span>
    </button>
  );
}
